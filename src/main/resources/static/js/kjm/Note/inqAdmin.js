
userId_list = []

//메일 보내기
$('#sendAll').on("click", function() {
	send()
})

function send() {
	userId_list = []
	$.ajax({

		type: 'post',
		url: '/memberload',


		success: function(res) {
			console.log(res)
			let str = ''
			for (let i in res) {
				userId_list.push(res[i].userId)
			}



			// 입력 필드가 비어 있는지 검사
			if (!n_title || !n_message) {
				alert("메일 전송 실패");
				return;
			}
			for (let i in userId_list) {
				aaa(userId_list[i])
			}

		}
	})

}
function aaa(userId) {

	let send_userId = $('#send_userId').val()
	let n_title = $('#n_title').val()
	let n_message = $('#n_message').val()
	
	data = {
		//		'recv_userIds': recv_userIds,
		'recv_userId': userId,
		'send_userId': send_userId,
		'n_title': n_title,
		'n_message': n_message,
	}

	$.ajax({

		type: 'post',
		url: '/mailsend',
		data: data,
		success: function(res) {
			console.log(res)

			if (res == 1) {
				console.log(userId+"님께 메일을 성공적으로 보냈습니다.")
			} else {
				alert("메일 전송 실패")
			}

		}
	})
}

