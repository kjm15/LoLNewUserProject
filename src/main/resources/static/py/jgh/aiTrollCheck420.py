#-*- coding:utf-8 -*-
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json
from sklearn.neighbors import KNeighborsClassifier
import requests
import pymysql
import random
from tqdm import tqdm
import time
import math
kn = KNeighborsClassifier(n_neighbors=3, weights='distance')

#########################
def connect_mysql(db='mydb'):
    conn = pymysql.connect(host='svc.sel4.cloudtype.app', port=32509,
                        user='root', password='1234',
                        db=db, charset='utf8')
    return conn
conn = connect_mysql()
cursor = conn.cursor()
queueId = str(420) #큐아이디
limit_value = str(5000) # 리미트값
############################

data = sys.argv[1:]

# print(data)

key = data[0]
tier = data[1]
teamPosition = data[2]
gameDuration = int(data[3])
kda = float(data[4])
totalDamageDealtToChampions = int(int(data[5])/gameDuration) 
goldEarned = int(int(data[6])/gameDuration)
championName = data[7]
# print(championName)
# print(gameDuration)
# key= '123'
# kda = 10
# totalDamageDealtToChampions = 1200
# goldEarned = 600

# championName = 'Rumble' #캐릭터

#졌을때 평균 구하기######################################################################################################################################

query = "select win,gameDuration,kda,totalDamageDealtToChampions,goldEarned from riottvT where tier = '" +tier+ "' and teamPosition = '" +teamPosition+ "' and championName = '" +championName+ "' and queueId = '" +queueId+ "' limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()
data = list(result)

lose_gameDuration_List = []
lose_kda_List = []
lose_Mean_totalDamageDealtToChampions = []
lose_Mean_goldEarned = []

win_gameDuration_List = []
win_kda_List = []
win_Mean_totalDamageDealtToChampions = []
win_Mean_goldEarned = []

for e in data:
    win,gameDuration,kda,totalDamageDealtToChampions,goldEarned = e
    if win == 'False':
        lose_gameDuration_List.append(gameDuration)
        lose_kda_List.append(kda)
        lose_Mean_totalDamageDealtToChampions.append(int(totalDamageDealtToChampions/gameDuration))
        lose_Mean_goldEarned.append(int(goldEarned/gameDuration))
    elif win == 'True' :
        win_gameDuration_List.append(gameDuration)
        win_kda_List.append(kda)
        win_Mean_totalDamageDealtToChampions.append(int(totalDamageDealtToChampions/gameDuration))
        win_Mean_goldEarned.append(int(goldEarned/gameDuration))
# print(win_gameDuration_List)

#######################################################################################################################################
conn.close()
allkda = win_kda_List+lose_kda_List
Mean_totalDamageDealtToChampions = win_Mean_totalDamageDealtToChampions + lose_Mean_totalDamageDealtToChampions
Mean_goldEarned = win_Mean_goldEarned + lose_Mean_goldEarned

tier_data=[[k,t,g]for k, t ,g in zip(allkda,Mean_totalDamageDealtToChampions,Mean_goldEarned)]

tier_target=[1]*len(win_kda_List)+[0]*len(lose_kda_List)

kn.fit(tier_data,tier_target)
a1 = kn.score(tier_data,tier_target)

trans={1:'정상', 0:'패'}
a = trans[kn.predict([[kda,totalDamageDealtToChampions,goldEarned]])[0]]

if len(tier_target) < 50 : 

    data5 = {key:"데이터부족" , "정확도" : a1 , "총데이터길이"  :len(tier_target), '구간' : tier , '캐릭' : championName}
else :
    data5 = {key:a , "정확도" : a1 , "총데이터길이"  :len(tier_target), '구간' : tier , '캐릭' : championName}  
json_string = json.dumps(data5)
# print(a, a1)
print(json_string)
