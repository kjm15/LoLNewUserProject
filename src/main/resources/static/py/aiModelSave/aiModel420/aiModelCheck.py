#-*- coding:utf-8 -*-
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import minmax_scale
import requests
import pymysql
import random
from tqdm import tqdm
import time
import math
import joblib

#받은 데이터

data = sys.argv[1:]
tier = ''
key = data[0]
tier1 = data[1]
if tier1 == 'unRanked':
    tier == 'GOLD'
elif tier1 == 'Tier':
    tier == 'GOLD'   
else:
    tier = tier1
teamPosition = data[2]
gameDuration = int(data[3])
kda = float(data[4])
totalDamageDealtToChampions = int(int(data[5])/gameDuration) 
goldEarned = int(int(data[6])/gameDuration)
championName = data[7]
queueId = int(data[8])
tier_my = [totalDamageDealtToChampions,goldEarned,kda]

try:
    ####
    str1 = f'./aiModel420/{queueId}_{tier}_{teamPosition}_{championName}.pkl'

    loaded_model = joblib.load(str1)

    #z-정규화
    mean = np.mean(tier_my, axis=0)
    std = np.std(tier_my, axis=0)

    new = (tier_my - mean) / std

    trans={1:'승', 0:'패'}
    a = trans[loaded_model.predict([new])[0]]

    data5 = {key:a  , '구간' : tier , '캐릭' : championName, "key" : a}  
    json_string = json.dumps(queueId)
    print(json_string)
except Exception as e:
    data5 = {key:a , '구간' : tier , '캐릭' : championName, "key" : e }  
    json_string = json.dumps(data5)
    print(json_string)