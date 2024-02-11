/**
 * 
 */
let gameName1 = $('#gameName1').val()
let tagLine = $('#tagLine').val()
let championName = ''
let teamId = ''
let matchId = ''
let dbList = []
let damageTakenOnTeamPercentage = ''
let kda = ''
let killParticipation = ''
let teamDamagePercentage = ''
let goldPerMinute = ''



$("#find").on("click", function() {
	$('#detail2').empty()

	let str = ''
	data = {
		'gameName': gameName1,
		'tagLine': tagLine
	}
	console.table(data)
	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		async: false,
		data: data,
		success: function(res) {
			for (let z in res) {

				data2 = { 'matchIdjustOne': res[z] }

				let result1 = res
				$.ajax({

					type: 'post',
					url: '/riotTv/findOnebyList',
					async: false,
					data: data2,
					success: function(res) {

						for (let j in res.info.participants) {

							if (res.info.participants[j].riotIdGameName == gameName1) {

								str += z + "번째 경기" + '<input type = "button" onclick = "findOne(this.id)" id = "' + result1[z] + '" value = ">>라문철tv분석<<">'
								//									+ " 내가 한 챔프 :" + res.info.participants[j].championName 

								str += "내 챔프 : <img width='50' height='50'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + res.info.participants[j].championName + ".png'>"
								str += teamId + '</br>'

							}

							matchId = res.metadata.matchId
							championName = res.info.participants[j].championName
							teamId = res.info.participants[j].teamId
							damageTakenOnTeamPercentage = res.info.participants[j].challenges.damageTakenOnTeamPercentage
							kda=res.info.participants[j].challenges.kda
							killParticipation = res.info.participants[j].challenges.killParticipation
							teamDamagePercentage= res.info.participants[j].challenges.teamDamagePercentage
							goldPerMinute = res.info.participants[j].challenges.goldPerMinute
							
							
							
							db = {}
							db.matchId = matchId
							db.championName = championName
							db.teamId = teamId
							db.damageTakenOnTeamPercentage=damageTakenOnTeamPercentage
							db.kda = kda
							db.killParticipation=killParticipation
							db.teamDamagePercentage=teamDamagePercentage
							db.goldPerMinute =goldPerMinute
							
							
							
							dbList.push(db)
							console.log(res)
						}

						$('#detail2').html(str)

						//프론트에 내용 보내기(위에)
						//db에 내용 보내기 (아래)


						dbSaveInfoRiotTv(res)

					}

				})

			}
		}
	})
	console.log(dbList)
})

function findOne(matchIdjustOne) {
	let gameName1 = $('#gameName1').val()
	data = { 'matchIdjustOne': matchIdjustOne }

	console.log(data)

}

function dbSaveInfoRiotTv(res) {

	let matchId = res.metadata.matchId
	var date = new Date(res.info.gameStartTimestamp);

	console.log(
		date.getFullYear() + '/' + (date.getMonth() + 1) + '/' +
		date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +
		date.getSeconds());

	for (let i in res.info.participants) {




	}


}



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
