<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Title</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

</head>
<body>


	<script>
	const sse = new EventSource("http://localhost:8080/connect");
	sse.addEventListener('connect', (e) => {
		const { data: receivedConnectData } = e;
		console.log('connect event data: ',receivedConnectData);  // "connected!"
	});
	sse.addEventListener('count', e => {  
	    const { data: receivedCount } = e;  
	    console.log("count event data",receivedCount);  
	     
	});
	</script>
</body>
</html>