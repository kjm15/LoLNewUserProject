
function getId(id) {
	return document.getElementById(id);
}

var data = {};//전송 데이터(JSON)

var ws;
var mid = getId('mid');
var mpw = getId('mpw');
var btnLogin = getId('btnLogin');
var btnSend = getId('btnSend');
var talk = getId('talk');
var msg = getId('msg');
var toJoin = getId("join");
var logout = getId("logout");




function webstart() {
	$('#talk').empty();
	$('#flagcollapse').hide();
	let rcnt = getId('dcntflag').value;
	let userId = getId('userId').value;
	msgdata = { "rcnt": rcnt }
	if (ws == null || ws == '') {
		console.log("js-spring websocket connected")
		ws = new WebSocket("ws://" + location.host + "/jgh");

	}


	$.ajax({

		type: 'post',
		url: '/msgAll',
		data: msgdata,
		success: function(res) {
//			console.log(res)
			for (let data of res) {

				let rcnt = getId('dcntflag').value;
				let userId = getId('userId').value;
				var css;
				if (data.userId == userId) { //작성자와 로그인한 사람이 같음
					css = 'class=me';
					userIdcheck = userId
				} else {
					css = 'class=other';
					userIdcheck = data.userId
				}

				var item = "<div " + css + "><span><b> " + userIdcheck + "</b></span>" + data.date + "<br/>"
					+ "<span>" + data.msg + "</span>	</div>"
				$('#talk').append(item);
				talk.scrollTop = talk.scrollHeight;//스크롤바 하단으로 이동

			}

			data = res;
		}
	})

	ws.onmessage = function(msg) {

		$.ajax({

			type: 'post',
			url: '/msgRead',
			data: msgdata,
			success: function(res) {
				chattcontents(res)
			}
		})
	}
}


function chattcontents(data) {
	let rcnt = getId('dcntflag').value;
	let userId = getId('userId').value;
	var css;
	if (data.userId == userId) { //작성자와 로그인한 사람이 같음
		css = 'class=me';
		userIdcheck = userId
	} else {
		css = 'class=other';
		userIdcheck = data.userId
	}

	var item = "<div " + css + "><span><b> " + userIdcheck + "</b></span>" + data.date + "<br/>"
		+ "<span>" + data.msg + "</span>	</div>"
	$('#talk').append(item);
	talk.scrollTop = talk.scrollHeight;//스크롤바 하단으로 이동

}



msg.onkeyup = function(ev) {
	if (ev.keyCode == 13) {
		send();
	}
}

btnSend.onclick = function() {
	if (msg.value != '') {
		send();
	} else {
		alert("내용을 입력해주세요")
	}

}

function send() {

	if (msg.value.trim() != '') {
		data.rcnt = getId('dcntflag').value;
		data.userId = getId('userId').value;
		data.msg = msg.value;
		data.date = new Date().toLocaleString();
		//		console.log(data);

		msgdata = {
			"rcnt": data.rcnt,
			"userId": data.userId,
			"msg": data.msg
		}
		$.ajax({

			type: 'post',
			url: '/msgSave',
			data: msgdata,
			success: function(res) {

				var temp = JSON.stringify(data);
				ws.send(temp);
			}
		})

	}
	msg.value = '';

}


/////////////////////////////////////////////////////////////////

$('#duoParty').on("click", function() {

	let userId = $('#userId').val() //로그인한사람
	let friendId = $('#writter').val() //작성자

	//	let cnt = $()
	document.getElementById('mid').value = userId;
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

			//			console.log(res)
			if (res != 1) {
				$('#flagcollapse').html("<font color='red'>접속중이 아닙니다.</font>")
				$('#flagcollapse').show();
			} else {
				//요청완료
				$('#flagcollapse').html("<font color='blue'><marquee scrollamount=5>상대방에게 듀오 요청중입니다. 잠시만 기다려주세요</marquee></font>")
				$('#duoParty').hide();
				$('#duoPartyCancel').show();
				$('.flagA').hide();

				//상대방에게 허락구문


				getAgreejoinRoom()
				//채팅 실행 구문
				webstart()//웹소켓 연결
				$('#chatt').show();
			}


		}
	})


})


function getAgreejoinRoom() {
	//	let rcnt = getId('dcntflag').value;
	//	let userId = getId('userId').value;
	//	let friendId = $('#writter').val() //작성자
	//	msgdata = { "rcnt": rcnt }
	alert("상대방 승낙 구문 만들기")

}










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

}




