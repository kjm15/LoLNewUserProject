

$('#sendAll').on("click", function() {

	console.log("회원")
	let infoAll = $('#infoAll').val()
	data = { 'infoAll': infoAll }

	$.ajax({
		type: 'post',
		url: '/infoAll',
		data : data,
		success: function(res) {

		}, error: function(error) {
			console.log("에러")

		}
	})

})



function memberInfo() {
	console.log("통과")


	alert(infoMember)

}











