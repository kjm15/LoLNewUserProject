
////////////////////////////포트접속////////////////////////////////////
const sse = new EventSource("http://192.168.0.27:8080/jgh"); // ipconfig를 통해 본인 아이피를 넣어줘야함
sse.addEventListener('connect', (e) => {
	console.log("접속시작")
});

sse.addEventListener('count', (e) => {

	showNewDuo()
	
});