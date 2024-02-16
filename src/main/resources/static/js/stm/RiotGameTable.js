/**
 * 
 */


function showGameTamble(res, data) {

	console.log(res)
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
	str += `
	<div class="containerXX">
		<div class="containerXl"></div>


		<div class="containerXC">

			<div class="graph1">그래프용</div>
			
			`
	for (let i in res) {
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
<div class="container1">
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
				<div class="box-right" id ="gamebtn${i}" onclick ="gamebtn(${i})">더보기</div>

		
			</div>
			<div class="line1" id = 'line1${i}' style='display: none'>흰색 선</div>`
		str += `<div class="container2" id='container2${i}' style='display: none'>
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
						<div class=damageGraph>그래프</div>
					</div>
					<div class=cs1>총합cs</div>
					<div class=itemTeamCheck>
						<div class=teamItem1>아이템1</div>
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
			if (res[i]['info'][j]['teamId'] == 100) {
				str += `<div class="ct1">
					<div class="teamId1">

						<div class=champImgM>사진</div>
						<div class=spellM>

							<div class=spellM1>
								<img width='23' height='23' alt='못 불러옴'
									src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/1001.png>
							</div>
							<div class=spellM2>스펠2</div>
						</div>
						<div class=nickNameM>닉네임</div>
					</div>
					<div class=kda1>
						<div class=killDeathAssist>k/d/a</div>
						<div class="kdaCheck">kda</div>
					</div>
					<div class=damage1>

						<div class=damageAmount>숫자</div>
						<div class=damageGraph>그래프</div>
					</div>
					<div class=cs1>총합cs</div>
					<div class=itemTeamCheck>
						<div class=teamItem1>아이템1</div>
					</div>
				</div>`
			}
		}


		str += `</div>
		`
	}
	str += `</div>
		<div class="containerXR"></div>
	</div>
	<div class=container3></div>`
	$('#puuid').append(str)
}

	//	for (let i = 0; i < res.length; i++) {
	//	var timeStamp = Date.now();
	//	gameEndTimestampString = res[0]["info"][0]['gameEndTimestamp']
	//
	//	gameEndTimestamp = Number(gameEndTimestampString)
	//	loltime = (timeStamp - gameEndTimestamp) // ex) 몇일전입니다.
	//
	//	let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
	//	let hour = Math.floor(loltime / 1000 / 60 / 60);
	//	let min = Math.floor(loltime / 1000 / 60);
	//	var spentTime;
	//	if (day == 0 && hour == 0) {
	//		spentTime = min + "분 전";
	//	} else if (day == 0) {
	//		spentTime = hour + "시간 전";
	//	} else {
	//		spentTime = day + "일 전";
	//	}
	//	//	}
	//	for (let j = 0; j < res[0]['info'].length; j++) {
	//		if (data['gameName'] == res[0]["info"][j]['riotIdGameName'] || data['gameName'] == res[0]["info"][j]['summonerName']) {
	//			profileIcon = res[0]["info"][j]['profileIcon']
	//			summonerLevel = res[0]["info"][j]['summonerLevel']
	//		}
	//	}
	//	str += "<div id = 'newList'>"
	//	str += "<div class='profile-header'>"
	//	str += "<div class='left'>"
	//	str += "<div class='left-top'>"
	//	str += "<div class='p-c-img'><img width='100' height='100'  alt='못 불러옴	' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/" + profileIcon + ".png'></div>"
	//	str += "<div class='p-info'>"
	//	str += "<div class='p-name'>" + data['gameName'] + "</div>"
	//	str += "<div class='p-level'>플레이어레벨 : " + summonerLevel + "</div>"
	//	str += "<div class='playgames'>최근게임 : " + spentTime + " </div>"
	//	str += "</div>"
	//	str += "</div>"
	//	str += "<div class='left-bottom'>미정	</div>"
	//	str += "</div>"
	//	str += "<div class='right'>"
	//	str += "<div class='right-top'>그래프or메일함</div>"
	//	str += "<div class='right-bottom'>미정</div>"
	//	str += "</div>"
	//	str += "</div>"
	//
	//	str += "<div class='container1'>"
	//	for (let i = 0; i < res.length; i++) {
	//		str += "<div class='win-lose-board' id='res" + i + "'>"
	//		str += "<div class='match-header'>"
	//		str += "<div class='one'>"
	//		let queue = ''
	//		let win_lose = ''
	//		let champimg = ''
	//		let kills = ''
	//		let deaths = ''
	//		let assists = ''
	//		let kda = ''
	//		let mykill = ''
	//		let dragon = ''
	//
	//		let upteamcolor = ''
	//		let upteamwin = ''
	//
	//		let downteamcolor = ''
	//		let downteamwin = ''
	//
	//		for (let j = 0; j < res[i]['info'].length; j++) {
	//			if (res[i]["info"][j]['queueId'] == 450) {
	//				queue = "칼바람"
	//			} else if (res[i]["info"][j]['queueId'] == 490) {
	//				queue = "빠른대전"
	//			} else if (res[i]["info"][j]['queueId'] == 420) {
	//				queue = "솔로랭크"
	//			} else if (res[i]["info"][j]['queueId'] == 440) {
	//				queue = "자유랭크"
	//			} else if (res[i]["info"][j]['queueId'] == 1900) {
	//				queue = "우르프"
	//			}
	//			// 게임모드
	//			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
	//				if (res[i]["info"][j]['win'] == '1') {
	//					win_lose = '승리'
	//				} else {
	//					win_lose = '패배'
	//				}
	//			}
	//			// 승패
	//			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
	//
	//
	//				champimg = res[i]["info"][j]['championName']
	//				kills = res[i]["info"][j]['kills']
	//				deaths = res[i]["info"][j]['deaths']
	//				assists = res[i]["info"][j]['assists']
	//				kda = res[i]["info"][j]['kda']
	//
	//				item0 = res[i]["info"][j]['item0']
	//				item1 = res[i]["info"][j]['item1']
	//				item2 = res[i]["info"][j]['item2']
	//				item3 = res[i]["info"][j]['item3']
	//				item4 = res[i]["info"][j]['item4']
	//				item5 = res[i]["info"][j]['item5']
	//				spellD = res[i]["info"][j]['summonerSpellD']
	//				spellF = res[i]["info"][j]['summonerSpellF']
	//			}
	//			// 플레이어 챔피언 사진 and kdad
	//			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
	//				if (res[i]['info'][j]['teamId'] == res[i]['teams'][0]['teamId']) {
	//					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][0]['kills']) * 100).toFixed(0)
	//
	//					if (res[i]['info'][j]['queueId'] != 450) {
	//						dragon = "드래곤 킬:" + res[i]['teams'][0]['dragon']
	//					} else {
	//						dragon = '포로간식 사용 횟수 들어갈 예정'
	//					}
	//
	//
	//				} else if (res[i]['info'][j]['teamId'] == res[i]['teams'][1]['teamId']) {
	//					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][1]['kills']) * 100).toFixed(0)
	//					if (res[i]['info'][j]['queueId'] != 450) {
	//						dragon = "드래곤 킬:" + res[i]['teams'][1]['dragon']
	//					} else {
	//						dragon = '포로간식 사용 횟수 들어갈 예정'
	//					}
	//
	//
	//				}
	//
	//			}
	//
	//
	//
	//		}
	//
	//
	//		var timeStamp = Date.now();
	//		gameEndTimestampString = res[i]["info"][0]['gameEndTimestamp']
	//		gameStartTimestampString = res[i]["info"][0]['gameStartTimestamp']
	//
	//		gameEndTimestamp = Number(gameEndTimestampString)
	//		gameStartTimestamp = Number(gameStartTimestampString)
	//
	//		loltime = (timeStamp - gameEndTimestamp) // ex) 몇일전입니다.
	//
	//		ingametime = (gameEndTimestamp - gameStartTimestamp) // ex) 31분전 게임입니다.
	//		let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
	//		let hour = Math.floor(loltime / 1000 / 60 / 60);
	//		let min = Math.floor(loltime / 1000 / 60);
	//		var spentTime;
	//		if (day == 0 && hour == 0) {
	//			spentTime = min + "분 전";
	//		} else if (day == 0) {
	//			spentTime = hour + "시간 전";
	//		} else {
	//			spentTime = day + "일 전";
	//		}
	//
	//
	//		let aaa = Math.floor(ingametime / 1000 / 60);
	//		ingamespentTime = aaa + "분 게임";
	//		str += "<div class='puuid'>"
	//		str += queue
	//		str += "</div>"
	//
	//		str += "<div class='win-lose' id='win-lose'>"
	//		str += win_lose
	//		str += "</div>"
	//		str += "</div>"
	//		str += "<div class='two'>"
	//		str += "<div class='champimg'><img width='100' height='100'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + champimg + ".png'></div>"
	//		str += "<div class='spellgroup'>"
	//		//		https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerSnowball.png
	//		str += "<div class='spell1'><img width='25' height='25'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/" + spellD + ".png'></div>"
	//		str += "<div class='spell2'><img width='25' height='25'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/" + spellF + ".png'></div>"
	//		str += "</div>"
	//		str += "<div class='number'>"
	//		str += "<div class='KDA'>" + kills + "/" + deaths + "/" + assists + "</div>"
	//		str += "<div class='grade'>평점(" + ((kills + assists) / deaths).toFixed(2) + ":1)</div>"
	//		str += "</div>"
	//		str += "<div class='itemlist'>"
	//		str += "<div class='tool'>"
	//
	//		str += "<div class='item1'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item0 + ".png'></div>"
	//		str += "<div class='item2'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item1 + ".png'></div>"
	//		str += "<div class='item3'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item2 + ".png'></div>"
	//		str += "<div class='item4'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item3 + ".png'></div>"
	//		str += "<div class='item5'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item4 + ".png'></div>"
	//		str += "<div class='item6'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/" + item5 + ".png'></div>"
	//		str += "</div>"
	//		str += "</div>"
	//		str += "</div>"
	//		str += "<div class='three'>"
	//		str += "<div class='p-kill'>킬관여율:" + mykill + "%</div>"
	//		str += "<div class='dragon'>" + dragon + "</div>"
	//		str += "</div>"
	//		str += "<div class='four'>"
	//		str += "<div class='timestamp'>" + spentTime + "</div>"
	//		str += "<div class='gametimes'>" + ingamespentTime + "</div>"
	//		str += "</div>"
	//		str += "<div class ='actions'>"
	//		str += "<button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button>"
	//		str += "</div>"
	//
	//		str += "<br><br><br><br><br><br>"
	//		for (let j = 0; j < res[i]['info'].length; j++) {
	//			if (res[i]['info'][j]['teamId'] == 100) {
	//				upteamcolor = '블루팀'
	//				if (res[i]['info'][j]['win'] == '1') {
	//					upteamwin = '승리'
	//				} else {
	//					upteamwin = '패배'
	//				}
	//
	//			}
	//
	//			if (res[i]['info'][j]['teamId'] == 200) {
	//				downteamcolor = '레드팀'
	//				if (res[i]['info'][j]['win'] == '1') {
	//					downteamwin = '승리'
	//				} else {
	//					downteamwin = '패배'
	//				}
	//
	//			}
	//		}
	//
	//
	//		str += "<table class='resultwin'style='display: none' id = 'gametable" + i + "'> " //
	//		str += "<thead>"
	//		str += "<tr>"
	//		str += "<th colspan='2' class='th'>" + upteamwin + "(" + upteamcolor + ")</th>"
	//		str += "<th class='th'>KDA(평점)</th>"
	//		str += "<th  class='th'>블루팀받은피해량</th>"
	//		str += "<th  class='th'>블루팀가한피해량</th>"
	//		str += "<th class='th'>총합 CS</th>"
	//		str += "<th colspan='2' class='th'>아군아이템</th>"
	//		str += "</tr>"
	//		str += "</thead>"
	//		str += "<tbody>"
	//
	//		let damageToChampions = []
	//		let damageTaken = []
	//		for (let j = 0; j < res[i]['info'].length; j++) {
	//			damageToChampions.push(res[i]["info"][j]['totalDamageDealtToChampions'])
	//			damageTaken.push(res[i]["info"][j]['totalDamageTaken'])
	//		}
	//
	//		highestdamageToChampions = Math.max(...damageToChampions)
	//		highdamageTaken = Math.max(...damageTaken)
	//		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
	//
	//
	//
	//
	//			if (res[i]['info'][j]['teamId'] == 100) {
	//				teamchampimg = res[i]["info"][j]['championName']
	//				//				teamchampKrName = res[i]["info"][j]['champion_name_kr']
	//				riotIdGameName = res[i]["info"][j]['riotIdGameName']
	//				teamkills = res[i]["info"][j]['kills']
	//				teamdeaths = res[i]["info"][j]['deaths']
	//				teamassists = res[i]["info"][j]['assists']
	//				teamKDA = res[i]["info"][j]['kda']
	//				totalMinionsKilled = res[i]["info"][j]['totalMinionsKilled']
	//				wardsKilled = res[i]["info"][j]['wardsKilled']
	//				totalAllyJungleMinionsKilled = res[i]["info"][j]['totalAllyJungleMinionsKilled']
	//				Number(totalMinionsKilled);
	//				Number(wardsKilled);
	//				Number(totalAllyJungleMinionsKilled);
	//				cs = totalMinionsKilled + wardsKilled + totalAllyJungleMinionsKilled
	//				totalDamageDealtToChampions = res[i]["info"][j]['totalDamageDealtToChampions'] //챔피언에게가한피해량
	//				totalDamageTaken = res[i]["info"][j]['totalDamageTaken'] //받은 총 피해량
	//				bartotalDamageDealtToChampions = (((totalDamageDealtToChampions / highestdamageToChampions) * 99)).toFixed(0)
	//
	//				bartotalDamageTaken = (((totalDamageTaken / highdamageTaken) * 99)).toFixed(0)
	//				//가장 높은 딜량을 기준으로 나눠야할듯
	//				str += "<tr>"
	//				str += "<td colspan='2' class='cimg'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + teamchampimg + ".png'>[" + riotIdGameName + "]</td>"
	//				str += "<td class='K/D/A'>" + teamkills + "/" + teamdeaths + "/" + teamassists + "(" + ((teamkills + teamassists) / teamdeaths).toFixed(2) + ")" + "</td>"
	//				str += "<td class='damageDealt'>"
	//				str += `
	//				<div class="RiotGamechart">
	//    			<div class="RiotGamebar" style="width: ${bartotalDamageDealtToChampions}%;">${totalDamageDealtToChampions}</div>
	//				</div>
	//				`
	//				str += "</td>"
	//				str += "<td class='damageReceived'>"
	//				str += `
	//				<div class="RiotGamechart">
	//    			<div class="RiotGamebar2" style="width: ${bartotalDamageTaken}%;">${totalDamageTaken}</div>
	//				</div>
	//				`
	//				str += "</td>"
	//				str += "<td class='cs'>" + cs + "</td>"
	//				str += "<td class='item'>"
	//				str += "<div class='Titemlist'>"
	//				str += "<div class='Titem1'></div>"
	//				str += "<div class='Titem2'></div>"
	//				str += "<div class='Titem3'></div>"
	//				str += "<div class='Titem4'></div>"
	//				str += "<div class='Titem5'></div>"
	//				str += "<div class='Titem6'></div>"
	//				str += "</div>"
	//				str += "</td>"
	//				str += "</tr>"
	//			}
	//		}
	//		str += "</tbody>"
	//		str += "<thead>"
	//		str += "<tr>"
	//		str += "<th colspan='2' class='th'>" + downteamwin + "(" + downteamcolor + ")</th>"
	//		str += "<th class='th'>KDA(평점)</th>"
	//		str += "<th  class='th'>레드팀받은피해량</th>"
	//		str += "<th  class='th'>레드팀가한피해량</th>"
	//		str += "<th class='th'>총합 CS</th>"
	//		str += "<th colspan='2' class='th'>적군아이템</th>"
	//		str += "</tr>"
	//		str += "</thead>"
	//		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
	//			if (res[i]['info'][j]['teamId'] == 200) {
	//				teamchampimg = res[i]["info"][j]['championName']
	////				teamchampKrName = res[i]["info"][j]['champion_name_kr']
	//				riotIdGameName = res[i]["info"][j]['riotIdGameName']
	//				teamkills = res[i]["info"][j]['kills']
	//				teamdeaths = res[i]["info"][j]['deaths']
	//				teamassists = res[i]["info"][j]['assists']
	//				teamKDA = res[i]["info"][j]['kda']
	//				totalMinionsKilled = res[i]["info"][j]['totalMinionsKilled']
	//				wardsKilled = res[i]["info"][j]['wardsKilled']
	//				totalAllyJungleMinionsKilled = res[i]["info"][j]['totalAllyJungleMinionsKilled']
	//				Number(totalMinionsKilled);
	//				Number(wardsKilled);
	//				Number(totalAllyJungleMinionsKilled);
	//				cs = totalMinionsKilled + wardsKilled + totalAllyJungleMinionsKilled
	//
	//				totalDamageDealtToChampions = res[i]["info"][j]['totalDamageDealtToChampions'] //챔피언에게가한피해량
	//				totalDamageTaken = res[i]["info"][j]['totalDamageTaken'] //받은 총 피해량
	//
	//				bartotalDamageDealtToChampions = (((totalDamageDealtToChampions / highestdamageToChampions) * 99)).toFixed(0)
	//
	//				bartotalDamageTaken = (((totalDamageTaken / highdamageTaken) * 99)).toFixed(0)
	//				str += "<tr>"
	//				str += "<td colspan='2' class='cimg'><img width='23' height='23'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + teamchampimg + ".png'>[" + riotIdGameName + "]</td>"
	//				str += "<td class='K/D/A'>" + teamkills + "/" + teamdeaths + "/" + teamassists + "(" + ((teamkills + teamassists) / teamdeaths).toFixed(2) + ")" + "</td>"
	//				str += "<td class='damageDealt'>"
	//				str += `
	//				<div class="RiotGamechart">
	//    			<div class="RiotGamebar" style="width: ${bartotalDamageDealtToChampions}%;">${totalDamageDealtToChampions}</div>
	//				</div>
	//				`
	//				str += "</td>"
	//				str += "<td class='damageReceived'>"
	//				str += `
	//				<div class="RiotGamechart">
	//    			<div class="RiotGamebar2" style="width: ${bartotalDamageTaken}%;">${totalDamageTaken}</div>
	//				</div>
	//				`
	//				str += "</td>"
	//				str += "<td class='cs'>" + cs + "</td>"
	//				str += "<td class='item'>"
	//				str += "<div class='Titemlist'>"
	//				str += "<div class='Titem1'></div>"
	//				str += "<div class='Titem2'></div>"
	//				str += "<div class='Titem3'></div>"
	//				str += "<div class='Titem4'></div>"
	//				str += "<div class='Titem5'></div>"
	//				str += "<div class='Titem6'></div>"
	//				str += "</div>"
	//				str += "</td>"
	//				str += "</tr>"
	//
	//			}
	//
	//		}
	//
	//		str += "</table>"
	//
	//	}
	//	str += "</div>"
	//	str += "<button class='more' id = 'loadMore'>더 보기</button>"
	//	str += "<div id ='asd'></div>"
	//	str += "</div>"
	//
	//	$('#puuid').show();
	////	let como = 1;
	//	$("#loadMore").on("click", function() {
	//		data['matchCnt']++;
	////		console.log('asd')
	//		$('#loadMore').remove()
	//		document.getElementById('asd').append(bbb(data))
	//		loadMore.style.top = '30%'
	////	ㅁㄴㅇㅁㄴㅇㅁㄴㅇ
	////		$("#asd").append("<p class='original' style='top:32%; position : absolute;;'>등장" + como + "</p>");
	////		como += 1
	//		console.log(res.length)
	//
	//	})

//}
