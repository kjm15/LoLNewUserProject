//////////////////저장/////////////////////////////

$('#duoSaveBtn').on("click", function() {
	 
	let userId = $('#userId').val()
	let myPosition = $('#myPosition').val()
	let duoPosition = $('#duoPosition').val()
	let tier = $('#tier').val()
	let gameType = $('#gameType').val()
	let memo = $('#memo').val()

	if (myPosition == '포지션' || duoPosition == 'undefined' || tier == '필수선택' || gameType == '필수선택' || memo == '') {

		alert("빠진부분이 있습니다 확인해주세요")

		return false;
	}else if(myPosition == duoPosition){
		
		alert("찾는 포지션이 중복되었습니다. 포지션을 변경해주세요")
		return false;
		
	}
	
	
	modalOff()
	
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