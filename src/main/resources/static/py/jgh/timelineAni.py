import requests
import pandas as pd
import pymysql
import random
from tqdm import tqdm
import time
import math
import sys
import json
import datetime

data = sys.argv[1:]
api_key = 'RGAPI-36ff1947-075a-4441-9e90-df81d5d1cd03'
matchId = data[0] 
# matchId = "KR_6966345756"
# print(data)

def connect_mysql(db='mydb'):
    conn = pymysql.connect(host='svc.sel4.cloudtype.app', port=32509,
                        user='root', password='1234',
                        db=db, charset='utf8')
    return conn

def sql_execute(conn, query):
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    return result

def get_matches_timelines(matchid,api_key):
    url2 = f'https://asia.api.riotgames.com/lol/match/v5/matches/{matchid}/timeline?api_key={api_key}'
    timelines = requests.get(url2).json()
    return timelines

def insert_matches_timeline_mysql(row, conn):
  
    query = (
        f"INSERT ignore INTO aiTimelineT(matchId,champion_name_kr, victim, x, y,now_time,timestamp)"
        f"VALUES (\'{row.matchId}\',(select champion_name_kr from RiotGameInfoT where matchId = \'{row.matchId}\' and participantId = \'{row.participantId}\'),(select champion_name_kr from RiotGameInfoT where matchId = \'{row.matchId}\' and participantId = \'{row.victim}\'),\'{row.x}\', \'{row.y}\', \'{row.now_time}\',  \'{row.timestamp}\' )"
    )
    sql_execute(conn, query)
def insert_matches_monster_timeline_mysql(row, conn):
  
    query = (
        f"INSERT ignore INTO aiTimelineT(matchId,champion_name_kr, victim, x, y,now_time,timestamp)"
        f"VALUES (\'{row.matchId}\',(select champion_name_kr from RiotGameInfoT where matchId = \'{row.matchId}\' and participantId = \'{row.participantId}\'),\'{row.victim}\',\'{row.x}\', \'{row.y}\', \'{row.now_time}\',  \'{row.timestamp}\' )"
    )
    sql_execute(conn, query)

def sql_execute(conn, query):
    try:
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
    except Exception as e:
        print(e)
        conn.rollback()
    finally:
        cursor.close()


timelines = get_matches_timelines(matchId,api_key)

mytime_Gamer_list = []
mytime_monster_list = []
timlines_list = timelines['info']['frames']
for i in range(len(timlines_list)): #경기중 i분
    events_list = timlines_list[i]['events']
    for j in range(len(events_list)): #i분중의 j번째의 이벤트
        if events_list[j]['type'] == "CHAMPION_KILL":
            mynow_dict = []
            killer = events_list[j]['killerId']
            victim = events_list[j]['victimId']
            x = events_list[j]['position']['x']
            y = events_list[j]['position']['y']
            # assist =  events_list[j][assistingParticipantIds] 추후에 도전
            timestamp = events_list[j]['timestamp']
            # now_time = datetime.datetime.fromtimestamp(timestamp)
            
            now_min = int(timestamp / 1000/60)
            seconds = (timestamp / 1000/60)

            a = seconds - now_min
            now_second = int(60 * a) 
            mynow_dict.append(matchId)    
            participantId = killer
            mynow_dict.append(participantId)
            mynow_dict.append(victim) 
            mynow_dict.append(round(x/15000,2))
            mynow_dict.append(round(y/15000,2)) 
            mynow_dict.append(str(now_min) + '분' + str(now_second) + '초') 
            mynow_dict.append(timestamp) 
            mytime_Gamer_list.append(mynow_dict)

        if  events_list[j]['type'] == "ELITE_MONSTER_KILL": #드래곤
            mynow_dict = []
            monsterSubType = ''
            monsterType = events_list[j]['monsterType']
            if monsterType == "DRAGON" :
                if events_list[j]['monsterSubType'] == "CHEMTECH_DRAGON":
                    monsterSubType = "화학공학 드래곤"
                elif events_list[j]['monsterSubType'] == "FIRE_DRAGON":
                    monsterSubType = "화염 드래곤"   
                elif events_list[j]['monsterSubType'] == "AIR_DRAGON":
                    monsterSubType = "바람 드래곤"
                elif events_list[j]['monsterSubType'] == "HEXTECH_DRAGON":
                    monsterSubType = "마법공학 드래곤"
                elif events_list[j]['monsterSubType'] == "EARTH_DRAGON":
                    monsterSubType = "대지 드래곤"
                elif events_list[j]['monsterSubType'] == "WATER_DRAGON":
                    monsterSubType = "바다 드래곤"
                elif events_list[j]['monsterSubType'] == "ELDER_DRAGON":                         
                    monsterSubType = "장로 드래곤"
            if monsterType == "RIFTHERALD" :
                monsterSubType = "협곡의 전령 처치"
            if monsterType == "HORDE":
                monsterSubType = "공허 유충 처치"    
            if monsterType == "BARON_NASHOR":
                monsterSubType = "내셔남작(바론) 처치"

            killer = events_list[j]['killerId']
            
            x = events_list[j]['position']['x']
            y = events_list[j]['position']['y']
            timestamp = events_list[j]['timestamp']
            now_min = int(timestamp / 1000/60)
            seconds = (timestamp / 1000/60)
            
            a = seconds - now_min
            now_second = int(60 * a)

            mynow_dict.append(matchId) 
            participantId = killer
            mynow_dict.append(participantId) 
            victim = monsterSubType
            mynow_dict.append(victim) 
            mynow_dict.append(round(x/15000,2)) 
            mynow_dict.append(round(y/15000,2))
            mynow_dict.append(str(now_min) + '분' + str(now_second) + '초')
            mynow_dict.append(timestamp) 
            mytime_monster_list.append(mynow_dict)


df =pd.DataFrame(mytime_Gamer_list,columns = ['matchId','participantId','victim','x','y','now_time','timestamp'])
df_monster =pd.DataFrame(mytime_monster_list,columns = ['matchId','participantId','victim','x','y','now_time','timestamp'])
conn = connect_mysql()
# 데이터 넣기
df.apply(lambda x: insert_matches_timeline_mysql(x, conn), axis=1)
df_monster.apply(lambda x: insert_matches_monster_timeline_mysql(x, conn), axis=1)
# # commit을 통해 데이터 삽입을 완료한 후에 update 실행
conn.commit()
conn.close()
data = {"result":"저장성공"}
json_string = json.dumps(data)

print(json_string)
