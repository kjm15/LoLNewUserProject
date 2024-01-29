//////////////////저장/////////////////////////////

$('#duoSaveBtn').on("click", function() {

	let userId = $('#userId').val()
	let myPosition = $('#position').val()
	let duoPosition = $('input[name=inlineRadioOptions]:checked').val()
	let tier = $('#tier').val()
	let gameType = $('#gameType').val()
	let memo = $('#textArea').val()

	if (myPosition == '포지션' || duoPosition == 'undefined' || tier == '필수선택' || gameType == '필수선택' || textArea == '') {

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

	//보낼때

	$.ajax({

		type: 'post',
		url: '/saveDb',
		data: data,
		success: function(res) {

			res.work = "roomUpdate" // 방 업데이트
			//			console.log(res)
			let temp = JSON.stringify(res)
			ws.send(temp) //전체에게 무언가 시킬떄


			document.getElementById('position').value = '포지션'
			document.getElementById('tier').value = '필수선택'
			document.getElementById('gameType').value = '필수선택'
			document.getElementById('textArea').value = ''

		}, error: function(error) {
			console.log("저장 ajax에러")
		}
	})

})