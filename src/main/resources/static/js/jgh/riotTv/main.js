/**
 * 
 */

$("#find").on("click", function() {

	let gameName1 = $('#gameName1').val()
	let tagLine = $('#tagLine').val()

	data = {
		'gameName': gameName1,
		'tagLine': tagLine
	}
	console.table(data)
	$.ajax({

		type: 'post',
		url: '/riotTv/findPuuIdFindList',
		data: data,
		success: function(res) {

			let str = ''
			for (let i in res) (

				str += i + "번" + '<input type = "button" onclick = "findOne(this.id)" id = "' + res[i] + '" value = "click!!"> </br>'

			)
			$('#detail2').html(str);

		}
	})
})

function findOne(matchIdjustOne) {
	let gameName1 = $('#gameName1').val()
	data = { 'matchIdjustOne': matchIdjustOne }
	console.log(data)
	$.ajax({

		type: 'get',
		url: '/riotTv/findOnebyList',
		data: data,
		success: function(res) {

			for (let i in res) {
				console.log(res.info.participants[i].riotIdGameName)
//				if (res.info.participants[i].riotIdGameName == gameName1) {
//
//
//					$('#detail3').html(res.info.participants[i].championName);
//				}
			}


		



		}
	})

}