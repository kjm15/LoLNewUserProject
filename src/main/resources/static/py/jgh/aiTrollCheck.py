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

############################

data = sys.argv[1:]

# data = map(data[0])
tier = data[0]
teamPosition = data[1]
kda = int(data[2])
totalDamageDealtToChampions = int(data[3])
goldEarned = int(data[4])
limit_value = str(20) # 리미트값
# tier = 'GOLD'
# teamPosition = 'TOP'
# kda = 10
# totalDamageDealtToChampions = 25302
# goldEarned = 17000


# myMap = data[0] #현재 json상태이므로 map으로 변경 요망

query = "select kda from riottvT where win = 'FALSE' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda

cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_kda_List = []
for e in data:
    a, *_ = e
    lose_kda_List.append(a)

query = "select totalDamageDealtToChampions from riottvT where win = 'FALSE' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" + "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_totalDamageDealtToChampions_List = []
for e in data:
    a, *_ = e
    lose_totalDamageDealtToChampions_List.append(a)

query = "select goldEarned from riottvT where win = 'FALSE' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #질때의 kda
cursor.execute(query)
result = cursor.fetchall()

data = list(result)
lose_goldEarned_List = []
for e in data:
    a, *_ = e
    lose_goldEarned_List.append(a)

###################################################################################################################################################
query1 = "select kda from riottvT where win = 'True' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda

cursor.execute(query1)
result1 = cursor.fetchall()

data1 = list(result1)

win_kda_List = []
for e in data1:
    a, *_ = e
    win_kda_List.append(a)

query1 = "select totalDamageDealtToChampions from riottvT where win = 'True' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda
cursor.execute(query1)
result = cursor.fetchall()

data = list(result)
win_totalDamageDealtToChampions_List = []
for e in data:
    a, *_ = e
    win_totalDamageDealtToChampions_List.append(a)

query1 = "select goldEarned from riottvT where win = 'True' and teamPosition = '"+teamPosition+"' and tier = " +"'"+ tier + "'" +  "limit " + limit_value #이길때의 kda
cursor.execute(query1)
result = cursor.fetchall()

data = list(result)
win_goldEarned_List = []
for e in data:
    a, *_ = e
    win_goldEarned_List.append(a)



conn.close()
allkda = win_kda_List+lose_kda_List
alltotalDamageDealtToChampions = win_totalDamageDealtToChampions_List + lose_totalDamageDealtToChampions_List
allgoldEarned = win_goldEarned_List + lose_goldEarned_List


tier_data=[[k,t,g]for k, t ,g in zip(allkda,alltotalDamageDealtToChampions,allgoldEarned)]


tier_target=[1]*len(win_kda_List)+[0]*len(lose_kda_List)

kn.fit(tier_data,tier_target)
a1 = kn.score(tier_data,tier_target)
# kn.score(tier_data,tier_target)
# print(a1)
trans={1:'경기 결과를 승리로 예측', 0:'경기결과를 패배로 예측'}
a = trans[kn.predict([[kda,totalDamageDealtToChampions,goldEarned]])[0]]

data = {"result":a}
json_string = json.dumps(data)

print(json_string)
# print(a)
