
////////////////////////////포트접속////////////////////////////////////
const sse = new EventSource("http://localhost:8080/jgh");
sse.addEventListener('connect', (e) => {

});

sse.addEventListener('count', (e) => {

	showNewDuo()

	
});