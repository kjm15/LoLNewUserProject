/**
 * 
 */


function showGameTamble(res, data) {
	
	
	let str = ''
	let queue = ''
	let spentTime = ''
	let ingamespentTime = ''
	let win_lose = ''
	let spellD = ''
	let spellF = ''
	let kills = ''
	let deaths = ''
	let assists = ''
	let kda = ''
	let mykill = ''
	let wardscore = ''
	let totalCs = ''
	let dragon = ''

	//	<div class="graph1">그래프용</div>
	str += `
	<div class="containerXX">
		<div class="containerXl"></div>
		<div class="containerXC">
		`
	for (let i in res) {
		sss = Number(i);
		let goBtn = sss + (data['matchCnt'])*4
		
		var timeStamp = Date.now();
		gameEndTimestampString = res[i]["info"][0]['gameEndTimestamp']
		gameStartTimestampString = res[i]["info"][0]['gameStartTimestamp']

		gameEndTimestamp = Number(gameEndTimestampString)
		gameStartTimestamp = Number(gameStartTimestampString)

		loltime = (timeStamp - gameEndTimestamp) // ex) 몇일전입니다.

		ingametime = (gameEndTimestamp - gameStartTimestamp) // ex) 31분전 게임입니다.
		let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
		let hour = Math.floor(loltime / 1000 / 60 / 60);
		let min = Math.floor(loltime / 1000 / 60);

		if (day == 0 && hour == 0) {
			spentTime = min + "분 전";
		} else if (day == 0) {
			spentTime = hour + "시간 전";
		} else {
			spentTime = day + "일 전";
		}
		let aaa = Math.floor(ingametime / 1000 / 60);
		ingamespentTime = aaa + "분 게임";
		for (j in res[i]['info']) {
			if (res[i]["info"][j]['queueId'] == 450) {
				queue = "칼바람"
			} else if (res[i]["info"][j]['queueId'] == 490) {
				queue = "빠른대전"
			} else if (res[i]["info"][j]['queueId'] == 420) {
				queue = "솔로랭크"
			} else if (res[i]["info"][j]['queueId'] == 440) {
				queue = "자유랭크"
			} else if (res[i]["info"][j]['queueId'] == 1900) {
				queue = "우르프"
			}
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				if (res[i]["info"][j]['win'] == '1') {
					win_lose = '승리'
				} else {
					win_lose = '패배'
				}
				if (aaa < 5) {
					win_lose = '다시하기'
				}


				champimg = res[i]["info"][j]['championName']
				spellD = res[i]["info"][j]['summonerSpellD']
				spellF = res[i]["info"][j]['summonerSpellF']
				kills = res[i]["info"][j]['kills']
				deaths = res[i]["info"][j]['deaths']
				assists = res[i]["info"][j]['assists']
				kda = (((kills + assists)) / deaths).toFixed(2)
				wardscore = res[i]["info"][j]['wardsKilled'] + res[i]["info"][j]['wardsPlaced']
				totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']

				if (res[i]['info'][j]['teamId'] == res[i]['teams'][0]['teamId']) {
					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][0]['kills']) * 100).toFixed(0)

					if (res[i]['info'][j]['queueId'] != 450) {
						dragon = res[i]['teams'][0]['dragon']
					} else {
						dragon = '포로간식'
					}
				} else if (res[i]['info'][j]['teamId'] == res[i]['teams'][1]['teamId']) {
					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][1]['kills']) * 100).toFixed(0)

					if (res[i]['info'][j]['queueId'] != 450) {
						dragon = res[i]['teams'][0]['dragon']
					} else {
						dragon = '포로간식'
					}
				}

			}



		}

		str += `
<div class="container1" id = 'container1'>
				<div class="box-left" >

					<div>${queue}</div>
					<div>${spentTime}</div>
					<div style="background-color: skyblue;">${win_lose}</div>
					<div style="background-color: skypink;">${ingamespentTime}</div>


				</div>
				<div class="box-center1">


					<div class="champSepll">

						<div class=box-left4>공백처리</div>
						<div class=box-center4><img width='80' height='80'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>
						<div class=box-center44>

							<div class="spell1"><img width='30' height='30'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'></div>
							<div class="spell2"><img width='30' height='30'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'></div>

						</div>
						<div class=box-right4 style="font-size: 13px;">${kills}/${deaths}/${assists}<br>${kda}:1평점</div>

					</div>
					<div class="item">
						<div class=itemNo>공백처리</div>
						<div class=itemStart>`
		for (j in res[i]['info']) {
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				for (let k = 0; k < 6; k++) {
					if (res[i]["info"][j]['item' + k] != 0) {
						str += `<img width='30' height='30' alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${res[i]["info"][j]['item' + k]}.png>&nbsp;&nbsp;`
					}
				}
			}
		}
		str += `</div>
					</div>

				</div>

				<div class="box-center2" style="font-size: 13px;">
				킬관여 ${mykill}%<br>
				시야 점수 ${wardscore}<br>
				cs ${totalCs}<br>
				드래곤 ${dragon}
				</div>
				<div class="box-center3">
				<div class="blueChamp">`
		for (j in res[i]['info']) {
			if (res[i]['info'][j]['teamId'] == 100) {
				str += `<div style ="text-align: left;"><img width='17' height='17'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${res[i]["info"][j]['championName']}.png'>
			</div>`
			}
		}
		str += `
					</div>
					<div class="redChamp">`
		for (j in res[i]['info']) {
			if (res[i]['info'][j]['teamId'] == 200) {
				str += `<div style ="text-align: left;"><img width='17' height='17'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${res[i]["info"][j]['championName']}.png'>
			</div>`
			}
		}

		str += `
				</div>
				</div>
				<div class="box-right" id ="gamebtn${goBtn}" onclick ="gamebtn(${goBtn})">더보기</div>

		
			</div>
			<div class="line1" id = 'line1${goBtn}' style='display: none'>흰색 선</div>`
		str += `<div class="container2" id='container2${goBtn}' style='display: none'>
				<div class="legend">
					<div class="teamId">블루팀</div>
					<div class=kda>kda</div>
					<div class=damage>가한피해량</div>
					<div class=cs>총합cs</div>
					<div class=itemTeam>아이템</div>
					</div>`
		let damageToChampions = []
		for (j in res[i]['info']) {
			damageToChampions.push(res[i]["info"][j]['totalDamageDealtToChampions'])

		}
		highestdamageToChampions = Math.max(...damageToChampions)
		for (j in res[i]['info']) {
			champimg = res[i]["info"][j]['championName']
			spellD = res[i]["info"][j]['summonerSpellD']
			spellF = res[i]["info"][j]['summonerSpellF']
			riotIdGameName = res[i]["info"][j]['riotIdGameName']
			champion_name_kr = res[i]["info"][j]['champion_name_kr']
			kills = res[i]["info"][j]['kills']
			deaths = res[i]["info"][j]['deaths']
			assists = res[i]["info"][j]['assists']
			kda = (((kills + assists)) / deaths).toFixed(2)
			totalDamageDealtToChampions = res[i]["info"][j]['totalDamageDealtToChampions']
			bartotalDamageDealtToChampions = (((totalDamageDealtToChampions / highestdamageToChampions) * 99)).toFixed(0)

			totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']

			if (res[i]['info'][j]['teamId'] == 100) {

				str += `<div class="ct1">
					<div class="teamId1">

						<div class=champImgM><img title='${champion_name_kr}' width='30' height='30'  alt='못 불러옴' 
						src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>
						<div class=spellM>
							<div class=spellM1>
								<img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class=spellM2><img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						</div>
						<div class=nickNameM>${riotIdGameName}</div>
					</div>
					<div class=kda1>
						<div class=killDeathAssist>${kills}/${deaths}/${assists}</div>
						<div class="kdaCheck">${kda}:1</div>
					</div>
					<div class=damage1>

						<div class=damageAmount>${totalDamageDealtToChampions}</div>
						<div class=damageGraph style="width: ${bartotalDamageDealtToChampions}%;"></div>
					</div>
					<div class=cs1>${totalCs}</div>
					<div class=itemTeamCheck>
						<div class=teamItem1>`

				for (let k = 0; k < 6; k++) {
					if (res[i]["info"][j]['item' + k] != 0) {
						str += `<img width='20' height='20' alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${res[i]["info"][j]['item' + k]}.png>&nbsp;&nbsp;`
					}
				}


				str += `</div>
					</div>
				</div>`
			}
		}
		str += `
		<div class="legend">
					<div class="teamId">레드팀</div>
					<div class=kda>kda</div>
					<div class=damage>가한피해량</div>
					<div class=cs>총합cs</div>
					<div class=itemTeam>아이템</div>
					</div>`

		for (j in res[i]['info']) {
			champimg = res[i]["info"][j]['championName']
			spellD = res[i]["info"][j]['summonerSpellD']
			spellF = res[i]["info"][j]['summonerSpellF']
			riotIdGameName = res[i]["info"][j]['riotIdGameName']
			champion_name_kr = res[i]["info"][j]['champion_name_kr']
			kills = res[i]["info"][j]['kills']
			deaths = res[i]["info"][j]['deaths']
			assists = res[i]["info"][j]['assists']
			kda = (((kills + assists)) / deaths).toFixed(2)
			totalDamageDealtToChampions = res[i]["info"][j]['totalDamageDealtToChampions']
			bartotalDamageDealtToChampions = (((totalDamageDealtToChampions / highestdamageToChampions) * 99)).toFixed(0)

			totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']

			if (res[i]['info'][j]['teamId'] == 200) {

				str += `<div class="ct1">
					<div class="teamId1">

						<div class=champImgM><img title='${champion_name_kr}' width='30' height='30'  alt='못 불러옴' 
						src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>
						<div class=spellM>
							<div class=spellM1>
								<img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class=spellM2><img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						</div>
						<div class=nickNameM>${riotIdGameName}</div>
					</div>
					<div class=kda1>
						<div class=killDeathAssist>${kills}/${deaths}/${assists}</div>
						<div class="kdaCheck">${kda}:1</div>
					</div>
					<div class=damage1>

						<div class=damageAmount>${totalDamageDealtToChampions}</div>
						<div class=damageGraph style="width: ${bartotalDamageDealtToChampions}%;"></div>
					</div>
					<div class=cs1>${totalCs}</div>
					<div class=itemTeamCheck>
						<div class=teamItem1>`

				for (let k = 0; k < 6; k++) {
					if (res[i]["info"][j]['item' + k] != 0) {
						str += `<img width='20' height='20' alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${res[i]["info"][j]['item' + k]}.png>&nbsp;&nbsp;`
					}
				}


				str += `</div>
					</div>
				</div>`
			}
		}


		str += `</div>
		`
	}
	str += `</div>
		<div class="containerXR"></div>
	</div>`
	str += `<center><button class='more' id = 'loadMore'>더 보기</button></center>`

	$('#puuid').append(str)


	$("#loadMore").on("click", function() {
		data['matchCnt']++;
		$('#loadMore').remove()
		bbb(data)
	})
}


