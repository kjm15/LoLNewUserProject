/**
 * 
 */


function showGameTamble(res, data) {
	console.log(data)
	console.log(res)
	let str = ''
	//	for (let i = 0; i < res.length; i++) {
	var timeStamp = Date.now();
	gameEndTimestampString = res[0]["info"][0]['gameEndTimestamp']
	console.log(gameEndTimestampString)
	gameEndTimestamp = Number(gameEndTimestampString)
	console.log(gameEndTimestamp)
	loltime = (timeStamp - gameEndTimestamp) // ex) 몇일전입니다.

	let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
	let hour = Math.floor(loltime / 1000 / 60 / 60);
	let min = Math.floor(loltime / 1000 / 60);
	var spentTime;
	if (day == 0 && hour == 0) {
		spentTime = min + "분 전";
	} else if (day == 0) {
		spentTime = hour + "시간 전";
	} else {
		spentTime = day + "일 전";
	}
	//	}

	str += "<div id = 'newList'>"
	str += "<div class='profile-header'>"
	str += "<div class='left'>"
	str += "<div class='left-top'>"
	str += "<div class='p-c-img'>플레이어 아이콘</div>"
	str += "<div class='p-info'>"
	str += "<div class='p-name'>" + data['gameName'] + "</div>"
	str += "<div class='p-level'>플레이어레벨</div>"
	str += "<div class='playgames'>최근게임 : " + spentTime + " </div>"
	str += "</div>"
	str += "</div>"
	str += "<div class='left-bottom'>미정	</div>"
	str += "</div>"
	str += "<div class='right'>"
	str += "<div class='right-top'>그래프or메일함</div>"
	str += "<div class='right-bottom'>미정</div>"
	str += "</div>"
	str += "</div>"

	str += "<div class='container1'>"
	for (let i = 0; i < res.length; i++) {
		str += "<div class='win-lose-board' id='res" + i + "'>"
		str += "<div class='match-header'>"
		str += "<div class='one'>"
		let queue = ''
		let win_lose = ''
		let champimg = ''
		let kills = ''
		let deaths = ''
		let assists = ''
		let kda = ''
		let mykill = ''
		let dragon = ''
		
		let upteamcolor = ''
		let upteamwin = ''
		
		let downteamcolor = ''
		let downteamwin = ''

		for (let j = 0; j < res[i]['info'].length; j++) {
			if (res[i]["info"][j]['queueId'] == 450) {
				queue = "칼바람"
			} else if (res[i]["info"][j]['queueId'] == 490) {
				queue = "빠른대전"
			} else if (res[i]["info"][j]['queueId'] == 420) {
				queue = "솔로랭크"
			} else if (res[i]["info"][j]['queueId'] == 440) {
				queue = "자유랭크"
			}
			// 게임모드
			if (res[i]["info"][j]['win'] == '1') {
				win_lose = '승리'
			} else {
				win_lose = '패배'
			}
			// 승패
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				champimg = res[i]["info"][j]['championName']
				kills = res[i]["info"][j]['kills']
				deaths = res[i]["info"][j]['deaths']
				assists = res[i]["info"][j]['assists']
				kda = res[i]["info"][j]['kda']
			}
			// 플레이어 챔피언 사진 and kdad
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				if (res[i]['info'][j]['teamId'] == res[i]['teams'][0]['teamId']) {
					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][0]['kills']) * 100).toFixed(0)

					if (res[i]['info'][j]['queueId'] != 450) {
						dragon = "드래곤 킬:" + res[i]['teams'][0]['dragon']
					} else {
						dragon = '포로간식 사용 횟수 들어갈 예정'
					}


				} else if (res[i]['info'][j]['teamId'] == res[i]['teams'][1]['teamId']) {
					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]['teams'][1]['kills']) * 100).toFixed(0)
					if (res[i]['info'][j]['queueId'] != 450) {
						dragon = "드래곤 킬:" + res[i]['teams'][1]['dragon']
					} else {
						dragon = '포로간식 사용 횟수 들어갈 예정'
					}


				}

			}



		}


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
		var spentTime;
		if (day == 0 && hour == 0) {
			spentTime = min + "분 전";
		} else if (day == 0) {
			spentTime = hour + "시간 전";
		} else {
			spentTime = day + "일 전";
		}


		let aaa = Math.floor(ingametime / 1000 / 60);
		ingamespentTime = aaa + "분 게임";
		str += "<div class='puuid'>"
		str += queue
		str += "</div>"

		str += "<div class='win-lose'>"
		str += win_lose
		str += "</div>"
		str += "</div>"
		str += "<div class='two'>"
		str += "<div class='champimg'><img width='100' height='100'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + champimg + ".png'></div>"
		str += "<div class='spellgroup'>"
		str += "<div class='spell1'>스펠1</div>"
		str += "<div class='spell2'>스펠2</div>"
		str += "</div>"
		str += "<div class='number'>"
		str += "<div class='KDA'>" + kills + "/" + deaths + "/" + assists + "</div>"
		str += "<div class='grade'>평점(" + kda + ":1)</div>"
		str += "</div>"
		str += "<div class='itemlist'>"
		str += "<div class='tool'>"
		str += "<div class='item1'></div>"
		str += "<div class='item2'></div>"
		str += "<div class='item3'></div>"
		str += "<div class='item4'></div>"
		str += "<div class='item5'></div>"
		str += "<div class='item6'></div>"
		str += "</div>"
		str += "</div>"
		str += "</div>"
		str += "<div class='three'>"
		str += "<div class='p-kill'>킬관여율:" + mykill + "%</div>"
		str += "<div class='dragon'>" + dragon + "</div>"
		str += "</div>"
		str += "<div class='four'>"
		str += "<div class='timestamp'>" + spentTime + "</div>"
		str += "<div class='gametimes'>" + ingamespentTime + "</div>"
		str += "</div>"
		str += "<div class ='actions'>"
		str += "<button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button>"
		str += "</div>"

		str += "<br><br><br><br><br><br>"
		for (let j = 0; j < res[i]['info'].length; j++) {
			if (res[i]['info'][j]['teamId'] == 100) {
				upteamcolor = '블루팀'
				downteamcolor ='레드팀'
			}else{
				upteamcolor = '레드팀'
				downteamcolor = '블루팀'
			}
			if (res[i]['info'][j]['win'] == '1') {
				upteamwin = '승리'
				downteamwin ='패배'
			}else{
				upteamwin = '패배'
				downteamwin ='승리'
			}
		}

		str += "<table class='resultwin'style='display: none' id = 'gametable" + i + "'> " //
		str += "<thead>"
		str += "<tr>"
		str += "<th colspan='2' class='th'>" + upteamwin + "("+upteamcolor+")</th>"
		str += "<th class='th'>K/D/A</th>"
		str += "<th  class='th'>아군받은피해량</th>"
		str += "<th  class='th'>아군가한피해량</th>"
		str += "<th class='th'>CS</th>"
		str += "<th colspan='2' class='th'>아군아이템</th>"
		str += "</tr>"
		str += "</thead>"
		str += "<tbody>"
		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
			if (res[i]['info'][j]['teamId'] == 100) {
				str += "<tr>"
				str += "<td colspan='2' class='cimg'>1</td>"
				str += "<td class='K/D/A'></td>"
				str += "<td class='damageDealt'></td>"
				str += "<td class='damageReceived'></td>"
				str += "<td class='cs'></td>"
				str += "<td class='item'>"
				str += "<div class='Titemlist'>"
				str += "<div class='Titem1'></div>"
				str += "<div class='Titem2'></div>"
				str += "<div class='Titem3'></div>"
				str += "<div class='Titem4'></div>"
				str += "<div class='Titem5'></div>"
				str += "<div class='Titem6'></div>"
				str += "</div>"
				str += "</td>"
				str += "</tr>"
			}
		}
		str += "</tbody>"
		str += "<thead>"
		str += "<tr>"
		str += "<th colspan='2' class='th'>" + downteamwin + "("+downteamcolor+")</th>"
		str += "<th class='th'>K/D/A</th>"
		str += "<th  class='th'>적군받은피해량</th>"
		str += "<th  class='th'>적군가한피해량</th>"
		str += "<th class='th'>CS</th>"
		str += "<th colspan='2' class='th'>적군아이템</th>"
		str += "</tr>"
		str += "</thead>"
		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
			if (res[i]['info'][j]['teamId'] == 200) {
				str += "<tr>"
				str += "<td colspan='2' class='cimg'>1</td>"
				str += "<td class='K/D/A'></td>"
				str += "<td class='damageDealt'></td>"
				str += "<td class='damageReceived'></td>"
				str += "<td class='cs'></td>"
				str += "<td class='item'>"
				str += "<div class='Titemlist'>"
				str += "<div class='Titem1'></div>"
				str += "<div class='Titem2'></div>"
				str += "<div class='Titem3'></div>"
				str += "<div class='Titem4'></div>"
				str += "<div class='Titem5'></div>"
				str += "<div class='Titem6'></div>"
				str += "</div>"
				str += "</td>"
				str += "</tr>"

			}

		}

		str += "</table>"

	}
	str += "</div>"
	str += "</div>"
	$('#puuid').append(str)
	$('#puuid').show();
}