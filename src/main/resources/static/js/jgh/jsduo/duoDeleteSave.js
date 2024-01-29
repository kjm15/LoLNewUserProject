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
		'memo': memo,
		'work': "roomUpdate"
	}
	
	let temp = JSON.stringify(data)
	ws.send(temp) //전체에게 무언가 시킬떄
	//보낼때



})