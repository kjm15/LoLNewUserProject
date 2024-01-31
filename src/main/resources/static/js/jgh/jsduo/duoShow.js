
////////////시작하자마자 방 보여주기/////////////////
$(document).ready(function() {
	duoMainInfo()
	showChattInfo()
})

function duoMainInfo() {

	$.ajax({
		type: 'post',
		url: '/jgh/duostartinfo',
		success: function(res) {
			console.log(res)
			let str = ''
			for (let i in res) {

				let strbtn = ''
				str += "<tr class='select'>"
				str += "<td>" + res[i].rCnt + "</td>"
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
				strbtn += "<li><a class='dropdown-item' href='javascript:deleteDuo(" + res[i].rCnt + ")'>삭제</a></li></ul></div>"

				str += "<td>" + strbtn + "</td>"
				str += "</tr>"
			}
			$('#preflag').html(str)
		}
	})
}

////////////중간에 방 넣기////////////////

function showNewDuo(res) {
	console.log(res);
	const date = new Date();
	let rCnt = $('#rCnt').val()
	rCnt = rCnt + 1
	document.getElementById('rCnt').value = rCnt
	let str = ''
	str += "<tr>"
	str += "<td>" + res.rCnt + "</td>"
	str += "<td>" + res.userId + "</td>"
	str += "<td>" + res.myPosition + "</td>"
	str += "<td>" + res.tier + "</td>"
	str += "<td>" + res.gameType + "</td>"
	str += "<td>" + res.duoPosition + "</td>"
	str += "<td>최근챔피언개발중</td>"
	str += "<td>" + res.memo + "</td>"
	str += "<td>" + date + "</td>"

	str += "<td><div class='dropdown'>" +
		"<button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>" +
		"..." + "</button>" +
		"<ul class='dropdown-menu'>" +
		"<li><a class='dropdown-item' href='#'>수정</a></li>" +
		"<li><a class='dropdown-item' href='javascript:deleteDuo(" + res.rCnt + ")'>삭제</a></li>" +
		"</ul>" +
		"</div></td>"

	str += "</tr>"

	$('#preflag').prepend(str)
	$('#' + res.rCnt).hide()
	$('#exampleModal').modal("hide");

	$('#' + res.rCnt).show(4200)
	console.log("방 업데이트 완료")


}

//접속한 채팅방 사이바에 보여주기

function showChattInfo() {

	$('.menu').empty()

	$.ajax({
		//
		type: 'post',
		url: '/jgh/chattRoomInfo',
		success: function(res) {
			
			if (res != '') {
				str = ''
				str += '<ul>'
				for (let i of res) {

					str += '<li ><span>채팅방 번호:' + i.rCnt + '</br></span><a href = "javascript:myRoom(' + i.rCnt + ')">들어가기<a>'
						+ '</br> <a href = "javascript:goOutRoom(' + i.rCnt + ')">방나오기<a></li></br>'

				}
				str += '</ul>'

				$('.menu').append(str)
			}

		}
	})

}





