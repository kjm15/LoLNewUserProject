
var ws;
if (ws == null || ws == '') {
	ws = new WebSocket("ws://" + location.host + "/jgh");

}

ws.addEventListener("message", (event) => {

	userId = $('#userId').val()
	//	event

	let eventjson = JSON.parse(event.data)
	//	console.log(eventjson)

	if (eventjson.work == 'roomUpdate') { // 방만들고 업데이트하기
		showNewDuo()


	} else if (eventjson.work == 'createQuestion') {//다른사람으로부터 승낙요청
		getId('dcntflag').value = eventjson.work.dcnt

		if (eventjson.hostId == userId) {

			createQuestion(eventjson)
		}

	} else if (eventjson.work == 'connectRoom') { //서로 대화창에 들어옴
		console.log(eventjson)
		let rcnt = $('#rcnt').val()
		if (userId == eventjson.hostId || userId == eventjson.guestId) {

			open()
			$('#chatt').show();
			$('.wrap').hide();
			$('#' + rcnt).remove()

		}


	} else if (eventjson.work == 'myRoom' && userId == eventjson.friendId) {
		//본인 대화방 접속

		open()
		$('#chatt').show();
		$('.wrap').hide();




	} else if (eventjson.work == 'reject') { //대화거절시 상대방에게 거절알림
		if (userId == eventjson.guestId) { //요청쪽
			close()
			$('.accordion-box').empty()
			$('#duoParty').show();
			$('#duoPartyCancel').hide();
			$('#flagcollapse').html('=================')
			alert('상대방이 거절하였습니다.')

		}
		if (userId == eventjson.hostId) { //게시글쓴쪽
			$('#' + eventjson.roomNum).remove()
			//			$('.accordion-box').empty()
			//			$('#duoParty').show();
			//			$('#duoPartyCancel').hide();
			//			$('#flagcollapse').html('=================')


		}

	} else if (eventjson.work == rcnt) { //대화창 안에서 보내기

		chattcontents(rcnt)
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