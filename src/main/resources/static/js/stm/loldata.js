/**
 * 
 */

$(document).ready(function() {

	document.getElementById('search-home').value = ''





	mainStart()
	logolodingImg()

})

function logolodingImg() {
	if (cnt == 1) {

//		console.log("처음:")
		//		$.ajax({
		//			//		
		//			type: 'post',
		//			url: '/ai/trollcheck420',
		//			success: function(res1) {
		//
		//
		//			}
		//
		//
		//		})

	}



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
	let gameName = gameId[0] // 아이디
	let tagLine = gameId[1] // 태그
	let matchCnt = cnt;
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
									console.log(res)

			if (res.queueId == 420) {

				data = res
									console.log(data)
				$.ajax({
					contentType: 'application/json',
					type: 'post',
					url: '/ai/trollcheck420',
					data: JSON.stringify(data),
					success: function(res1) {


						for (const [key, value] of Object.entries(res1)) {
							if (res.win == 1) { // 게임 : 승리
								if (value == '패') { //인공지능 지표 : 패
									str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + res1.champion_name_kr + '(은/는) 하지 않는것을 추천">평균이하</span></div></div>'
									$('#' + key).html(str);
								} else if (value == '데이터부족') { //인공지능 지표: 승
									$('#' + key).html("평균");
								} else { //인공지능 지표: 승

									$('#' + key).html("평균");
								}
							} else { // 게임 : 패배
								if (value == '패') { //인공지능 지표 : 패
									$('#' + key).html("평균");
								} else if (value == '데이터부족') { //인공지능 지표: 승
									$('#' + key).html("평균");
								} else { //인공지능 지표: 승
									str = '<div class = checkFlagStamp><div class="stampWin"><span tooltip="' + res1.champion_name_kr + ' 챔프의 이해도가 높은 수준">평균이상</span></div></div>'
									$('#' + key).html(str);

								}
							}
						}
					}, error: function(error) {
						$('#' + key).html("평균");

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
						//						console.log(res1)
						for (const [key, value] of Object.entries(res1)) {
							if (res.win == 1) { // 게임 : 승리

								if (value == '패') { //인공지능 지표 : 패

									str = '<div class = checkFlagStamp><div class="stampLose"><span tooltip="' + res1.champion_name_kr + ' 평균 이하의 트롤러">평균이하</span></div></div>'
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
					queue = "우르프"
				} else if (res.queueId == 490) {
					queue = "빠른대전"
				} else if (res.queueId == 440) {
					queue = "자유랭크"
				}
				key = res.matchId + res.participantId
				str = "<span><font size=2>|" + queue + "|</font></span>";
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

			if (res != '') {
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
						console.log(res)
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
	$.ajax({
		type: 'post',
		url: '/riot/game',

		success: function(res) {
			//			
			for (let i in res) {

				allofList.push(res[i])
			}
			console.log(allofList)
			showGameTamble(res, data)
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
	//	bbb(data)
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
	console.log(goBtn, matchId)
	//	var line1 = document.getElementById("line1" + goBtn);
	var container2 = document.getElementById("container2" + matchId);
	var container4 = document.getElementById("container4" + matchId);
	//	line1.style.display = ((line1.style.display != 'none') ? 'none' : 'block');
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
			//				console.log(res)
			//
			for (let i in res) {
				if (res[i].queueId == 420) { //솔랭인경우
					$.ajax({
						contentType: 'application/json',
						type: 'post',
						url: '/summoner/v4/Rank',
						data: JSON.stringify(res[i]),
						success: function(res1) {
							//							console.log(res1)
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


