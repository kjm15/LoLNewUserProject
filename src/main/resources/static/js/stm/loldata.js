/**
 * 
 */

$(document).ready(function() {

	document.getElementById('search-home').value = ''
	
	logolodingImg()
	mainStart()

})

function logolodingImg() {

	let gameName1 = $('#gameName').val()
	var gameId = gameName1.split('#');
	let gameName = gameId[0]
	//	console.log(gameName)
	data3 = { 'gameName': gameName }
	$.ajax({
		type: 'post',
		url: '/lane/prefer',
		data: data3,
		success: function(res) {
			//			console.log(res)
			LaneChart(res)

		}
	})

}
function showgraph(win, lose) {

	winLoseList = [win, lose]
	winLoseListKor = ["승리", "패배"]

	Chart.pluginService.register({
		beforeDraw: function(chart) {
			if (chart.config.options.elements.center) {
				// Get ctx from string
				var ctx = chart.chart.ctx;

				// Get options from the center object in options
				var centerConfig = chart.config.options.elements.center;
				var fontStyle = centerConfig.fontStyle || 'Arial';
				var txt = centerConfig.text;
				var color = centerConfig.color || 'rgba(53, 32, 132, 1)';
				var maxFontSize = centerConfig.maxFontSize || 75;
				var sidePadding = centerConfig.sidePadding || 20;
				var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
				// Start with a base font of 30px
				ctx.font = "30px " + fontStyle;

				// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
				var stringWidth = ctx.measureText(txt).width;
				var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

				// Find out how much the font can grow in width.
				var widthRatio = elementWidth / stringWidth;
				var newFontSize = Math.floor(30 * widthRatio);
				var elementHeight = (chart.innerRadius * 2);

				// Pick a new font size so it will not be larger than the height of label.
				var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
				var minFontSize = centerConfig.minFontSize;
				var lineHeight = centerConfig.lineHeight || 25;
				var wrapText = false;

				if (minFontSize === undefined) {
					minFontSize = 20;
				}

				if (minFontSize && fontSizeToUse < minFontSize) {
					fontSizeToUse = minFontSize;
					wrapText = true;
				}

				// Set font settings to draw it correctly.
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
				var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
				ctx.font = fontSizeToUse + "px " + fontStyle;
				ctx.fillStyle = color;

				if (!wrapText) {
					ctx.fillText(txt, centerX, centerY);
					return;
				}

				var words = txt.split(' ');
				var line = '';
				var lines = [];

				// Break words up into multiple lines if necessary
				for (var n = 0; n < words.length; n++) {
					var testLine = line + words[n] + ' ';
					var metrics = ctx.measureText(testLine);
					var testWidth = metrics.width;
					if (testWidth > elementWidth && n > 0) {
						lines.push(line);
						line = words[n] + ' ';
					} else {
						line = testLine;
					}
				}

				// Move the center up depending on line height and number of lines
				centerY -= (lines.length / 2) * lineHeight;

				for (var n = 0; n < lines.length; n++) {
					ctx.fillText(lines[n], centerX, centerY);
					centerY += lineHeight;
				}
				//Draw text in center
				ctx.fillText(line, centerX, centerY);
			}
		}
	});


	var config = {
		type: 'doughnut',
		data: {
			labels: winLoseListKor,
			datasets: [{
				data: winLoseList, //<<<<데이터 들어가는곳

				backgroundColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)'


				], borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 99, 132, 1)',

				]
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false, //x축 반으로 줄임
			cutoutPercentage: 80,
			elements: {
				center: {
					text: winLoseList[0] + "win", // <<여기가 가운데 글씨들어가는곳
					color: 'rgba(53, 32, 132, 0.73)', // Default is #000000
					fontStyle: 'Arial', // Default is Arial
					sidePadding: 20, // Default is 20 (as a percentage)
					minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
					lineHeight: 10 // Default is 25 (in px), used for when text wraps


				}
			}
		}
	};

	var ctx = document.getElementById("donutChart").getContext("2d");
	var myChart = new Chart(ctx, config);
}

