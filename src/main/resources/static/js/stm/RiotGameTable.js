/**
 * 
 */
$('a.feellink').click(function(e) //a태그 눌러도 맨위로 안올라감
{
	e.preventDefault();
});
let win = 0
let lose = 0
function showGameTamble(res, data) {

	console.log(data)
	console.log(res)
	let ccc = ''
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
	let champimg = ''

	$('.graph1').empty()

	for (let i in res) {
		for (let j in res[i]['info']) {
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				profileIcon = res[i]["info"][j]['profileIcon']
				summonerLevel = res[i]["info"][j]['summonerLevel']
				riotIdGameName = res[i]["info"][j]['riotIdGameName']
				if (res[i]["info"][j]['win'] == '1') {
					win += 1
				} else {
					lose += 1
				}

			}
		}

	}
	if (data['matchCnt'] == 1) { //최신 레벨과 플레이어 아이콘을 위해 저장
		newprofileIcon = profileIcon
		newsummonerLevel = summonerLevel
		newriotIdGameName = riotIdGameName
	}
	ccc += `<div class=container333Box>
	<div class=container333>
	<div class="stmH">
            <div class="stmHright">
                <div class="cpicon">
                    <div class = "cpimg">
	<img width='85' height='85' alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/${newprofileIcon}.png>
                    </div></div>
                    <div class="uidLevelBox">
                <div class="ulevel">${newsummonerLevel} </div>
                </div>
            </div>
            <div class="uidBox">
                <div class="uid">${newriotIdGameName}</div>
                </div>
            <div class="stmHleft">
                <div class="u-chart"><canvas id="donutChart" width="160px" height="160px"></canvas></div>
            </div>
        </div>
        </div>
        <div class='stmBlank'></div>
        </div>`

	$('.graph1').append(ccc)


	var ctx = document.getElementById('donutChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ['승리', '패배'],
			datasets: [{
				//				label: '승리',
				data: [win, lose], // 승리와 패배 데이터
				backgroundColor: [
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(75, 192, 192, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: false,
			legend: {
				position: 'bottom', // 범례 위치
			},
		}
	});




	for (let i in res) {
		let matchId = res[i]['matchId']


		sss = Number(i);
		let goBtn = sss + (data['matchCnt']) * 4

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

		//시작
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
			//			var container1 = document.getElementsByClassName("container1");

			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				if (res[i]["info"][j]['win'] == '1') {
					win_lose = '승리'
					//					container1.style.backgroundColor = "rgba(255, 2, 73, 0.09)";
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
				if (deaths == 0) {
					kda = 'perfect';
				} else {
					kda = (((kills + assists)) / deaths).toFixed(2)
				}
				wardscore = res[i]["info"][j]['wardsKilled'] + res[i]["info"][j]['wardsPlaced']
				totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']
				if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {

					mykill = (((res[i]["info"][j]['kills'] + res[i]["info"][j]['assists']) / res[i]["info"][j]['totalTeamkills']) * 100).toFixed(0)

					if (res[i]['info'][j]['queueId'] != 450) {
						dragon = res[i]["info"][j]['dragon']
					} else {
						dragon = '포로간식'
					}


				}

			}


			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				if (res[i]["info"][j]['win'] == '1') {
					str += `<div class="container1" id = 'container1'style='background-image:linear-gradient(315deg, #D6E5FC 0%, #BED8FE 74%) '>`

				} else {
					str += `<div class="container1" id = 'container1' style='background-image:linear-gradient(315deg, #FFD5F4 0%, #FFB3C8 74%)'>`

				}


			}
		}
		str += `
				
				<div class="box-left" >

					<div><span>${queue}</span></div>
					<div>${spentTime}</div>
					<div>${win_lose}</div>
					<div style="background-color: skypink;">${ingamespentTime}</div>


				</div>
				<div class="box-center1">


					<div class="champSepll">`

		if (champimg == "FiddleSticks") {
			champimg = "Fiddlesticks"
		}
		str += `<div class=box-center4><img width='80' height='80'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>
						<div class=box-center44>

							<div class="spell1"><img width='30' height='30'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'></div>
							<div class="spell2"><img width='30' height='30'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'></div>

						</div>
						<div class=box-right4 style="font-size: 13px;">${kills}/${deaths}/${assists}<br>${kda}:1평점</div>

					</div>
					<div class="item">
					
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
				<div class = "box-center2up">
				킬관여 ${mykill}%<br>
				시야 점수 ${wardscore}<br>
				cs ${totalCs}<br>
				드래곤 ${dragon}
				</div>
				<div class = "box-center2down">
				
				<a href = "#" style="color : blue;"><input type = "button" id = "${matchId}" value = ai관련test disabled = "disabled" onclick = "aiTimelineAni(\'${matchId}\')"/> </a>
				

      
   
				</div>
						
				</div>
				<div class="box-center3">
				<div class="blueChamp">`
		for (j in res[i]['info']) {
			if (res[i]['info'][j]['teamId'] == 100) {
				let riotIdGameName = res[i]['info'][j]['riotIdGameName']
				let champimg = res[i]["info"][j]['championName']
				if (champimg == "FiddleSticks") {
					champimg = "Fiddlesticks"
				}
				if (riotIdGameName.length > 10) {
					riotIdGameName = riotIdGameName.substr(0, 8) + '...';
				}

				str += `<div style ="text-align: left;"><img width='17' height='17'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'>
							
							${riotIdGameName}
							
							
								</div>`
				if (res[i]["info"][j]['win'] == '1') {
					blueWin = '승리'
				} else {
					blueWin = '패배'
				}
			}
		}
		str += `
					</div>
					<div class="redChamp">`
		for (j in res[i]['info']) {
			if (res[i]['info'][j]['teamId'] == 200) {
				let riotIdGameName = res[i]['info'][j]['riotIdGameName']
				let champimg = res[i]["info"][j]['championName']
				if (champimg == "FiddleSticks") {
					champimg = "Fiddlesticks"
				}
				if (riotIdGameName.length > 10) {
					riotIdGameName = riotIdGameName.substr(0, 8) + '...';
				}
				str += `<div style ="text-align: left;"><img width='17' height='17'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'>
			
				${riotIdGameName}
			</div>`
			}
			if (res[i]["info"][j]['win'] == '1') {
				redWin = '승리'
			} else {
				redWin = '패배'
			}
		}

		str += `
				</div>
				</div>`
		//		asdsaddadsasdasad
		for (j in res[i]['info']) {
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				if (res[i]["info"][j]['win'] == '1') {
					str += `<div class="box-right" style='background-color :#9ac2e2' id ="gamebtn${goBtn}" onclick ="gamebtn(${goBtn},'${matchId}')"><a href = 'javascript:;'><p></p><div>더</div><div>보</div><div>기</div><p>∨</p></a></div>`

				} else {
					str += `<div class="box-right" style='background-color : rgba(255, 2, 73, 0.18)' id ="gamebtn${goBtn}" onclick ="gamebtn(${goBtn},'${matchId}')"><a href = 'javascript:;'><p></p><div>더</div><div>보</div><div>기</div><p>∨</p></a></div>`

				}
			}
		}



		str += `</div>
			<div class="line1" id = 'line1${goBtn}' style='display: none'></div>`
		str += `<div class="container2" id='container2${goBtn}' style='display: none'>
				<div class="legend">
					<div class="teamId" style=color:blue;>블루팀(${blueWin})</div>
					<div class=kda>	 <span tooltip="(kill+assist)/death"><a href = "#">kda</a></span>	</div>
					
					<div class=damage> <span tooltip="상대방에게 가한 (물리+마법)피해"><a href = "#">가한피해량</a></span></div>
					<div class=cs><span tooltip="게임에서 잡은 미니언의 총 개수"><a href = "#">cs</span></a></div>
					<div class=itemTeam><span tooltip="최종 구입한 총 아이템"><a href = "#">아이템</span></a></div>
					<div class=aicheck><span tooltip="인공지능 (Troller Check System)"><a href = "#">AI TCS</a></span></div>
					</div>`
		let damageToChampions = []
		for (j in res[i]['info']) {
			damageToChampions.push(res[i]["info"][j]['totalDamageDealtToChampions'])

		}
		highestdamageToChampions = Math.max(...damageToChampions)
		for (j in res[i]['info']) {
			champimg = res[i]["info"][j]['championName']
			if (champimg == "FiddleSticks") {
				champimg = "Fiddlesticks"
			}
			spellD = res[i]["info"][j]['summonerSpellD']
			spellF = res[i]["info"][j]['summonerSpellF']
			riotIdGameName = res[i]["info"][j]['riotIdGameName'];
			riotIdTagline = res[i]["info"][j]['riotIdTagline'];

			champion_name_kr = res[i]["info"][j]['champion_name_kr']
			kills = res[i]["info"][j]['kills']
			deaths = res[i]["info"][j]['deaths']
			assists = res[i]["info"][j]['assists']
			if (deaths == 0) {
				kda = 'perfect';
			} else {
				kda = (((kills + assists)) / deaths).toFixed(2)
			}
			totalDamageDealtToChampions = res[i]["info"][j]['totalDamageDealtToChampions']
			bartotalDamageDealtToChampions = ((totalDamageDealtToChampions / highestdamageToChampions) * 99).toFixed(0)
			physicalDamageDealtToChampions = ((res[i]["info"][j]['physicalDamageDealtToChampions'] / highestdamageToChampions) * 99).toFixed(0)
			magicDamageDealtToChampions = ((res[i]["info"][j]['magicDamageDealtToChampions'] / highestdamageToChampions) * 99).toFixed(0)

			totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']
			participantId = res[i]["info"][j]['participantId']
			if (res[i]['info'][j]['teamId'] == 100) {

				str += `<div class="ct1">
					<div class="teamId1">
						
						<div class=champImgM><div class = 'champaaa'></div><div><img title='${champion_name_kr}' width='30' height='30'  alt='못 불러옴' 
						src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div></div>
						<div class=spellM>
							<div class=spellM1>
								<img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class=spellM2><img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						</div>
						<div class=nickNameM><div class = nickNameML></div><a  href='/stm/${riotIdGameName}/${riotIdTagline}'><div class = nickNameMR>${riotIdGameName}</div></a></div>
						
					</div>
					<div class=kda1>
						<div class=killDeathAssist>${kills}/${deaths}/${assists}</div>
						<div class="kdaCheck">${kda}:1</div>
					</div>
					<div class=damage1>
					<div class=damage11>
						<div class=damageAmountr style="flex-basis: ${physicalDamageDealtToChampions}%; background-Color: #8080c0; "></div>
						<div class=damageAmountl style="flex-basis: ${magicDamageDealtToChampions}%; background-Color: orange; "></div>
						
					</div>
					
					<div class=damage111>
					<div class=damageGraph font-size: 10px; style="width: ${bartotalDamageDealtToChampions}%;">${totalDamageDealtToChampions}</div>

					</div>
						
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
					<div class = aidetail id = ${matchId}` + `${participantId}><img width='20' height='20' alt='못 불러옴' src = "/img/loadingimg.gif"></div>
				</div>`
			}
		}
		str += `
		<div class="legend1">
					<div class="teamId" style=color:red;>레드팀(${redWin})</div>
					<div class=kda>	 <span tooltip="(kill+assist)/death"><a href = "#">kda</a></span>	</div>
					
					<div class=damage> <span tooltip="상대방에게 가한 (물리+마법)피해"><a href = "#">가한피해량</a></span></div>
					<div class=cs><span tooltip="게임에서 잡은 미니언의 총 개수"><a href = "#">cs</span></a></div>
					<div class=itemTeam><span tooltip="최종 구입한 총 아이템"><a href = "#">아이템</span></a></div>
					<div class=aicheck><span tooltip="인공지능 (Troller Check System)"><a href = "#">AI TCS</a></span></div>
					</div>`

		for (j in res[i]['info']) {
			//			console.log(res[i]['info'])


			champimg = res[i]["info"][j]['championName']
			if (champimg == "FiddleSticks") {
				champimg = "Fiddlesticks"
			}
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
			physicalDamageDealtToChampions = ((res[i]["info"][j]['physicalDamageDealtToChampions'] / highestdamageToChampions) * 99).toFixed(0)
			magicDamageDealtToChampions = ((res[i]["info"][j]['magicDamageDealtToChampions'] / highestdamageToChampions) * 99).toFixed(0)

			totalCs = res[i]["info"][j]['totalMinionsKilled'] + res[i]["info"][j]['totalAllyJungleMinionsKilled'] + res[i]["info"][j]['totalEnemyJungleMinionsKilled']
			participantId = res[i]["info"][j]['participantId']
			if (res[i]['info'][j]['teamId'] == 200) {

				str += `<div class="ct2">
					<div class="teamId1">

						<div class=champImgM><div class = 'champaaa'></div><div><img title='${champion_name_kr}' width='30' height='30'  alt='못 불러옴' 
						src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>	</div>
						<div class=spellM>
							<div class=spellM1>
								<img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class=spellM2><img width='20' height='20'  alt='못 불러옴' 
								src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						</div>
						<div class=nickNameM><div class = nickNameML></div><a  href='/stm/${riotIdGameName}/${riotIdTagline}'><div class = nickNameMR>${riotIdGameName}</div></a></div>
					</div>
					<div class=kda1>
						<div class=killDeathAssist>${kills}/${deaths}/${assists}</div>
						<div class="kdaCheck">${kda}:1</div>
					</div>
					<div class=damage1>
					<div class=damage11>
						<div class=damageAmountr style="flex-basis: ${physicalDamageDealtToChampions}%; background-Color: #8080c0;"></div>
						<div class=damageAmountl style="flex-basis: ${magicDamageDealtToChampions}%; background-Color: orange; "></div>
						
					</div>
					
					<div class=damage111>
					<div class=damageGraph font-size: 10px; style="width: ${bartotalDamageDealtToChampions}%;">${totalDamageDealtToChampions}</div>

					</div>
						
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
					<div class = aidetail id = ${matchId}` + `${participantId}><img width=20 height='20' alt='못 불러옴' src = "/img/loadingimg.gif"></div>
				</div>`
			}
		}

		str += `</div>
		`
	}
	let str1 = "<div class='containerXR'></div><div class='more'><center><button class='loadMore' id = 'loadMore'>더 보기</button></center></div>"



	$('.containerXC').append(str)
	$('.containerXC').append(str1)
	for (let i in res) {
		console.log(i + "번째 파이썬 출발")
		data = { 'matchId': res[i].matchId }
		$.ajax({
			type: 'post',
			url: '/ai/timelineAni',
			data: data,
			success: function(res) {
				console.log(res.matchId + "파이썬 저장성공")
				$('#' + res.matchId).prop("disabled", false)
			}
		})
	}
}
function aiTimelineAni(matchId) {

	data = { 'matchId': matchId }
	$.ajax({
		type: 'post',
		url: '/ai/timelineInfo',
		data: data,
		success: function(res) {
			console.log(res)
		}
	})

}

window.addEventListener('click', (e) => {

	if (e.target.id == "loadMore") {

		console.log("실행됨");
		data['matchCnt']++;
		$('#loadMore').remove()
		bbb(data)
	}

});

window.addEventListener('mouseover', (e) => {
	
	if (e.target.className == "damageAmountr" || e.target.className == "damageAmountl") {
		
		console.log("찾음")

	}

});