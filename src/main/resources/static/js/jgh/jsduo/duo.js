/**
 * 
 */
////////////////////////////포트접속////////////////////////////////////
const sse = new EventSource("http://localhost:8080/jgh");
sse.addEventListener('connect', (e) => {

});

sse.addEventListener('count', (e) => {
	showNewDuo()

});

///////////////////////////////모달/////////////////////////////////////
const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {

	e.target === modal_background ? close() : false
})
document.querySelector('#modal_wrap').addEventListener('click', () => {
	open()
})
$('.modal_close').on("click", function() {
	close()

})


/////////////////////////////////////////////////////////////////////
$('#duoSearchBtn').on("click", function() {

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

			trs = "<tr>"
			tdwin = "<td>연승/페 개발중</td>"
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
////////////////////////////////////////삭제//////////////////////////////
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


$('#modal_wrap tbody').on('click', 'tr', function() {
	 	let info = table.api().row($(event.currentTarget)).data();

});


function test(dcnt) {

	data = { 'dcnt': dcnt }
	//	console.log(a)
	$.ajax({

		type: 'post',
		url: '/duoInfo',
		data: data,
		success: function(res) {

			let date = res.date
			//			let dcnt = res.date
			let duoPosition = res.duoPosition
			let myPosition = res.myPosition
			let memo = res.memo
			let userId = res.userId
			let winLose = res.winLose
			let tier = res.tier

			$('#duoPositionM').html(duoPosition)
			$('#myPositionM').html(myPosition)
			$('#userIdM').html(userId)
			$('#memoM').html(memo)
			$('#date').html(date)
			$('#tierM').html(tier)
			//			$('#duoModalBody').html(res)
		}, error: function(error) {
			console.log("에러")
		}
	})


}