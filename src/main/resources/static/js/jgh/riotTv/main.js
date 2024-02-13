/**
 * 
 */
$('#loading').hide()
//db넣은걸 가지고 와서 사용할떄 쓰는 리스트
let dbFindList = []

let championName = ''
let teamId = ''
let matchId = ''

let kda = ''
let teamDamagePercentage = ''
let totalTimeSpentDead = ''
let visionWardsBoughtInGame = ''
let visionScore = ''
let win = ''
let gameStartTimestamp = ''
let riotIdGameName = ''
let riotIdTagline = ''
let goldEarned = ''
let puuid = ''
let totalDamageDealtToChampions = ''
let totalMinionsKilled = ''
let wardsPlaced = ''
let kills = ''
let assists = ''
let deaths = ''
let teamName = ''
let championId = ''

//db에 넣을때 사용하는 리스트
let dbList = [];

let matchIdCnt = 0;
$("#find").on("click", function() {


	matchIdCnt = 0;
	startRiotTv()

})
function startRiotTv() {

	$("#loading").show()
	//db가서 최신 matchId와 다른지 확인 후 다르면 업데이트

	findPuuIdFindListSaveDb()

	//업데이트 후에 db에서 가지고 오기
	dbFindData()

	$('#loading').hide()

}
function findOne(matchId) {

	chartteam(matchId)

}

function dbFindData() {
	$('#detail2').empty()
	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': matchIdCnt * 3
	}
	let cnt = 1;
	dbFindList = []
	let str = ''

	$.ajax({

		type: 'post',
		url: '/riotTv/dbFindData',
		async: false,
		data: data,
		success: function(res) {

			dbFindList = res

			for (let z in res) {

				if (res[z].riotIdGameName == gameName1) {

					str += cnt + "번째 경기" + '<input type = "button" onclick = "findOne(\'' + res[z].matchId + '\')" value = ">>라문철tv분석<<">'
					str += "내 챔프 : <img width='50' height='50'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + res[z].championName + ".png'>"
					str += "진형 : " + res[z].teamName + '</br>'
					cnt++;
				}

			}
			str += "<a href = 'javascript: startRiotTv()'> ▽ ▽ ▽ ▽ ▽▽▽  더보기 ▽▽▽ ▽ ▽ ▽ ▽ ▽ ▽ </a>"

			$('#detail2').html(str)
			console.log("최신 db통신완료")

		}

	})

}
//db에 저장하기
function dbSaveInfoRiotTv() {


	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/riotTv/dbSaveInfoRiotTv',
		async: false,
		data: JSON.stringify(dbList),
		success: function(res) {

		}

	})

}
//dbList에 값이 있으면 새로운데이터 존재 >> db저장 >> db불러오기 순서
//dbList에 값이 없으면 현재 db가 최신db >> db불러오기
function findPuuIdFindListSaveDb() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	$('#detail2').empty()
	matchIdCnt++
	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': matchIdCnt * 3
	}
	console.log(matchIdCnt)
	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		async: false,
		data: data,
		success: function(res) {
			//res : matchid list
			//db와 api받아온 것 차이
			res = matchListVsDb(res)
			console.log(res)

			for (let z in res) {

				data2 = { 'matchIdjustOne': res[z] }

				$.ajax({

					type: 'post',
					url: '/riotTv/findOnebyList',
					async: false,
					data: data2,
					success: function(res) {
						//						console.log(res)
						for (let j in res.info.participants) {

							matchId = res.metadata.matchId //경기번호
							championName = res.info.participants[j].championName //챔피언 이름
							teamId = res.info.participants[j].teamId //블루or레드  100:블루 200:레드
							if (teamId == 100) {
								teamName = '블루'
							} else {
								teamName = '레드'
							}

							kills = res.info.participants[j].kills //킬
							assists = res.info.participants[j].assists //어시스트
							deaths = res.info.participants[j].deaths//데쓰
							kda = ((kills + assists) / deaths).toFixed(2) //kda

							totalTimeSpentDead = res.info.participants[j].totalTimeSpentDead //총 죽어있던시간
							visionWardsBoughtInGame = res.info.participants[j].visionWardsBoughtInGame // 와드산겟수
							visionScore = res.info.participants[j].visionScore //시야점수
							win = res.info.participants[j].win //승패
							gameStartTimestamp = res.info.gameStartTimestamp //게임시작시간

							riotIdGameName = res.info.participants[j].riotIdGameName //게임아이디
							riotIdTagline = res.info.participants[j].riotIdTagline //태그

							goldEarned = res.info.participants[j].goldEarned //총 골드량
							totalDamageDealtToChampions = res.info.participants[j].totalDamageDealtToChampions //챔피언에게 가한 피해량
							totalMinionsKilled = res.info.participants[j].totalMinionsKilled //전체 미니언킬
							wardsPlaced = res.info.participants[j].wardsPlaced //와드 설치수
							puuid = res.info.participants[j].puuid //puuid
							championId = res.info.participants[j].championId


							db = {}
							db.matchId = matchId
							db.championName = championName
							db.teamId = teamId
							db.teamName = teamName

							db.kills = kills
							db.assists = assists
							db.deaths = deaths
							db.kda = kda

							db.totalTimeSpentDead = totalTimeSpentDead
							db.visionWardsBoughtInGame = visionWardsBoughtInGame
							db.visionScore = visionScore
							db.win = win
							db.gameStartTimestamp = gameStartTimestamp

							db.riotIdGameName = riotIdGameName
							db.riotIdTagline = riotIdTagline

							db.goldEarned = goldEarned
							db.totalDamageDealtToChampions = totalDamageDealtToChampions
							db.totalMinionsKilled = totalMinionsKilled
							db.wardsPlaced = wardsPlaced
							db.puuid = puuid
							db.championId = championId

							dbList.push(db)
						}
					}
				})
			}
			if (dbList != '') {

				dbSaveInfoRiotTv()
				console.log("db최신화 완료(API통신완료)")

			} else {
				console.log("현재 최신db DB통신완료")
			}

		}
	})
}
//최신matchList 확인 함수
function matchListVsDb(res) {

	res1 = [];

	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/riotTv/matchListVsDb',
		async: false,
		data: JSON.stringify(res),
		success: function(res) {

			res1 = res
		}
	})
	return res1;

}



