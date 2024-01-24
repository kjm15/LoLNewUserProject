/**
 * 
 */


$('#duoParty').on("click", function() {
	let userId = $('#userIdcheck').val() //로그인한사람
	let friendId = $('#writter').val() //작성자

	if (userId == '') {

		alert("회원전용입니다. 로그인 부탁드립니다.")
		return false
	}else if(friendId == '비회원'){
		
		alert("비회원이 올린 게시물은 쪽지로만 대화가 가능합니다.")
		friendId
	}

	data = { "friendId": friendId }

	$.ajax({

		type: 'post',
		url: '/nowlogin',
		data: data,
		success: function(res) {


			if (res != 1) {
				alert("접속중이 아닙니다.")
			} else {
				alert("상대방에게 듀오 요청중입니다. 잠시만 기다려주세요")

			}


		}
	})


})
