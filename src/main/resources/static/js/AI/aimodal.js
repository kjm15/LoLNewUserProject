/**
 * 
 */

///////////////////////////////모달/////////////////////////////////////

const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {
	clearInterval(playShow)
	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}


$('#liveBroadCast').on('click', function() {

	clearInterval(playShow)


})
function open() {

	$('#two').html('')
	x1 = 0
	y1 = 500
	$("#two").css({
		left: x1 - 133,
		top: 480 - y1
	})

	$("#one").css({
		left: x1 - 5,
		top: 505 - y1
	})
	$('.wrap').show();
	$('.center-box2').empty()
	$('.left-box2').empty()

	

	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')

	let x = 500
	let i = 0 //올라가는값
	
	len = timeline_list[0].length

	playShow = setInterval(function() {
		if (i < len) {
			showInfoTimeLine(i) 
			document.querySelector(".progress-bar").style.width = i / len * 100 + "%";
			i += 1;

		} else if (i == len) {
			document.querySelector(".progress-bar").style.width = 100 + "%";
			$('#two').html('게임종료')
		} else {

			clearInterval(playShow);
			$('#liveBroadCast').show(1000)
			console.log("종료")
		}

	}, x);


}


window.addEventListener('click', (e) => {
	//	console.log(e.target)

	e.target === modal_background ? close() : false
	if (e.target.className === 'btn btn-secondary dropdown-toggle show') {

		close()
	}

})