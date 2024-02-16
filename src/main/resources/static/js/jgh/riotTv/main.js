/**
 * 
 */
$('#loading').hide()
//db넣은걸 가지고 와서 사용할떄 쓰는 리스트
let dbFindList = []
let values = []
let images = []
let labels = []


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
let participantId = ''
let winCheck = ''

//db에 넣을때 사용하는 리스트
let dbList = [];

let matchIdCnt = 0;
$("#find").on("click", function() {


	matchIdCnt = 0;
	findPuuIdFindListSaveDb()

})

function findOne(matchId) {

	chartteam(matchId)

	$('.riotgraph').show();
	$('#riotSearch').hide();
}

function dateFormat(date) {
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;
	hour = hour >= 10 ? hour : '0' + hour;
	minute = minute >= 10 ? minute : '0' + minute;
	//	second = second >= 10 ? second : '0' + second;

	return date.getFullYear() + '.' + month + '.' + day + '.' + hour + '시' + minute + '분';
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

			console.log("New데이터 db저장성공")
		}

	})

}
//dbList에 값이 있으면 새로운데이터 존재 >> db저장 >> db불러오기 순서
//dbList에 값이 없으면 현재 db가 최신db >> db불러오기
function findPuuIdFindListSaveDb() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	$('#detail2').empty()

	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': 3,
		'startValue': (matchIdCnt * 3)
	}
	console.log(matchIdCnt)
	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		async: false,
		data: data,
		success: function(res) {
			//res : 비교완료된 info정보

			console.log(res)
			dbList = []
			if (res.length != 0) {
				for (let a in res) {

					for (let j in res[a].info.participants) {

						matchId = res[a].metadata.matchId //경기번호
						championName = res[a].info.participants[j].championName //챔피언 이름
						teamId = res[a].info.participants[j].teamId //블루or레드  100:블루 200:레드
						if (teamId == 100) {
							teamName = '블루'
						} else {
							teamName = '레드'
						}

						kills = res[a].info.participants[j].kills //킬
						assists = res[a].info.participants[j].assists //어시스트
						deaths = res[a].info.participants[j].deaths//데쓰
						if (deaths == 0) {

							let deaths1 = 1;
							kda = ((kills + assists) / deaths1).toFixed(2) //kda
						} else {

							kda = ((kills + assists) / deaths).toFixed(2) //kda

						}

						totalTimeSpentDead = res[a].info.participants[j].totalTimeSpentDead //총 죽어있던시간
						visionWardsBoughtInGame = res[a].info.participants[j].visionWardsBoughtInGame // 와드산겟수
						visionScore = res[a].info.participants[j].visionScore //시야점수
						win = res[a].info.participants[j].win //승패
						if (win == false) {

							winCheck = "패배"
						} else {
							winCheck = "승리"
						}
						gameStartTimestamp = res[a].info.gameStartTimestamp //게임시작시간

						riotIdGameName = res[a].info.participants[j].riotIdGameName //게임아이디
						riotIdTagline = res[a].info.participants[j].riotIdTagline //태그

						goldEarned = res[a].info.participants[j].goldEarned //총 골드량
						totalDamageDealtToChampions = res[a].info.participants[j].totalDamageDealtToChampions //챔피언에게 가한 피해량
						totalMinionsKilled = res[a].info.participants[j].totalMinionsKilled //전체 미니언킬
						wardsPlaced = res[a].info.participants[j].wardsPlaced //와드 설치수
						puuid = res[a].info.participants[j].puuid //puuid
						championId = res[a].info.participants[j].championId
						participantId = res[a].info.participants[j].participantId

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
						db.participantId = participantId
						db.winCheck = winCheck

						dbList.push(db)
					}



					if (dbList != '') {
						console.log(dbList)
						dbSaveInfoRiotTv()


					}

				}
				console.log("db최신화 완료(API통신완료)")
				newDataInfo()

			} else {
				console.log("db최신화상태 (db통신완료)")
				newDataInfo()
			}

		}

	})
}

//db에 저장된 최신 데이터 가지고오기
function newDataInfo() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()

	data = {
		'gameName': gameName1,
		'tagLine': tagLine,
		'matchIdCnt': 3,
		'startValue': (matchIdCnt * 3)
	}

	$.ajax({
		type: 'post',
		url: '/riotTv/newDataInfo',
		async: false,
		data: data,
		success: function(res) {
			let str = ''
			dbFindList = res
			str += "<center><hr>!!! 라문철 tv !!!<hr></center>"
			for (let z in res) {

				if (res[z].riotIdGameName == gameName1) {
					var currentDate = new Date(parseInt(res[z].gameStartTimestamp));
					var currentFormatDate = dateFormat(currentDate);
					str += "<center>"
					str += currentFormatDate + " |경기|"
					str += "<img width='30' height='30'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + res[z].championName + ".png'>"

					str += "|" + res[z].teamName + "|" + res[z].winCheck + "|    " + '<input type = "button" onclick = "findOne(\'' + res[z].matchId + '\')" value = "라문철분석">'
					str += "</center>"
					cnt++;
				}

			}
			str += '<hr>'
			str += "<center><button align = center><a href = 'javascript:findPuuIdFindListSaveDb()'> ▽▽더보기click!▽▽</a></button></center>"
			str += '<hr>'
			$('#detail2').append(str)
			console.log("최신 db통신완료")



		}
	})
	matchIdCnt++


}





