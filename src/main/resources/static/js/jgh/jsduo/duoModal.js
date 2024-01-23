
///////////////////////////////모달/////////////////////////////////////
const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {

	e.target === modal_background ? close() : false

})
document.querySelector('#modal_wrap').addEventListener('click', (e) => {
	const rowIndex = e.target.closest("tr").rowIndex;
//	var index = select.rowIndex;

	open()
	var table = document.getElementById("modal_wrap")
	var tr = table.getElementsByTagName("tr");
	let cnt  = tr[rowIndex].getElementsByTagName("td")[0].innerHTML
	console.log(cnt)


})

$('.modal_close').on("click", function() {
	close()

})

/////////////////////////모달 값 넣기///////////////

function duoinfo(dcnt) {

	data = { 'dcnt': dcnt }
	//	console.log(a)
	$.ajax({

		type: 'post',
		url: '/duoInfo',
		data: data,
		success: function(res) {
			//			console.log(res)
			let dcnt = res.dcnt
			let date = res.date
			//			let dcnt = res.date
			let duoPosition = res.duoPosition
			let myPosition = res.myPosition
			let memo = res.memo
			let userId = res.userId
			let winLose = res.winLose
			let tier = res.tier
			$('#dcntM').html(dcnt)
			$('#duoPositionM').html(duoPosition)
			$('#myPositionM').html(myPosition)
			$('#userIdM').html(userId)
			$('#memoM').html(memo)
			$('#date').html(date)
			$('#tierM').html(tier)
			//			$('#duoModalBody').html(res)
		}, error: function(error) {
			console.log("에러")
		}
	})

}

