$('#test').on("click",function(){
	console.log('실행');
	$.ajax({

		type: 'post',
		url: '/memberload',

		
		success: function(res) {
			console.log(res)
			let str = ''
			for (let i in res) {
				str += `<input type = "text" name = "recv_userId" id="recv_userId" value ="${res[i].userId}">`;
			}
			document.getElementById("memberl").innerHTML = str
		}
	})
	
})




//$(document).ready(function() {
//	
//	
//	$('#allSend').ready(function() {
//		event.preventDefault(); // 폼 기본동작 방지
//
//		let n_title = $('#n_title').val();
//		let n_message = $('#n_message').val();
//
//		$.ajax({
//			type: 'POST',
//			url: '/sendToAllMembers', 
//			data: { 'n_message': n_message,
//					'n_title' : n_title
//			},
//			success: function(res) {
//				console.log(res)
//				alert('메시지를 전송했습니다.');
//			},
//			error: function(xhr, status, error) {
//				alert('메시지 전송에 실패했습니다. 에러: ' + error);
//			}
//		});
//	})
//})


