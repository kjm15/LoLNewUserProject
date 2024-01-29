
///////////////////////////////모달/////////////////////////////////////
const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	$('.accordion-box').empty()
	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	$('.wrap').show();
	$('#flagcollapse').show();
	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {
	//	console.log(e.target)

	e.target === modal_background ? close() : false
	if (e.target.className === 'btn btn-secondary dropdown-toggle show') {

		close()
	}

})
document.querySelector('#modal_wrap').addEventListener('click', (e) => {

	//테이블의 tr행이 몇번째 행인지 알게 해주는 구문
	const rowIndex = e.target.closest("tr").rowIndex;
	var table = document.getElementById("modal_wrap")
	var tr = table.getElementsByTagName("tr");
	let roomNum = tr[rowIndex].getElementsByTagName("td")[0].innerHTML
	let hostId = tr[rowIndex].getElementsByTagName("td")[1].innerHTML
	document.getElementById('hostId').value = hostId;
	//dcnt를 통해서 정보를 가지고옴

	document.getElementById('roomNum').value = roomNum;

	duoinfo(roomNum)

	open()

})

$('.modal_close').on("click", function() {
	close()
})

/////////////////////////모달 값 넣기///////////////

function duoinfo(roomNum) {

	$('.startSearch').show();
	$('#aaa').empty()
	$('.flagA').show();
	$('#chatt').hide();

	data = { 'dcnt': roomNum }

	$.ajax({

		type: 'post',
		url: '/duoInfo',
		data: data,
		success: function(res) {

			$('#duoParty').show();
			$('#duoPartyCancel').hide();
			$('#flagcollapse').html('=================')

			let dcnt = res.dcnt
			let date = res.date

			let duoPosition = "<font color= blue>" + res.duoPosition + "</font>"
			let myPosition = res.myPosition
			let memo = "<font color= blue>" + res.memo + "</font>"
			let userId = res.userId
			if (userId == '비회원') {

				userId = "<font color= red>" + '비회원' + "</font>"

			} else {
				userId = "<font color= blue>" + res.userId + "</font>"
			}

			let tier = "<font color= #a014a0>" + res.tier + "</font>"

			$('#dcntM').html(dcnt)
			$('#userIdM').html(userId)
			$('#myPositionM').html(myPosition)
			$('#tierM').html(tier)
			$('#duoPositionM').html(duoPosition)
			$('#memoM').html(memo)
			$('#date').html(date)

			let hostId = $('#hostId').val()
			if (hostId == userId) {
				$("#duoParty").hide();
			} else {
				$("#duoParty").show();
			}

		}, error: function(error) {
			console.log("모달 값넣기 에러")
		}
	})

}
