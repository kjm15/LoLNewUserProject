//메일 보내기
$('#mailsend').on("click", function() {
	send()
})

function send() {
	let recv_userId = $('#recv_userId').val()
	let send_userId = $('#send_userId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()

	data = {
		'recv_userId': recv_userId,
		'send_userId': send_userId,
		'n_title': n_title,
		'n_message': n_message
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				alert("메일을 성공적으로 보냈습니다.")
			} else {
				alert("메일 전송 실패")
			}

		}
	})


}