let cnt = 0;
$('#searchBoom').on("click", function() {

	let gameName = $('#search-home').val();
	if (gameName.length < 1) {
		alert("빈칸을 작성해 주세요")
		return false
	}

	var result = gameName.search('#');
	if (result == -1) {
		tagLine = "KR1"
		location.href = '/stm/' + gameName + "/" + tagLine
	} else {

		var gameId = gameName.split('#');
		let gameName1 = gameId[0] // 아이디
		let tagLine = gameId[1] // 태그
		location.href = '/stm/' + gameName1 + "/" + tagLine
	}

})







function mainStart() {

	let gameName = $('#gameName').val()

	if (gameName != '') {
		mainSearch(gameName)
	}

}
function mainSearch(gameName1) {
	cnt++;
	var gameId = gameName1.split('#');
	gameName = gameId[0] // 아이디
	tagLine = gameId[1] // 태그
	matchCnt = cnt;
	data = { 'gameName': gameName, 'tagLine': tagLine, 'matchCnt': matchCnt }
	bbb(data)
}

function aiCheckTroll(res1) {
	//	console.log(res1)
	let queue = ''
	console.log("data전송완료/인공지능시작")
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/ai/dataToAi',
		data: JSON.stringify(res1),
		success: function(res) {
			//									console.log(res)
			//
			if (res.queueId == 420) {

				data = res
				//									console.log(data)
				$.ajax({
					contentType: 'application/json',
					type: 'post',
					url: '/ai/trollcheck420',
					data: JSON.stringify(data),
					success: function(res1) {

						console.log(res1)
						for (const [key, value] of Object.entries(res1)) {
							if (res.win == 1) { // 게임 : 승리
								if (value == '패') { //인공지능 지표 : 패


									randomListWin = ['이판은 이겼지만 당신은 졌습니다.', '이런, 이런 빨리 다음게임으로 도망치세요', ' 상대가 너무 강력했군요! ', '팀에 기여량이 적습니다.',
										'당신만 놀았군요', '놀지말고 딜하세요', '잠재적 범죄자']

									commentLoseGame = randomListWin[Math.floor(Math.random() * randomListWin.length)]
									str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + commentLoseGame + '">부족!</span></div></div>'


									$('#' + key).html(str);
								} else if (value == '데이터부족') { //인공지능 지표: 승
									$('#' + key).html("평균");
								} else { //인공지능 지표: 승
									$('#' + key).html("평균");

								}
							} else if (res1['key'] == '에러') {

								$('#' + key).html("평균");


							} else { // 게임 : 패배
								if (value == '패') { //인공지능 지표 : 패
									$('#' + key).html("평균");
								} else if (value == '데이터부족') { //인공지능 지표: 승
									$('#' + key).html("평균");
								} else { //인공지능 지표: 승


									randomListWin = ['이 팀에 유일하게 빛나는 소환사 입니다.', '당신은 올라갈 자격이 있습니다.', '아쉽게 졌지만 당신은 이겼습니다.'
										, '5 명예를 받을 자격이 충분합니다.', '이 실력이면 다음 티어는 금방!', '당신에게 부족한건 팀운뿐...']
									commentLoseGame = randomListWin[Math.floor(Math.random() * randomListWin.length)]
									str = '<div class = checkFlagStamp><div class="stampWin"><span tooltip="' + commentLoseGame + '">최고!</span></div></div>'

									$('#' + key).html(str);

								}
							}
						}
					}, error: function(error) {
						console.log(data)
						$('#' + data.matchId + data.participantId).html("평균");

					}
				})//ajax끝
			} else if (res.queueId == 450) {
				data = res

				$.ajax({
					contentType: 'application/json',
					type: 'post',
					url: '/ai/trollcheck450',
					data: JSON.stringify(data),
					success: function(res1) {
						console.log(res1)
						for (const [key, value] of Object.entries(res1)) {
							if (res.win == 1) { // 게임 : 승리

								if (value == '패') { //인공지능 지표 : 패

									str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + res1.champion_name_kr + ' 평균 이하의 트롤러">부족!</span></div></div>'
									$('#' + key).html(str);

								} else { //인공지능 지표: 승

									$('#' + key).html('평균');
								}
							} else { // 게임 : 패배
								if (value == '패') { //인공지능 지표 : 패

									str = '평균'
									$('#' + key).html('평균');

								} else { //인공지능 지표: 승
									str = '<div class = checkFlagStamp><div class="stampWin"><span tooltip=" ' + res1.champion_name_kr + ' 평균 이상의 실력자">평균이상</span></div>	</div>'
									$('#' + key).html(str);
								}


							}
						}
					}, error: function(error) {
						$('#' + key).html("평균");
						console.log(error)
					}
				})//ajax끝

			} else {
				if (res.queueId == 1900) {
					queue = "URF"
				} else if (res.queueId == 490) {
					queue = "빠른대전"
				} else if (res.queueId == 440) {
					queue = "자유랭크"
				}
				key = res.matchId + res.participantId
				str = "<span tooltip = '개발중입니다.'><font size=2><a href = '#'> |" + queue + "|<br></a></font></span>";
				$('#' + key).html(str);

			}

		}

	})//ajax끝
}



