

if (ws == null || ws == '') {
	var ws;
	ws = new WebSocket("ws://" + location.host + "/jgh");

}

ws.addEventListener("message", (event) => {

	let eventjson = JSON.parse(event.data)
	//	console.log(eventjson)

	if (eventjson.work == 'roomUpdate') { // 방만들고 업데이트하기
		duoMainInfo()

	} else if (eventjson.work == 'createQuestion') {//다른사람으로부터 승낙요청
		console.log(eventjson)
		let userId = $('#userId').val()
		console.log(userId)
		if (eventjson.userId == userId) {

			createQuestion(eventjson)

		}


	} else if (eventjson.work == 'connectRoom') { //서로 대화창에 들어옴
		console.log(eventjson)
		let userId = $('#userId').val()

		if (userId == eventjson.hostId || userId == eventjson.guestId) {
			
			myRoom(eventjson.rCnt)
			showChattInfo() //왼쪽 사이드바 최신화 업데이트
			let res = {}
			res.work = "roomInfo"
			let temp = JSON.stringify(res)
			ws.send(temp)

		}


	} else if (eventjson.work == "sendMsg") { //메세지 보내기 //완료
		//		let userId = $('#userId').val()
		let rCnt = $('#rCnt').val()

		//대화창 안에서 보내기
		if (rCnt == eventjson.rCnt) {

			chattcontents(eventjson)

		}

	}
	//	else if (eventjson.work == "reload") { //누군가 방접속시 기존화면 초기화
	//		$('#preflag').empty()
	//		duoMainInfo()
	//
	//
	//	} 


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