//data중 스템프타임 사용시에 필요한 것들
//	console.log(
//		date.getFullYear() + '/' + (date.getMonth() + 1) + '/' +
//		date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +
//		date.getSeconds());

function loadingLogoInput() {
	let str = ''
	str += '<img src="/img/loadingimg.gif"/>'

	$('#loading').html(str)

}
function loadingLogoOutput() {

	$('#loading').empty()

}
////그래프/////




function chartteam(matchId) {
	$('#myChart1').empty();
	$('#myChart2').empty();
	$('#myChart3').empty();

	$('#myChart1').append('<canvas id="circle"><canvas>');
	$('#myChart2').append('<canvas id="doughnutChart"><canvas>');
	$('#myChart3').append('<canvas id="bar-chart-horizontal"><canvas>');



	//	console.log(dbFindList)
	let teamIdmatch = ''
	let gameName1 = $('#gameName1').val()
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].riotIdGameName == gameName1) {

			teamIdmatch = dbFindList[i].teamId

		}

	}
	let championImgList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {

			let img = "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + dbFindList[i].championName + ".png"
			//				championNameList.push(dbFindList[i].koChampionName)
			championImgList.push(img)
		}

	}
	let championNameList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {

			championNameList.push(dbFindList[i].koChampionName)

		}

	}

	let totalDamageDealtToChampionsList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			totalDamageDealtToChampionsList.push(dbFindList[i].totalDamageDealtToChampions)

		}

	}

	console.log(dbFindList)

	var ctx = document.getElementById('circle').getContext('2d');
	var chart = new Chart(ctx, {
		type: 'doughnut', //
		data: {
			labels: championNameList,
			datasets: [{
				label: "챔피언 데미지량",
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2, // 바 테두리 두께
				data: totalDamageDealtToChampionsList
			}]
		},
		options: {
			//			responsive: false,
			tooltips: {
				enabled: true
			},
			hover: {
				animationDuration: 1
			}

		}
	})


	let killsList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			killsList.push(dbFindList[i].kills)

		}

	}

	const doughnutChartCtx = document.querySelector('#doughnutChart').getContext('2d');
	const doughnutChart = new Chart(doughnutChartCtx, {
		type: 'doughnut',
		data: {
			labels: championNameList,
			datasets: [{
				data: killsList,
				label: "챔피언 킬수",
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2
			}]
		},
		options: {
			cutout: '50%',

		}
	});


	let allList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].riotIdGameName == gameName1) {


			allList.push(dbFindList[i].damageTakenOnTeamPercentage)
			allList.push(dbFindList[i].killParticipation)

			allList.push(dbFindList[i].teamDamagePercentage)



		}

	}

	let visionWardsBoughtInGameList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			visionWardsBoughtInGameList.push(dbFindList[i].visionWardsBoughtInGame)

		}

	}
	///수평바
	const labels = championNameList;
	const images = championImgList

		.map(png => {
			const image = new Image();
			image.src = png;
			return image;
		});
	const values = visionWardsBoughtInGameList;

	new Chart(document.getElementById("bar-chart-horizontal"), {
		type: "horizontalBar",
		plugins: [{
			afterDraw: chart => {
				var ctx = chart.chart.ctx;
				var xAxis = chart.scales['x-axis-0'];
				var yAxis = chart.scales['y-axis-0'];
				yAxis.ticks.forEach((value, index) => {
					var y = yAxis.getPixelForTick(index);
					ctx.drawImage(images[index], xAxis.left - 27, y - 7, 15, 15);
				});
			}
		}],
		data: {
			labels: labels,
			datasets: [{
				label: '와드 구입 갯수',
				data: values,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 2
			}]
		},
		options: {
			responsive: false,
			layout: {
				padding: {
					left: 50
				}
			},
//			title: {
//				display : true,
//				text: '와드 구입 갯수'
//			},
			lenged : {
				
				display : true
			},
			scales: {
				yAxes: [{
					ticks: {
						display: false
					},
					gridLines: {
						drawBorder: false,
					}
				}],
				xAxes: [{
//					ticks: {
//						beginAtZero: true
//					},
					gridLines: {
						display: false,
					}
				}],
			}
		}
	});

}
