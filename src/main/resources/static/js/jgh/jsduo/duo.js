/**
 * 
 */

const sse = new EventSource("http://localhost:8080/jgh");
sse.addEventListener('connect', (e) => {

});

sse.addEventListener('count', (e) => {
showNewDuo()
	//	update()

});
//sse.onerror = () => {
//
//	sse.close();
//}



$('#msgbtn').on("click", function() {
	
	update()

	$.ajax({
		type: 'post',
		url: '/jgh',

		success: function(res) {

		}, error: function(error) {
			console.log("에러")
			//			update()
		}
	})

})
//보여주기
function showNewDuo() {
	$.ajax({

		type: 'post',
		url: '/comparedcnt',
		success: function(res) {

			trs = "<tr  id = " + res.dcnt + ">"
			tdwin = "<td>개발중</td>"
			tduserId = "<td>" + res.userId + "</td>"
			tdmyPosition = "<td>" + res.myPosition + "</td>"
			tdtier = "<td>" + res.tier + "</td>"
			tdgameType = "<td>" + res.gameType + "</td>"
			tdduoPosition = "<td>" + res.duoPosition + "</td>"
			tdlately = "<td>개발중</td>"
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

		}, error: function(error) {
			console.log("에러")
		}
	})

}


//저장

function update() {

	let userId = $('#userId').val()
	let myPosition = $('#position').val()
	let duoPosition = $('input[name=inlineRadioOptions]:checked').val()
	let tier = $('#tier').val()
	let gameType = $('#gameType').val()
	let memo = $('#textArea').val()

	if (myPosition == '' || duoPosition == '' || tier == '' || gameType == '' || textArea == '') {

		alert("빠진부분이 있습니다 확인해주세요")

		return false;
	}
	data = {
		'userId': userId,
		'myPosition': myPosition,
		'duoPosition': duoPosition,
		'tier': tier,
		'gameType': gameType,
		'memo': memo
	}

	$.ajax({

		type: 'post',
		url: '/saveDb',
		data: data,
		success: function(res) {
		
		}, error: function(error) {
			console.log("에러")
		}
	})

}

function deleteDuo(dcnt) {

	console.log(dcnt)

	if (confirm("정말 삭제하시겠습니까?")) {

		data = { "dcnt": dcnt }
		$.ajax({
			type: 'post',
			url: '/deleteById',
			data: data,
			success: function(res) {

				if (res) {
					location.reload()
					alert("삭제 성공 !!")

				} else {
					alert("작성자만 삭제 가능합니다. 다시 확인해주세요")
				}

			}
		})
	}

}