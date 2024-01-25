/**
 * 
 */


$('#duoParty').on("click", function() {
	let userId = $('#userIdcheck').val() //로그인한사람
	let friendId = $('#writter').val() //작성자

	if (userId == '') {

		$('#flagcollapse').html("<font color='red'>회원전용입니다. 로그인 부탁드립니다.</font>")
		return false
	} else if (friendId == '비회원') {
		$('#flagcollapse').html("<font color='red'>비회원이 올린 게시물은 쪽지로만 대화가 가능합니다.</font>")
		return false
	}

	data = { "friendId": friendId }

	$.ajax({

		type: 'post',
		url: '/nowlogin',
		data: data,
		success: function(res) {

			console.log(res)
			if (res != 1) {
				$('#flagcollapse').html("<font color='red'>접속중이 아닙니다.</font>")

			} else {
				$('#flagcollapse').html("<font color='blue'><marquee scrollamount=5>상대방에게 듀오 요청중입니다. 잠시만 기다려주세요</marquee></font>")
				$('#duoParty').hide();	
				$('#duoPartyCancel').show();
			}

		}
	})


})

$('#duoPartyCancel').on("click", function() {


	$('#duoParty').show();
	$('#duoPartyCancel').hide();
	$('#flagcollapse').html('=================')



})
function openTab(evt, tabName) {
	var i, tabcontent, tablink;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablink = document.getElementsByClassName("tablink");
	for (i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}


function searchLol() {
	$('#aaa').empty()
	$('.startSearch').fadeOut(700, 'linear');


	setTimeout(() => $('#aaa').append("kda : "), 1000);
	setTimeout(() => $('#aaa').append("3.22</br>"), 1500);
	setTimeout(() => $('#aaa').append("라인 :"), 2500);
	setTimeout(() => $('#aaa').append("정글</br>"), 3000);
	setTimeout(() => $('#aaa').append("캐릭터 :"), 4000);
	setTimeout(() => $('#aaa').append("비에고</br>"), 4500);
	setTimeout(() => $('#aaa').append("딜량 :"), 5500);
	setTimeout(() => $('#aaa').append("11,511</br>"), 6000);
	setTimeout(() => $('#aaa').append("종합평가 :"), 7000);
	setTimeout(() => $('#aaa').append("A"), 7500);

}

function maketable() {



}