//////////////////장기훈/////////////////////////

matchId_ai_list = []
function bbb(data) {
	//	console.log(data)
	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		success: function(res) {

			//			console.log(res)

			if (res.length != 0) {
				MList = [];
				for (let i = 0; i < res.length; i++) {
					Gamedata = {}; // 한게임당 데이터
					ingamedata = [];


					for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
						mm = {}

						mm.riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']//닉네임
						mm.riotIdTagline = res[i]["info"]['participants'][j]['riotIdTagline'] // 태그
						mm.summonerName = res[i]["info"]['participants'][j]['summonerName']
						mm.summonerLevel = res[i]["info"]['participants'][j]['summonerLevel']
						mm.profileIcon = res[i]["info"]['participants'][j]['profileIcon']
						mm.championName = res[i]["info"]['participants'][j]['championName']//챔피언 아이디
						mm.participantId = res[i]["info"]['participants'][j]['participantId'] // 플레이어 고유 인덱스
						mm.summoner1Id = res[i]["info"]['participants'][j]['summoner1Id']//스펠 D
						mm.summoner2Id = res[i]["info"]['participants'][j]['summoner2Id']//스펠 F 화면에 출력 가능할 떄 할 것
						mm.goldEarned = res[i]["info"]['participants'][j]['goldEarned']
						//						mm.puuid =res[i]["info"]['participants'][j]['puuid']
						mm.totalTimeCCDealt = res[i]["info"]['participants'][j]['totalTimeCCDealt']
						mm.totalTimeSpentDead = res[i]["info"]['participants'][j]['totalTimeSpentDead']
						mm.onMyWayPings = res[i]["info"]['participants'][j]['onMyWayPings']
						mm.enemyVisionPings = res[i]["info"]['participants'][j]['enemyVisionPings']
						mm.physicalDamageDealtToChampions = res[i]["info"]['participants'][j]['physicalDamageDealtToChampions']
						mm.magicDamageDealtToChampions = res[i]["info"]['participants'][j]['magicDamageDealtToChampions']
						mm.teamId = res[i]["info"]['participants'][j]['teamId']
						mm.win = res[i]["info"]['participants'][j]['win']
						mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
						mm.queueId = res[i]["info"]['queueId'] // 게임 모드
						mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
						mm.kills = res[i]["info"]['participants'][j]['kills']
						mm.deaths = res[i]["info"]['participants'][j]['deaths']
						mm.assists = res[i]["info"]['participants'][j]['assists']
						if (res[i]["info"]['participants'][j]['deaths'] == 0) {
							mm.kda = (res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])

						} else {
							mm.kda = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])) / res[i]["info"]['participants'][j]['deaths']).toFixed(2)
						}

						mm.teamPosition = res[i]["info"]['participants'][j]['teamPosition']
						mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
						mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
						mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
						mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
						mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
						mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
						mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
						mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
						mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
						mm.gameDuration = (res[i]["info"]['gameDuration'] / 60).toFixed(0)
						mm.item0 = res[i]["info"]['participants'][j]['item0']
						mm.item1 = res[i]["info"]['participants'][j]['item1']
						mm.item2 = res[i]["info"]['participants'][j]['item2']
						mm.item3 = res[i]["info"]['participants'][j]['item3']
						mm.item4 = res[i]["info"]['participants'][j]['item4']
						mm.item5 = res[i]["info"]['participants'][j]['item5']
						for (k in res[i]['info']['teams']) {
							if (res[i]["info"]['teams'][k]['teamId'] == res[i]["info"]['participants'][j]['teamId']) {
								mm.totalTeamkills = res[i]["info"]['teams'][k]['objectives']['champion']['kills']
								mm.dragon = res[i]["info"]['teams'][k]['objectives']['dragon']['kills']
							}

						}
						ingamedata.push(mm)

						Gamedata.info = ingamedata

					}
					ingameteam = [];

					for (j = 0; j < 2; j++) {
						mm = {}
						mm.matchId = res[i]['metadata']['matchId']
						mm.teamId = res[i]["info"]['teams'][j]['teamId']
						mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
						mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']

						ingameteam.push(mm)
						Gamedata.teams = ingameteam
					}
					MList.push(Gamedata)
				}
				console.log(MList)
				let temp = JSON.stringify(MList)
				data2 = { 'Mlist': temp }

				$.ajax({
					type: 'post',
					url: '/riot/api',
					data: data2,
					//					dataType: 'json',
					success: function(res) {
						//						console.log(res)
						aaa(data)
					}
				})

			} else {
				aaa(data)
			}

		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);  //응답 메시지
			console.log(textStatus); //"error"로 고정인듯함
			console.log(errorThrown);

			let m = "존재하지 않는 아이디입니다."
			if (m != '') {
				alert(m);
			}
			console.log(m)
		}
	})
}


