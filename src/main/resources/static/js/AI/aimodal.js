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

//스킵하기
$('#liveBroadCastSkip').on('click', function() {

	clearInterval(playShow)
	$('.center-box2').empty()
	$('.left-box2').empty()
	$('#two').html('')

	document.querySelector(".progress-bar").style.width = 100 + "%";
	$('#two').html('게임종료')

	for (let i in timelinelist) {
		html2 = timelinelist[i].now_time
		championName = timelinelist[i].championName
		championName1 = timelinelist[i].victim_championName
		champion_name_kr = timelinelist[i].champion_name_kr
		victim_kr = timelinelist[i].victim

		img = "<img width = 30 height = 30 onerror=this.src='/img/object/" + championName + ".png' src = https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName + ".png" + " >"
		img1 = "<img width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png" + " >"

		html3 = `<div class = showImgDiv id = showImg${i} >
				 	<div class = showImgDivl> 
				 		<div class = showImgDivll>
				 			${html2} 
				 		</div>
				 		<div class = showImgDivlr> 
				 		 <span tooltip= ${champion_name_kr}> <a href = "#"> ${img} </a></span><span style= "color : blue">(킬)</span> -> <span tooltip=${victim_kr}><a href = "#">${img1}</a></span></div>
						</div>
					 <div class = showImgDivr></div>
				</div>`
		$('.center-box2').prepend(html3)

	}


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
			$('#liveBroadCast').show()
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
/// 바를 눌렀을때 오른쪽에 색깔 나오면서 포커싱하는 메소드
let id = ''
let a = ''
const progressBar = document.querySelector('.progress-container');
progressBar.addEventListener('click', (e) => {
	if (a != '') {
		$('#' + id).css("background-color", "")
		clearInterval(playBackGroundColor);
		console.log("시작할때 색제거")
	}
	//오른쪽 포커스
	
	progressPercent = (e.offsetX / 500) //500은 그림 픽셀
	console.log(e.offsetX )
	len = timeline_list[0].length
	document.querySelector(".progress-bar").style.width =  progressPercent * 100 + "%";
	i = parseInt(len * progressPercent)
	id = 'showImg' + i
	document.getElementById(id).scrollIntoView();
	
	$('#' + id).css("background-color", "rgba(100, 170, 253, 1)")
	a = 1
	let checkPlayBackGroundColor = 0
	playBackGroundColor = setInterval(function() {
		if (a > 0) {
			a -= 0.05;
			$('#' + id).css("background-color", "rgba(100, 170, 253, " + a + ")")

			if (a <= 0) {
				checkPlayBackGroundColor = 1
				$('#' + id).css("background-color", "")
			}
		}
		if (checkPlayBackGroundColor == 1) {
			a = 0
			checkPlayBackGroundColor = 0
			console.log("색변경 완료")
			clearInterval(playBackGroundColor);

		}
	}, 50);

	//왼쪽 킬 표시 만들기
	championName = timelinelist[i].championName
	championName1 = timelinelist[i].victim_championName

	img = "<img width = 30 height = 30 onerror=this.src='/img/object/" + championName + ".png' src = https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName + ".png" + " >"
	img1 = "<img width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png" + " >"

	html1 = img + '<span style= "color : skyblue">(킬)</span> -> <span style= "color : red">' + img1 + '</span>'

	x = timelinelist[i].x
	y = timelinelist[i].y

	x1 = x * 500
	y1 = y * 500
	$("#one").css({
		left: x1 - 5,
		top: 505 - y1
	})

	$("#two").css({
		left: x1 - 80,
		top: 470 - y1
	})
	$('#two').hide(0)
	$('#two').html(html1)
	$('#two').show(150)
	
});
///////////////////////////////////
