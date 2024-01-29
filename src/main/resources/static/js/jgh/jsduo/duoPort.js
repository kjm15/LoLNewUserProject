

if (ws == null || ws == '') {
	var ws;
	ws = new WebSocket("ws://" + location.host + "/jgh");

}

ws.addEventListener("message", (event) => {

	let eventjson = JSON.parse(event.data)
	console.log(eventjson)

	if (eventjson.work == 'roomUpdate') { // 방만들고 업데이트하기
		duoMainInfo()
//		showNewDuo(eventjson)


	} else if (eventjson.work == 'createQuestion') {//다른사람으로부터 승낙요청
	
		let userId = $('#userId').val()
		
		if (eventjson.hostId == userId) {
			if (eventjson.hostId == userId) {

				createQuestion(eventjson)
			}
		}


	} else if (eventjson.work == 'connectRoom') { //서로 대화창에 들어옴
		//		console.log(eventjson)
		let userId = $('#userId').val()

		if (userId == eventjson.hostId || userId == eventjson.guestId) {

			webstart(eventjson.roomNum)
			open()
			$('.chatthead').empty()
			$('.chatthead').append("듀오채팅     [" + eventjson.roomNum + "번방]")
			$('#chatt').show();
			$('.wrap').hide();
			$('#' + eventjson.roomNum).remove()
			$('.menu').empty()
			showChattInfo() //왼쪽 사이드바 최신화 업데이트

			$("#msg").attr("disabled", false);
			let res = {}
			res.work = "roomUpdate"

			let temp = JSON.stringify(res)
			ws.send(temp)

		}


	} else if (eventjson.work == 'reject') { //대화거절시 상대방에게 거절알림

		let guestId = $('#guestId').val()
		let hostId = $('#hostId').val()
		let userId = $('#userId').val()
		let dcntflag = $('#dcntflag').val()
		if (userId == guestId) { //요청쪽
			close()
			$('.accordion-box').empty()
			$('#duoParty').show();
			$('#duoPartyCancel').hide();
			$('#flagcollapse').html('=================')
			alert('상대방이 거절하였습니다.')

		}
		if (userId == hostId) { //게시글쓴쪽
			$('#' + dcntflag).remove()

		}

	} else if (eventjson.work == "sendMsg") { //메세지 보내기 //완료

		let rcnt = $('#rcnt').val()
		//대화창 안에서 보내기
		if (rcnt = eventjson.rcnt) {

			chattcontents(eventjson)

		}


	}
	else if (eventjson.work == "reload") { //누군가 방접속시 기존화면 초기화

		$('#preflag').empty()
		duoMainInfo()


	}

});


//const sse = new EventSource("http://192.168.0.27:8080/jgh"); // ipconfig를 통해 본인 아이피를 넣어줘야함
//const sse = new EventSource("http://localhost:8080/jgh"); //혼자할때
//
//
//sse.addEventListener('connect', (e) => {
//	//첫 시작시 메세지
//	console.log("이미터연결완료")
//
//});
//
//
//sse.addEventListener('makeroom', (e) => {
//	//방만들기 시 추가 테이블 구문
//	showNewDuo()
//
//});
//
//
//sse.addEventListener('infoAll', (e) => {
//	//전체 공지 전송
//	alert(e.data)
//
//});