allofList = []
function aaa(data) { // data == 검색한 게임 아이디

	//	console.log(data)
	$.ajax({
		type: 'post',
		url: '/riot/game',

		success: function(res) {

			allofList = res
			showGameTamble(res)

		}
	})
}

function searchbtn() {
	searchbtn1()
}

function searchbtn1() {
	$('#newList').remove()
	let search = $('#search').val();
	var gameId = search.split('#');
	let gameName = gameId[0] // 아이디
	let tagLine = gameId[1] // 태그
	//	data = { 'gameName': gameName, 'tagLine': tagLine }
	location.href = '/stm/' + gameName + '/' + tagLine
}

function summonerV4(res) {

	let temp = JSON.stringify(res)

}


newmatchId = ''
function gamebtn(goBtn, matchId) {
	if (matchId == newmatchId) {
		$('.controller').empty();
		newmatchId = ''
		return false;
	}
	newmatchId = matchId
	$('.controller').empty();
	container2 = `<div class="container2" id = 'container2${matchId}' style = 'display: none' >`
	container4 = `<div class="container4" id = 'container4${matchId}' style = 'display: none' >`
	$('#controller' + matchId).append(container2)
	$('#controller' + matchId).append(container4)
	var container2 = document.getElementById("container2" + matchId);
	var container4 = document.getElementById("container4" + matchId);
	container2.style.display = ((container2.style.display != 'none') ? 'none' : 'block');
	container4.style.display = ((container4.style.display != 'none') ? 'none' : 'block');



	showGameTambleBody(matchId) // 바디부분 만들기

	//	  완료 되면 다시 켜기
	data = { 'matchId': matchId }

	$.ajax({
		type: 'post',
		url: '/summoner/v4/userList',
		data: data,
		success: function(res) {

			for (let i in res) {

				if (res[i].queueId == 420) { //솔랭인경우
					$.ajax({
						contentType: 'application/json',
						type: 'post',
						url: '/summoner/v4/Rank',
						data: JSON.stringify(res[i]),
						success: function(res1) {
							aiCheckTroll(res1)
						}
					})
				} else if (res[i].queueId == 450) {

					aiCheckTroll(res[i])

				} else {
					aiCheckTroll(res[i])

				}

			}
		}
	})
}