///////그래프///////////////////////

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
	$('#teamrate').hide();
	$('#myChart1').empty();
	$('#myChart2').empty();
	$('#myChart3').empty();


	$('#myChart1').append('챔피언에게 가한 피해량');
	$('#myChart1').append('<canvas id="circle"><canvas>');
	$('#myChart2').append('챔피언 처치 킬 수');
	$('#myChart2').append('<canvas id="doughnutChart" width = "250"><canvas>');
	$('#myChart3').append('와드 구매수');
	$('#myChart3').append('<canvas id="bar-chart-horizontal" width = "250"><canvas>');



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
	let totalDamageDealtToChampionsSum = 0
	let MytotalDamageDealtToChampions = ''
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			totalDamageDealtToChampionsList.push(dbFindList[i].totalDamageDealtToChampions)
			totalDamageDealtToChampionsSum += parseInt(dbFindList[i].totalDamageDealtToChampions)
			if (dbFindList[i].riotIdGameName == gameName1) {
				MytotalDamageDealtToChampions = dbFindList[i].totalDamageDealtToChampions

			}
		}

	}

	console.log(dbFindList)
	//	console.log(totalDamageDealtToChampionsSum)
	//총딜량
	Chart.pluginService.register({
		beforeDraw: function(chart) {
			if (chart.config.options.elements.center) {
				// Get ctx from string
				var ctx = chart.chart.ctx;

				// Get options from the center object in options
				var centerConfig = chart.config.options.elements.center;
				var fontStyle = centerConfig.fontStyle || 'Arial';
				var txt = centerConfig.text;
				var color = centerConfig.color || '#000';
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
			//			labels: championNameList,
			datasets: [{
				data: totalDamageDealtToChampionsList,

				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				], borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 159, 64, 1)'
				]
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false, //x축 반으로 줄임
			cutoutPercentage: 80,
			elements: {
				center: {
					text: totalDamageDealtToChampionsSum + " -------------            " + MytotalDamageDealtToChampions,
					color: '#FF6384', // Default is #000000
					fontStyle: 'Arial', // Default is Arial
					sidePadding: 20, // Default is 20 (as a percentage)
					minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
					lineHeight: 10 // Default is 25 (in px), used for when text wraps


				}
			}
		}
	};

	var ctx = document.getElementById("circle").getContext("2d");
	var myChart = new Chart(ctx, config);













	let killsList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			killsList.push(dbFindList[i].kills)

		}

	}

	///수평바
	labels = championNameList;
	images = championImgList

		.map(png => {
			const image = new Image();
			image.src = png;
			return image;
		});
	values = killsList;

	new Chart(document.getElementById("doughnutChart"), {
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
				], borderColor: [
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
			maintainAspectRatio: false, //x축 반으로 줄임
			layout: {
				padding: {
					left: 50
				}
			},
			tooltips: { //튤팁제거
				enabled: false
			},
			legend: {
				display: false
			},
			title: {
				display: false
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
					ticks: {
						beginAtZero: true
					},
					gridLines: {
						display: false,
					},
					ticks: {
						autoSkip: true,  // 👈
						maxTicksLimit: 1 // 👈
					}
				}],

			}
		}
	});









	let visionWardsBoughtInGameList = []
	for (let i in dbFindList) {

		if (dbFindList[i].matchId == matchId && dbFindList[i].teamId == teamIdmatch) {


			visionWardsBoughtInGameList.push(dbFindList[i].visionWardsBoughtInGame)

		}

	}
	///수평바
	labels = championNameList;
	images = championImgList

		.map(png => {
			const image = new Image();
			image.src = png;
			return image;
		});
	values = visionWardsBoughtInGameList;

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
				], borderColor: [
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
			maintainAspectRatio: false, //x축 반으로 줄임
			layout: {
				padding: {
					left: 50
				}
			},
			tooltips: { //튤팁제거
				enabled: false
			},
			legend: {
				display: false
			},
			title: {
				display: false
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
					ticks: {
						beginAtZero: true
					},
					gridLines: {
						display: false,
					},
					ticks: {
						autoSkip: true,  // 👈
						maxTicksLimit: 1 // 👈
					}
				}],

			}
		}
	});


	$('#teamrate').show();

}

$('#backRiot').on("click", function() {


	$('.riotgraph').hide();
	$('#riotSearch').show();
})


