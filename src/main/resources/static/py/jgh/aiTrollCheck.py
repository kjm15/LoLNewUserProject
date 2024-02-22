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
def sql_execute(conn, query):
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    return result

############################
conn = connect_mysql()
cursor = conn.cursor()
#############################

data = sys.argv[1:]
kda = data[0]

# myMap = data[0] #현재 json상태이므로 map으로 변경 요망


myMap = { "tier" : "GOLD" , "totalMinionsKilled":"150"}
tier = myMap['tier']

query = "select kda from riottvT where win = 'FALSE' and tier = " +"'"+ tier + "'" + "limit 10" #질때의 kda

cursor.execute(query)
data = sql_execute(conn, query)

data = list(data)

my_list = []
for e in data:
    a, *_ = e
    my_list.append(a)

print(my_list)

query = "select kda from riottvT where win = 'True' and tier = " +"'"+ tier + "'" + "limit 10" #이길때의 kda

cursor.execute(query)
data = sql_execute(conn, query)

data = list(data)

my_list1 = []
for e in data:
    a, *_ = e
    my_list1.append(a)

print(my_list1)
conn.commit()



# dia_ward_set = [5, 5, 5, 6, 4, 8, 7, 6, 5, 7]
# dia_cs_per_game = [90, 100, 80, 110, 100, 100, 80, 90, 110, 100]

# ibsgp_ward_set = [2, 1, 0, 3, 4, 5, 4, 2, 2, 3]
# ibsgp_cs_per_game = [50, 60, 50, 40, 60, 50, 40, 60, 70, 50]

# ward_set=dia_ward_set+ibsgp_ward_set
# cs_per_game=dia_cs_per_game+ibsgp_cs_per_game

tier_data=[[w,c]for w, c in zip(my_list1,my_list)]

tier_target=[1]*len(my_list1)+[0]*len(my_list)
kn.fit(tier_data,tier_target)

kn.score(tier_data,tier_target)
# kn.score(tier_data,tier_target)

trans={1:'다이아 이상 티어로 예측됩니다.', 0:'다이아 미만으로 예상됩니다.'}
a = trans[kn.predict([[kda]])[0]]
# print(a)
# print(trans[kn.predict([[cs,ward]])[0]])
data = {"result":a}
json_string = json.dumps(data)

print(json_string)