function goTier(data) {

	let gameName = data['gameName'] // 아이디
	let tagLine = data['tagLine'] // 태그
	data = { 'gameName': gameName, 'tagLine': tagLine }
	$.ajax({
		type: 'post',
		url: '/summoner/v4/Search',
		data: data,
		success: function(res) {

		}
	})
}


function reload(gameName, tagLine, q, i) {

	//	console.log(data)
	nowStatus = ''
	queueId = q
	//	console.log(matchCnt)
	if (i == 1) { // 처음으로 
		$('.containerXC').empty()
		allofList = []
		matchCnt = 1
	}

	data = { 'gameName': gameName, 'tagLine': tagLine, 'queueId': queueId, "matchCnt": (matchCnt - 1) * 3 }

	console.log(data)
	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/GameMode/Search',
		data: JSON.stringify(data),
		success: function(res) {
			//			console.log(res)
			if (res.length == 0) {
				update(gameName, tagLine)
				matchCnt--;
				alert("이전 데이터를 업데이트 중 입니다.")

			} else {

				allofList = res
				showGameTamble(res)

			}

		}
	})

}

checkPartQueueId = [] // 지금 가지고 있는 Q아이디
function findPartOfQueuId() {

	$.ajax({

		type: 'post',
		url: '/GameMode/queuId',
		data: { 'riotIdGameName': gameName },
		success: function(res) {
			checkPartQueueId = res
			//			console.log(res)

			for (let i in checkPartQueueId) {
				queueId_kor = checkPartQueueId[i]['queueId_kor']
				queueId1 = checkPartQueueId[i]['queueId']

				queueIdButton = `<li class = "sampletest"><a href="javascript:reload('${gameName}','${tagLine}',${queueId1},1)">${queueId_kor}</a></li>`
				$('.menu2').append(queueIdButton)

			}



		}
	})
}

////////////////////롤 업데이트 시작//////////////////
function update(gameName, tagLine) {
	console.log("업데이트 시작...")
	data = { 'gameName': gameName, 'tagLine': tagLine }

	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/GameMode/update',
		data: JSON.stringify(data),
		success: function(res) {
			console.log(res)
			updateSave(res)

		}
	})
}

