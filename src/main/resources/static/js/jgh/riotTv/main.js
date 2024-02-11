/**
 * 
 */
//db넣은걸 가지고 와서 사용할떄 쓰는 리스트
let dbFindList = []

let championName = ''
let teamId = ''
let matchId = ''

let damageTakenOnTeamPercentage = ''
let kda = ''
let killParticipation = ''
let teamDamagePercentage = ''
let goldPerMinute = ''
let soloKills = ''
let totalTimeSpentDead = ''
let visionWardsBoughtInGame = ''
let visionScore = ''
let win = ''
let gameStartTimestamp = ''
let riotIdGameName = ''
let riotIdTagline = ''
//db에 넣을때 사용하는 리스트
let dbList = [];
$("#find").on("click", function() {

	dbFindData()
	if(dbFindList == ''){
		console.log("Db내용없음 api출발")
		findPuuIdFindListSaveDb()
	}
	

})

function findOne(res) {

	data = { 'res': res }

	console.log(data)

}



function dbFindData() {
	$('#detail2').empty()
	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	data = {
		'gameName': gameName1,
		'tagLine': tagLine
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
					str += "내 챔프 : <img width='50' height='50'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + res[z].championName + ".png'>"
					str += res[z].teamId + '</br>'
					cnt++;
				}

			}

			$('#detail2').html(str)

		}

	})

}



//	console.log(
//		date.getFullYear() + '/' + (date.getMonth() + 1) + '/' +
//		date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +
//		date.getSeconds());


//function changeNameEngToKor(engName) {
//
//	data = { 'engName': engName }
//	$.ajax({
//
//		type: 'post',
//		url: '/riotTv/changNameEngToKor',
//		//		async: false,
//		data: data2,
//		success: function(res) {
//
//
//		}
//	})
//}

function dbSaveInfoRiotTv() {


	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/riotTv/dbSaveInfoRiotTv',
		data: JSON.stringify(dbList),
		success: function(res) {

			console.log("db저장완료")

		}

	})

}
function findPuuIdFindListSaveDb() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
	$('#detail2').empty()

	data = {
		'gameName': gameName1,
		'tagLine': tagLine
	}

	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		async: false,
		data: data,
		success: function(res) {
			//res : matchid list
			for (let z in res) {

				data2 = { 'matchIdjustOne': res[z] }

				$.ajax({

					type: 'post',
					url: '/riotTv/findOnebyList',
					async: false,
					data: data2,
					success: function(res) {

						for (let j in res.info.participants) {

							matchId = res.metadata.matchId
							championName = res.info.participants[j].championName
							teamId = res.info.participants[j].teamId
							damageTakenOnTeamPercentage = res.info.participants[j].challenges.damageTakenOnTeamPercentage
							kda = res.info.participants[j].challenges.kda
							killParticipation = res.info.participants[j].challenges.killParticipation
							teamDamagePercentage = res.info.participants[j].challenges.teamDamagePercentage
							goldPerMinute = res.info.participants[j].challenges.goldPerMinute
							soloKills = res.info.participants[j].challenges.soloKills

							totalTimeSpentDead = res.info.participants[j].totalTimeSpentDead
							visionWardsBoughtInGame = res.info.participants[j].visionWardsBoughtInGame
							visionScore = res.info.participants[j].visionScore
							win = res.info.participants[j].win
							gameStartTimestamp = res.info.gameStartTimestamp
							riotIdGameName = res.info.participants[j].riotIdGameName
							riotIdTagline = res.info.participants[j].riotIdTagline



							db = {}
							db.matchId = matchId
							db.championName = championName
							db.teamId = teamId
							db.damageTakenOnTeamPercentage = damageTakenOnTeamPercentage
							db.kda = kda
							db.killParticipation = killParticipation
							db.teamDamagePercentage = teamDamagePercentage
							db.goldPerMinute = goldPerMinute
							db.soloKills = soloKills
							db.totalTimeSpentDead = totalTimeSpentDead
							db.visionWardsBoughtInGame = visionWardsBoughtInGame
							db.visionScore = visionScore
							db.win = win
							db.gameStartTimestamp = gameStartTimestamp
							db.riotIdGameName = riotIdGameName
							db.riotIdTagline = riotIdTagline

							dbList.push(db)
						}



					}
				})
			}
			dbSaveInfoRiotTv()
			dbFindData()
		}
	})
	//db에 내용 보내기 (아래)


	console.log(dbList)
}
