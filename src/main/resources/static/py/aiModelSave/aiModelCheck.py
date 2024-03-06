#-*- coding:utf-8 -*-
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import minmax_scale
from tqdm import tqdm
import time
import math
import joblib
#빅데이터전용
import pickle 


data = sys.argv[1:]
key = data[0]
tier = data[1]
teamPosition = data[2]
gameDuration = int(data[3])
kda = float(data[4])
totalDamageDealtToChampions = int(int(data[5])/gameDuration) 
goldEarned = int(int(data[6])/gameDuration)
championName = data[7]
queueId = str(data[8])
tier_my = [totalDamageDealtToChampions,goldEarned,kda]
mean = np.mean(tier_my, axis=0)
std = np.std(tier_my, axis=0)

new = (tier_my - mean) / std

str1 ='src/main/resources/static/py/aiModelSave/aiModel420/'+ queueId+'_'+tier+'_'+teamPosition+'_'+championName+'.pkl'
# str2 = './'+queueId+'_'+tier+'_'+teamPosition+ '_' + championName+'.pickle'
# with open(str2,'rb') as f:
#     loaded_model = pickle.load(f)
# str2 = './420_BRONZE_JUNGLE_LeeSin.pkl'	
loaded_model = joblib.load(str1)

trans={1:'승', 0:'패'}
a = trans[loaded_model.predict([new])[0]]



data5 = {key:a  , '티어' : tier , '캐릭' : championName, "key" : a}  
json_string = json.dumps(data5 , default=str)
print(json_string)

