//테이블 클릭후 모달내용구문//
// 듀오 채팅 신청구문 //
$('#duoParty').on("click", function() {

	let roomNum = $('#roomNum').val()
	let userId = $('#userId').val() //로그인한사람
	let hostId = $('#hostId').val() //작성자
	let temp1 = {}
	temp1.work = "createQuestion"
	temp1.hostId = hostId
	temp1.guestId = userId
	temp1.roomNum = roomNum

	if (userId == '') {

		$('#flagcollapse').html("<font color='red'>회원전용입니다. 로그인 부탁드립니다.</font>")
		return false
	} else if (hostId == '비회원') {
		$('#flagcollapse').html("<font color='red'>비회원이 올린 게시물은 쪽지로만 대화가 가능합니다.</font>")
		return false
	}

	$('#flagcollapse').html("<font color='blue'><marquee scrollamount=5>상대방에게 듀오 요청중입니다. 잠시만 기다려주세요</marquee></font>")
	$('#duoParty').hide();
	$('#duoPartyCancel').show();
	$('.flagA').hide();

	//상대방에게 허락구문
	let temp = JSON.stringify(temp1)

	ws.send(temp)



})
//승낙시
function connect() { //승낙 >> 방만들기

	let userId = $('#userId').val()
	let roomNum = $('#dcntflag').val()
	let hostId = $('#hostId').val()
	data = {
		'roomNum': roomNum,
		'hostId': hostId,
		'guestId': userId,
		'work': 'connectRoom'
	}

	let temp = JSON.stringify(data)
	ws.send(temp)//자바에서 채팅방 db 만들고 해당게시글 삭제

}
//거절시
function disconnect() {
	let res = {}
	res.work = "reject"

	let temp = JSON.stringify(res)

	ws.send(temp)

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

		}
	})
	//		console.log(rcnt)


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
////////////////////////////////////////////////////////////////////
// 전송된 채팅 db에 저장시키기
function send() {
	rcnt = getId('rcnt').value;
	console.log(rcnt)
	let userId = getId('userId').value;
	let msg = document.getElementById('msg').value;
	let date = new Date().toLocaleString();

	if (msg.trim() != '') {

		res = {
			'rcnt': rcnt,
			'userId': userId,
			'msg': msg,
			'date': date,
			'work': "sendMsg"
		}
		//json형태로 변환하여 java로 통신
		let temp = JSON.stringify(res)
		ws.send(temp)

	} else {
		alert("내용이 없습니다.")
	}
}

//채팅 작성 시 
function chattcontents(data) { //저장한 채팅과 같은방에서 실행
	let userId = $('#userId').val()
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
////////////////////////////////////////////////////////////////

// 듀오채팅 요청 승낙/거절 구문
function createQuestion(eventjson) {

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

//본인이 본인방 들어가는 경우
function myRoom(rcnt) {

	webstart(rcnt)
	open()
	$('#chatt').show();
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
				}
			})
			if (res1.hostId == '' || res1.guestId == '') {
				console.log(res1.hostId)
				console.log(res1.guestId)

				$("#msg").attr("disabled", true);
				$("#msg").css("background-color", "gray");
				$('#talk').append("</br>상대방이 나갔습니다.");
			} else {
				$("#msg").css("background-color", "white");
				$("#msg").attr("disabled", false);
			}

			$('.chatthead').empty()

			$('.chatthead').append("듀오채팅     [" + rcnt + "번방]")
		}
	})


}
function goOutRoom(roomNum) {

	data = { 'roomNum': roomNum }

	if (confirm(roomNum + '번방에서 떠난 후에는 재입장이 불가능합니다. 정말 나가시겠습니까?')) {
		$.ajax({

			type: 'post',
			url: '/goOutRoom',
			data: data,
			success: function(res) {
				showChattInfo()
				close()
				alert("채팅방에서 나오셨습니다.")
			}
		})

	} else {

	}

}