function updateSave(res) { //업데이트 저장문구
	console.log(data)

	if (res.length != 0) {
		MList = [];
		for (let i = 0; i < res.length; i++) {
			Gamedata = {}; // 한게임당 데이터
			ingamedata = [];


			for (let j = 0; j < res[i]["info"]['participants'].length; j++) {
				mm = {}

				mm.riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']//닉네임
				mm.riotIdTagline = res[i]["info"]['participants'][j]['riotIdTagline'] // 태그
				mm.summonerName = res[i]["info"]['participants'][j]['summonerName']
				mm.summonerLevel = res[i]["info"]['participants'][j]['summonerLevel']
				mm.profileIcon = res[i]["info"]['participants'][j]['profileIcon']
				mm.championName = res[i]["info"]['participants'][j]['championName']//챔피언 아이디
				mm.participantId = res[i]["info"]['participants'][j]['participantId'] // 플레이어 고유 인덱스
				mm.summoner1Id = res[i]["info"]['participants'][j]['summoner1Id']//스펠 D
				mm.summoner2Id = res[i]["info"]['participants'][j]['summoner2Id']//스펠 F 화면에 출력 가능할 떄 할 것
				mm.goldEarned = res[i]["info"]['participants'][j]['goldEarned']
				//						mm.puuid =res[i]["info"]['participants'][j]['puuid']
				mm.totalTimeCCDealt = res[i]["info"]['participants'][j]['totalTimeCCDealt']
				mm.totalTimeSpentDead = res[i]["info"]['participants'][j]['totalTimeSpentDead']
				mm.onMyWayPings = res[i]["info"]['participants'][j]['onMyWayPings']
				mm.enemyVisionPings = res[i]["info"]['participants'][j]['enemyVisionPings']
				mm.physicalDamageDealtToChampions = res[i]["info"]['participants'][j]['physicalDamageDealtToChampions']
				mm.magicDamageDealtToChampions = res[i]["info"]['participants'][j]['magicDamageDealtToChampions']
				mm.teamId = res[i]["info"]['participants'][j]['teamId']
				mm.win = res[i]["info"]['participants'][j]['win']
				mm.matchId = res[i]['metadata']['matchId'] // 매치 아이디
				mm.queueId = res[i]["info"]['queueId'] // 게임 모드
				mm.firstBloodKill = res[i]["info"]['participants'][j]['firstBloodKill']
				mm.kills = res[i]["info"]['participants'][j]['kills']
				mm.deaths = res[i]["info"]['participants'][j]['deaths']
				mm.assists = res[i]["info"]['participants'][j]['assists']
				if (res[i]["info"]['participants'][j]['deaths'] == 0) {
					mm.kda = (res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])

				} else {
					mm.kda = (((res[i]["info"]['participants'][j]['kills'] + res[i]["info"]['participants'][j]['assists'])) / res[i]["info"]['participants'][j]['deaths']).toFixed(2)
				}

				mm.teamPosition = res[i]["info"]['participants'][j]['teamPosition']
				mm.totalDamageDealtToChampions = res[i]["info"]['participants'][j]['totalDamageDealtToChampions']
				mm.totalDamageTaken = res[i]["info"]['participants'][j]['totalDamageTaken']
				mm.totalMinionsKilled = res[i]["info"]['participants'][j]['totalMinionsKilled'] // 미니언 킬
				mm.totalAllyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalAllyJungleMinionsKilled'] // 토탈 정글몹 킬
				mm.totalEnemyJungleMinionsKilled = res[i]["info"]['participants'][j]['totalEnemyJungleMinionsKilled'] //상대 정글몹 킬
				mm.wardsKilled = res[i]["info"]['participants'][j]['wardsKilled'] // 와드 킬
				mm.wardsPlaced = res[i]["info"]['participants'][j]['wardsPlaced'] // 시야점수
				mm.gameStartTimestamp = res[i]["info"]['gameStartTimestamp']
				mm.gameEndTimestamp = res[i]["info"]['gameEndTimestamp']
				mm.gameDuration = (res[i]["info"]['gameDuration'] / 60).toFixed(0)
				mm.item0 = res[i]["info"]['participants'][j]['item0']
				mm.item1 = res[i]["info"]['participants'][j]['item1']
				mm.item2 = res[i]["info"]['participants'][j]['item2']
				mm.item3 = res[i]["info"]['participants'][j]['item3']
				mm.item4 = res[i]["info"]['participants'][j]['item4']
				mm.item5 = res[i]["info"]['participants'][j]['item5']
				for (k in res[i]['info']['teams']) {
					if (res[i]["info"]['teams'][k]['teamId'] == res[i]["info"]['participants'][j]['teamId']) {
						mm.totalTeamkills = res[i]["info"]['teams'][k]['objectives']['champion']['kills']
						mm.dragon = res[i]["info"]['teams'][k]['objectives']['dragon']['kills']
					}

				}
				ingamedata.push(mm)

				Gamedata.info = ingamedata

			}
			ingameteam = [];

			for (j = 0; j < 2; j++) {
				mm = {}
				mm.matchId = res[i]['metadata']['matchId']
				mm.teamId = res[i]["info"]['teams'][j]['teamId']
				mm.dragon = res[i]["info"]['teams'][j]['objectives']['dragon']['kills']
				mm.kills = res[i]["info"]['teams'][j]['objectives']['champion']['kills']

				ingameteam.push(mm)
				Gamedata.teams = ingameteam
			}
			MList.push(Gamedata)
		}
		console.log(MList)
		let temp = JSON.stringify(MList)
		data2 = { 'Mlist': temp }

		$.ajax({
			type: 'post',
			url: '/upDate/saveData',
			data: data2,
			success: function(res) {
				console.log(res)

			}
		})
	}
}
////////////////////롤 업데이트 종료//////////////////