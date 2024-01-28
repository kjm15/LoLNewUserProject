
function getId(id) {
	return document.getElementById(id);
}

var data = {};//전송 데이터(JSON)

var mid = getId('mid');
var mpw = getId('mpw');
var btnLogin = getId('btnLogin');
var btnSend = getId('btnSend');
var talk = getId('talk');
var msg = getId('msg');
var toJoin = getId("join");
var logout = getId("logout");


//본인이 본인방 들어가는 경우
function myRoom(rcnt) {
	$('#talk').empty();
	$('#flagcollapse').hide();
	$('.wrap').hide();
	let userId = getId('userId').value;
	let temp = {};
	msgdata = { "roomNum": rcnt }
	$.ajax({

		type: 'post',
		url: '/myRoomCheck',
		data: msgdata,
		success: function(res1) {

			$.ajax({

				type: 'post',
				url: '/msgAll',
				data: msgdata,
				success: function(res) {
					console.log(res)
					for (let data of res) {

						rcnt = getId('dcntflag').value;
						userId = getId('userId').value;
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
					$('#talk').append("</br>----------------------  과거 메세지  ----------------------");

					temp.work = 'myRoom'
					temp.rcnt = rcnt

					temp.hostId = res1.hostId
					temp.guestId = res1.guestId
					console.log(temp)
					//			temp.writter = data.userId
					temp1 = JSON.stringify(temp)
					//			console.log(temp1)
					ws.send(temp1)

				}
			})

		}
	})


}


//승낙시 실행구문
function webstart(rcnt) {


	document.getElementById('rcnt').value = rcnt
	$('#talk').empty();
	$('#flagcollapse').hide();
	$('.wrap').hide();
	let guestId = $('#guestId').val()
	let userId = getId('userId').value;
	msgdata = { "rcnt": rcnt }
//	console.log(guestId)

	$.ajax({

		type: 'post',
		url: '/msgAll',
		data: msgdata,
		success: function(res) {
			for (let data of res) {

				rcnt = getId('dcntflag').value;
				userId = getId('userId').value;
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
			$('#talk').append("</br>----------------------  과거 메세지  ----------------------");

			$('.wrap').hide();

			let temp1 = {}
			temp1.contents = res
			temp1.work = 'connectRoom';
			temp1.hostId = userId
			temp1.guestId = guestId

			//			console.log(temp1)


			temp = JSON.stringify(temp1)

			ws.send(temp)


		}
	})
//		console.log(rcnt)
	deleteDuo(rcnt)

}


///////////////////채팅 내용 보내기///////////////////////
msg.onkeyup = function(ev) {
	if (ev.keyCode == 13) {//엔터 눌렀을때
		if (msg.value != '') {
			send();
		} else {
			alert("내용을 입력해주세요")
		}
	}
}
// 전송된 채팅 db에 저장시키기
function send() {
	rcnt = getId('rcnt').value;
	let userId = getId('userId').value;
	let msg = document.getElementById('msg').value;
	let date = new Date().toLocaleString();

//	console.log(msg.length)
	if (msg.trim() != '') {

		data = {
			'rcnt': rcnt,
			'userId': userId,
			'msg': msg,
			'date': date
		}

		$.ajax({

			type: 'post',
			url: '/msgSave',
			data: data,
			success: function(res) {
				console.log(res)

				res.work = "sendMsg"
				//				console.log(res)
				let temp = JSON.stringify(res)

				ws.send(temp)


			}
		})

	} else {

		alert("내용이 없습니다.")
	}


}
//채팅 작성 시 
function chattcontents(rcnt) { //저장한 채팅과 같은방에서 실행

	data = {
		"rcnt": rcnt,
	}
	$.ajax({

		type: 'post',
		url: '/msgRead',
		data: data,
		success: function(data) {
			//			console.log(data)
			let rcnt = getId('dcntflag').value;
			let userId = getId('userId').value;
			var css;
			if (data.userId == userId) { //작성자와 로그인한 사람이 같음
				css = ' class=me';
				userIdcheck = userId
			} else {
				css = ' class=other';
				userIdcheck = data.userId
			}

			var item = "<div " + css + "><span><b> " + userIdcheck + "</b></span>" + data.date + "<br/>"
				+ "<span>" + data.msg + "</span>	</div>"
			$('#talk').append(item);
			document.getElementById('msg').value = '';
			talk.scrollTop = talk.scrollHeight;//스크롤바 하단으로 이동
		}
	})

}

// 듀오 채팅 신청구문 //
$('#duoParty').on("click", function() {
	let rcnt = $('#rcnt').val()

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

	data = {
		"friendId": friendId,
		"dcnt": rcnt
	}

	$.ajax({

		type: 'post',
		url: '/nowlogin',
		data: data,
		success: function(res) {

			//			console.log(res)
			if (res == null || res == '') {
				$('#flagcollapse').html("<font color='red'>접속중이 아니거나 다른사람과 채팅중입니다.</font>")
				$('#flagcollapse').show();
			} else {
				//요청완료
				$('#flagcollapse').html("<font color='blue'><marquee scrollamount=5>상대방에게 듀오 요청중입니다. 잠시만 기다려주세요</marquee></font>")
				$('#duoParty').hide();
				$('#duoPartyCancel').show();
				$('.flagA').hide();

				//상대방에게 허락구문

				res.work = "createQuestion"
				//				console.log(res)
				let temp = JSON.stringify(res)

				ws.send(temp)
			}
		}
	})


})
// 듀오채팅 요청 승낙/거절 구문
function createQuestion(eventjson) {


	document.getElementById('guestId').value = eventjson.guestId

	let str = ''
	str += '<div class="question" class="duoPartyChatt" id="' + eventjson.roomNum + '">'

	str += '<div class="speech-bubble" class="a1">'
	str += '[' + eventjson.roomNum + '방 - ' + eventjson.guestId + '님의 듀오채팅 요청]'
	str += '<p>채팅방에 입장하시겠습니까?</p>'
	str += '<p>(승낙시 해당글은 삭제되어집니다.)</p>'

	str += '</div>'
	str += "<h3><input type='button' onclick='javascript:connect(" + eventjson.roomNum + ")' value='승낙' /></h3>"
	str += '<h3><input type="button" onclick="javascript:disconnect(' + eventjson.roomNum + ')" value="거절" /></h3>'

	str += '</div>'

	$('.accordion-box').prepend(str)

}
//승낙시
function connect(roomNum) {

	webstart(roomNum)//웹소켓 연결


}
//거절시
function disconnect(roomNum) {

	data = { 'roomNum': roomNum }
	$.ajax({

		type: 'post',
		url: '/deleteChatRoom',
		data: data,
		success: function(res) {

			res.work = "reject"
			//				console.log(res)
			let temp = JSON.stringify(res)

			ws.send(temp)

		}
	})

}

//탭 이동// 듀오찾기,전적검색
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

//전적검색 시 실행할 구문
function searchLol() {
	$('#aaa').empty()
	$('.startSearch').fadeOut(700, 'linear');

}
//////////////승낙구문////////////////////////
//$('#duoPartyChatY').on("click", function() {
//
//	console.log("aaa")
//
//
//})


