/**
 * 
 */

$("#find").on("click", function() {
	$('#detail2').empty()
	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()
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
									+" 내가 한 챔프 :"+ res.info.participants[j].championName + '</br>'
								console.log(res.info.participants[j].championName)

							}
						}
						$('#detail2').html(str)
					}
				})
			}
		}
	})
})

function findOne(matchIdjustOne) {
	let gameName1 = $('#gameName1').val()
	data = { 'matchIdjustOne': matchIdjustOne }

	console.log(data)

}