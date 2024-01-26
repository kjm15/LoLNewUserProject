/**
 * 
 */

$(document).ready(function() {
	//메세지 형태의 값은 다 찾기
	let msg = $('#msgFlag').val();
	let error = $('#errorFlag').val();
	if (msg != '') {
		alert(msg);
	}
	else if (error != '') {
		alert(error);
	}
})