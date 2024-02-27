//메일 보내기
$('#mailsend').on("click", function() {
	send()
})

function send() {
	let recv_userId = $('#recv_userId').val()
	let send_userId = $('#send_userId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()
	let status = $('#status').val()
	
	 // 입력 필드가 비어 있는지 검사
	    if (!n_title || !n_message) {
        alert("메일 전송 실패");
        return;
    }

	data = {
		'recv_userId': recv_userId,
		'send_userId': send_userId,
		'n_title': n_title,
		'n_message': n_message,
		'status': status
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				alert("메일을 성공적으로 보냈습니다.")
				modal2.style.display = "none"
				modal3.style.display = "none"
				modal1.style.display = "flex"
			} else {
				alert("메일 전송 실패")
			}

		}
	})


}
//

$(document).ready(function() {
	document.querySelector("#status").innerText = '처리전'
})
