
////////////시작하자마자 방 보여주기/////////////////
$(document).ready(function() {
	duoMainInfo()
	showChattInfo()
})

function duoMainInfo() {

	$.ajax({
		type: 'post',
		url: '/duostartinfo',
		success: function(res) {
			let str = ''
			for (let i in res) {

				let strbtn = ''
				str += "<tr class='select'>"
				str += "<td>" + res[i].dcnt + "</td>"
				str += "<td>" + res[i].userId + "</td>"
				str += "<td>" + res[i].myPosition + "</td>"
				str += "<td>" + res[i].tier + "</td>"
				str += "<td>" + res[i].gameType + "</td>"
				str += "<td>" + res[i].duoPosition + "</td>"
				str += "<td>" + "최근챔피언개발중" + "</td>"
				str += "<td>" + res[i].memo + "</td>"
				str += "<td>" + res[i].date + "</td>"

				strbtn += "<div class='dropdown'><button class='btn btn-secondary dropdown-toggle'type='button'"
				strbtn += "data-bs-toggle='dropdown' aria-expanded='false'>...</button>"
				strbtn += "<ul class='dropdown-menu'><li><a class='dropdown-item' href='#'>수정</a></li>"
				strbtn += "<li><a class='dropdown-item' href='javascript:deleteDuo(" + res[i].dcnt + ")'>삭제</a></li></ul></div>"

				str += "<td>" + strbtn + "</td>"
				str += "</tr>"
			}
			$('#preflag').html(str)
		}
	})
}

////////////중간에 방 넣기////////////////

function showNewDuo() {

	$.ajax({

		type: 'post',
		url: '/comparedcnt',
		success: function(res) {

			trs = "<tr>"
			tdwin = "<td>" + res.dcnt + "</td>"
			tduserId = "<td>" + res.userId + "</td>"
			tdmyPosition = "<td>" + res.myPosition + "</td>"
			tdtier = "<td>" + res.tier + "</td>"
			tdgameType = "<td>" + res.gameType + "</td>"
			tdduoPosition = "<td>" + res.duoPosition + "</td>"
			tdlately = "<td>최근챔피언개발중</td>"
			tdmemo = "<td>" + res.memo + "</td>"
			tddate = "<td>" + res.date + "</td>"

			tddiv = "<td><div class='dropdown'>" +
				"<button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>" +
				"..." + "</button>" +
				"<ul class='dropdown-menu'>" +
				"<li><a class='dropdown-item' href='#'>수정</a></li>" +
				"<li><a class='dropdown-item' href='javascript:deleteDuo(" + res.dcnt + ")'>삭제</a></li>" +
				"</ul>" +
				"</div></td>"

			tre = "</tr>"


			makeHtml = trs + tdwin + tduserId + tdmyPosition + tdtier + tdgameType + tdduoPosition + tdlately + tdmemo + tddate + tddiv + tre
			$('#preflag').prepend(makeHtml)
			$('#' + res.dcnt).hide()
			$('#exampleModal').modal("hide");

			$('#' + res.dcnt).show(4200)
			console.log("방 업데이트 완료")

		}, error: function(error) {
			console.log("에러")
		}
	})

}

//접속한 채팅방 사이바에 보여주기

function showChattInfo() {

	$('.menu').empty()

	$.ajax({
		//
		type: 'post',
		url: '/chattRoomInfo',
		data: data,
		success: function(res) {

			if (res != '') {
				str = ''
				str += '<ul>'
				for (let i of res) {

					str += '<li ><span>채팅방 번호:' + i.roomNum + '</br></span><a href = "javascript:myRoom(' + i.roomNum + ')">들어가기<a>'
						+ '</br> <a href = "javascript:goOutRoom(' + i.roomNum + ')">방나오기<a></li></br>'

				}
				str += '</ul>'

				$('.menu').append(str)
			}

		}
	})

}

