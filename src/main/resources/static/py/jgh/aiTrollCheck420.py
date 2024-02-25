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
kn = KNeighborsClassifier()

#########################
def connect_mysql(db='mydb'):
    conn = pymysql.connect(host='svc.sel4.cloudtype.app', port=32509,
                        user='root', password='1234',
                        db=db, charset='utf8')
    return conn
conn = connect_mysql()
cursor = conn.cursor()
limit_value = str(500) # 리미트값
queueId = str(420)
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
# print(gameDuration)
# tier = 'GOLD'
# teamPosition = 'TOP'
# kda = 10
# totalDamageDealtToChampions = 1200
# goldEarned = 600
#졌을때 평균 구하기
query = "select gameDuration from riottvT where win = 'FALSE' and queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_gameDuration_List = []
for e in data:
    a, *_ = e
    lose_gameDuration_List.append(a)
#이겼을때 평균 구하기
query = "select gameDuration from riottvT where win = 'TRUE' and queueId = '" +queueId+ "'and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
win_gameDuration_List = []
for e in data:
    a, *_ = e
    win_gameDuration_List.append(a)



query = "select kda from riottvT where win = 'FALSE' and queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda

cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_kda_List = []
for e in data:
    a, *_ = e
    lose_kda_List.append(a)

query = "select totalDamageDealtToChampions from riottvT where win = 'FALSE' and queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_totalDamageDealtToChampions_List = []
for e in data:
    a, *_ = e
    lose_totalDamageDealtToChampions_List.append(a)
#평균값    
lose_Mean_totalDamageDealtToChampions = []
for i in range(len(lose_totalDamageDealtToChampions_List)):
    a = int(lose_totalDamageDealtToChampions_List[i]/lose_gameDuration_List[i])
    lose_Mean_totalDamageDealtToChampions.append(a)



query = "select goldEarned from riottvT where win = 'FALSE' and  queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_goldEarned_List = []
for e in data:
    a, *_ = e
    lose_goldEarned_List.append(a)
#평균값    
lose_Mean_goldEarned = []
for i in range(len(lose_goldEarned_List)):
    a = int(lose_goldEarned_List[i]/lose_gameDuration_List[i])
    lose_Mean_goldEarned.append(a)
###################################################################################################################################################
query1 = "select kda from riottvT where win = 'True' and  queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda

cursor.execute(query1)
result1 = cursor.fetchall()

data1 = list(result1)

win_kda_List = []
for e in data1:
    a, *_ = e
    win_kda_List.append(a)

query1 = "select totalDamageDealtToChampions from riottvT where win = 'True'  and  queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda
cursor.execute(query1)
result = cursor.fetchall()

data = list(result)
win_totalDamageDealtToChampions_List = []
for e in data:
    a, *_ = e
    win_totalDamageDealtToChampions_List.append(a)
#평균값    
win_Mean_totalDamageDealtToChampions = []
for i in range(len(win_totalDamageDealtToChampions_List)):
    a = int(win_totalDamageDealtToChampions_List[i]/win_gameDuration_List[i])
    win_Mean_totalDamageDealtToChampions.append(a)

query1 = "select goldEarned from riottvT where win = 'True' and  queueId = '" +queueId+ "'and  teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda
cursor.execute(query1)
result = cursor.fetchall()

data = list(result)
win_goldEarned_List = []
for e in data:
    a, *_ = e
    win_goldEarned_List.append(a)
    
#평균값    
win_Mean_goldEarned = []
for i in range(len(win_goldEarned_List)):
    a = int(win_goldEarned_List[i]/win_gameDuration_List[i])
    win_Mean_goldEarned.append(a)


conn.close()
allkda = win_kda_List+lose_kda_List
Mean_totalDamageDealtToChampions = win_Mean_totalDamageDealtToChampions + lose_Mean_totalDamageDealtToChampions
Mean_goldEarned = win_Mean_goldEarned + lose_Mean_goldEarned


tier_data=[[k,t,g]for k, t ,g in zip(allkda,Mean_totalDamageDealtToChampions,Mean_goldEarned)]


tier_target=[1]*len(win_kda_List)+[0]*len(lose_kda_List)

kn.fit(tier_data,tier_target)
a1 = kn.score(tier_data,tier_target)
# kn.score(tier_data,tier_target)
# print(a1)
trans={1:'예측:승', 0:'예측:패'}
a = trans[kn.predict([[kda,totalDamageDealtToChampions,goldEarned]])[0]]

data5 = {key:a , "점수" : a1}

json_string = json.dumps(data5)

print(json_string)
