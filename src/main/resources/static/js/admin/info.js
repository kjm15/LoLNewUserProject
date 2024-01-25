

$('#sendMember').on("click", function() {

	console.log("회원")
	let userId = $('#userId').val()

	data = { 'userId': userId }
	
	$.ajax({
		type: 'post',
		url: '/infoAll',

		success: function(res) {

		}, error: function(error) {
			console.log("에러")

		}
	})

})












