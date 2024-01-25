//메일 보내기
$('#mailsend').on("click", function() {
	send()
})

function send() {
	let userId = $('#userId').val()
	let sendId = $('#sendId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()
	console.log(n_message);

	data = {
		'userId': userId,
		'sendId': sendId,
		'n_title': n_title,
		'n_message' : n_message
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			alert("메일을 성공적으로 보냈습니다.")
		}
	})


}

