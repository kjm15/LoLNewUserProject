/**
 * 
 */
function duoSearch() {


	console.log("누름")

}

$('#duoSearchBtn').on("click", function() {

	let userId = $('#userId').val()
	let myPosition = $('#position').val()
	let duoPosition = $('input[name=inlineRadioOptions]:checked').val()
	let tier = $('#tier').val()
	let gameType = $('#gameType').val()
	let memo = $('#textArea').val()

	if (myPosition == '' || duoPosition == '' || tier == '' || gameType == '' || textArea == '') {

		alert("빠진부분이 있습니다 확인해주세요")

		return false;
	}
	data = {
		'userId': userId,
		'myPosition': myPosition,
		'duoPosition': duoPosition,
		'tier': tier,
		'gameType': gameType,
		'memo': memo
	}

	$.ajax({

		type: 'post',
		url: '/saveDb',
		data: data,
		success: function(res) {	
			alert("등록중입니다.")
			console.log(res)
			//res 받으면 append 로 위로 가게 해서 뿌리기
			
			
			trs = "<tr>"
			tdwin = "<td>연승 개발중</td>"
			tduserId = "<td>"+res.userId+"</td>"
			tdmyPosition = "<td>"+res.myPosition+"</td>"
			tdduoPosition = "<td>"+res.duoPosition+"</td>"
			tdchamp = "<td>포지션 개발중</td>"
			tdlately = "<td>최근챔프 개발중</td>"			
			tdmemo = "<td>"+res.memo+"</td>"
			tddate = "<td>"+res.date+"</td>"
			
			tddiv = "<td><div class='dropdown'>"+
							"<button class='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>"+
							"..."+"</button>"+
							"<ul class='dropdown-menu'>"+
								"<li><a class='dropdown-item' href='#'>수정</a></li>"+
								"<li><a class='dropdown-item' href='#'>삭제</a></li>"+
							"</ul>"+
						"</div></td>"
			
			tre = "</tr>"
			
			
			makeHtml =  trs+tdwin+tduserId+tdmyPosition+tdduoPosition+tdchamp+tdlately+tdmemo+tddate+tddiv+tre
			
			$('.table-dark').append(makeHtml)
			
		},
	})

	$('#exampleModal').modal("hide");

})