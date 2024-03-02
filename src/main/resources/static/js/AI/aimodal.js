/**
 * 
 */

///////////////////////////////모달/////////////////////////////////////

const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')
$('#replayStart').on('click', function() {
	$('.center-box2').empty()
	liveReplay()
})

//스킵하기
$('#liveBroadCastSkip').on('click', function() {
	skip()
})
function skip() {
	if (liveStart == 1) {
		clearInterval(playShow);

	}

	$('#one').hide()
	$('#two').hide()
	if (removeList.length != 0) {

		for (let i in removeList) {

			$("." + removeList[i]).remove()
		}

	}

	$('.center-box2').empty()
	$('.blueTeamSider').empty()
	$('.redTeamSider').empty()
	$('#one').empty()
	$('#two').empty()

	document.querySelector(".progress-bar").style.width = 100 + "%";
	$('#two').html('게임종료')
	$('.center-box2').prepend("<center><strong>==========Game Start==========</strong></center>")
	timelinelist = timeline_list[0]
	blueList = []
	blueList_kr = []
	redList = []
	redList_kr = []
	for (let i in timelinelist) {
		html2 = timelinelist[i].now_time
		//
		championName1 = timelinelist[i].championName
		championName1_kr = timelinelist[i].champion_name_kr
		team1 = timelinelist[i].team1
		border1 = ''
		//
		championName2 = timelinelist[i].victim_championName
		championName2_kr = timelinelist[i].victim_championName_kr
		team2 = timelinelist[i].team2
		border2 = ''
		//
		if (team1 == 100) {
			blueList_kr.push(championName1_kr)
			blueList.push(championName1)
			border1 = ' style="border:2px solid; border-color:blue; border-radius: 50%;"  '
		} else if (team1 == 200) {
			redList_kr.push(championName1_kr)
			redList.push(championName1)
			border1 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

		} else {

			border1 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

		}
		if (team2 == 100) {
			blueList_kr.push(championName2_kr)
			blueList.push(championName2)
			border2 = ' style="border:2px solid; border-color:blue; border-radius: 50%;" '

		} else if (team2 == 200) {
			redList_kr.push(championName2_kr)
			redList.push(championName2)
			border2 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

		} else {

			border2 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

		}



		img1 = "<img " + border1 + " width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png' >"
		img2 = "<img " + border2 + "width = 30 height = 30 onerror=this.src='/img/object/" + championName2 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName2 + ".png' >"

		html3 = `<div class = showImgDiv id = showImg${i} >
				 	<div class = showImgDivl> 
				 		<div class = showImgDivll>
				 			${html2} 
				 		</div>
				 		<div class = showImgDivlr> 
				 		 <span tooltip= ${championName1_kr}> <a href = "javascript:inputTimeToImg(\'${html2}\',\'${championName1}\')"> ${img1} </a></span><span style= "color : blue">	</span> -> <span tooltip=${championName2_kr}><a href = "javascript:inputTimeToImg(\'${html2}\',\'${championName2}\')">${img2}</a></span></div>
						</div>
					 <div class = showImgDivr></div>
				</div>`
		$('.center-box2').prepend(html3)

	}
	$('.center-box2').prepend("<p></p>	")
	$('.center-box2').prepend("<center><strong>==========Game Set==========</strong></center>")

	const blueListSet = new Set(blueList);
	const redListSet = new Set(redList);
	let bList = Array.from(blueListSet)
	let rList = Array.from(redListSet)
	const blueListSet_kr = new Set(blueList_kr);
	const redListSet_kr = new Set(redList_kr);
	let bList_kr = Array.from(blueListSet_kr)
	let rList_kr = Array.from(redListSet_kr)


	//	console.log(bList_kr)
	//	console.log(rList_kr)
	for (let i in bList) {
		$('.blueTeamSider').append(inputImg(bList[i], bList_kr[i], 100) + "&nbsp;")
		$('.redTeamSider').append(inputImg(rList[i], rList_kr[i], 200) + "&nbsp;")
		//		console.log(inputImg(bList[i]))
	}


}


////////////////////////////////////////////////////////////////
function inputTimeToImg(nowTime, champName) {
	timelinelist = timeline_list[0]
	console.log("만드는중")
	for (let i in timelinelist) {
		//			console.log(timelinelist[i])
		if (timelinelist[i].now_time == nowTime && timelinelist[i].championName == champName) {
			console.log(nowTime)
			championName1 = timelinelist[i].championName
			championName1_kr = timelinelist[i].champion_name_kr
			team1 = timelinelist[i].team1
			border1 = ''
			//
			championName2 = timelinelist[i].victim_championName
			championName2_kr = timelinelist[i].victim_championName_kr
			team2 = timelinelist[i].team2
			border2 = ''
			//
			if (team1 == 100) {

				border1 = ' style="border:2px solid; border-color:blue; border-radius: 50%;"  '
			} else if (team1 == 200) {

				border1 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

			} else {

				border1 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

			}
			if (team2 == 100) {

				border2 = ' style="border:2px solid; border-color:blue; border-radius: 50%;" '

			} else if (team2 == 200) {

				border2 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

			} else {

				border2 = ' style="border:2px solid; border-color:green; border-radius: 50%;	" '

			}

			img1 = "<img  " + border1 + " width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png' >"
			img2 = "<img " + border2 + "width = 30 height = 30 onerror=this.src='/img/object/" + championName2 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName2 + ".png' >"

			html1 =img1 + ' <span  style="color:white"> -></span>' + img2


			x = timelinelist[i].x
			y = timelinelist[i].y

			x1 = x * 500
			y1 = y * 500
			$("#one").css({
				left: x1 - 5,
				top: 505 - y1
			})

			$(".two").css({
				left: x1 - 45,
				top: 470 - y1
			})
			$('#two').hide(0)
			$('.two').html(html1)
			$('#two').show(150)

		}


	}
}
function inputImg(a, b, c) {

	listImg = ` <span tooltip= '${b}'>
					<a href = javascript:imgClick(${c},\'${a}\')>
						<img style='border:2px solid; border-color:black; border-radius: 50%;' width = 30 height = 30 src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${a}.png' >
					</a>
				</span>`
	return listImg

}
//////////////////////////////////////
function open() {

	$('#two').html('')
	$('#two').hide()
	
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


	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}
////////////////////////////////
function close() {
	if (removeList.length != 0) {

		for (let i in removeList) {

			$("." + removeList[i]).remove()
		}

	}
	$('.redTeamSider').empty()
	$('.blueTeamSider').empty()
	$('#two').html('')
	$('.center-box2').empty()
	if (liveStart == 1) {
		clearInterval(playShow);

	}

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
////////////////////////////////////////////////////////////
function liveReplay() {
	liveStart = 1
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
/////////////////////////////////////////////////////////////
window.addEventListener('click', (e) => {
	//	console.log(e.target)

	e.target === modal_background ? close() : false
	if (e.target.className === 'btn btn-secondary dropdown-toggle show') {

		close()
	}

})
////////////////////////////////////////////////////////// 바 클릭
let id = ''
let a = ''
const progressBar = document.querySelector('.progress-container');
progressBar.addEventListener('click', (e) => {
	$('#one').show()
	$('#two').show()

	if (removeList.length != 0) {
		skip()
		for (let i in removeList) {

			$("." + removeList[i]).remove()
		}

	}
	if (a != '') {
		$('#' + id).css("background-color", "")
		clearInterval(playBackGroundColor);
		console.log("시작할때 색제거")
	}
	//오른쪽 포커스

	progressPercent = (e.offsetX / 500) //500은 그림 픽셀
	console.log(e.offsetX)
	len = timeline_list[0].length
	document.querySelector(".progress-bar").style.width = progressPercent * 100 + "%";
	i = parseInt(len * progressPercent)
	id = 'showImg' + i
	console.log(id)
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
	championName1 = timelinelist[i].championName
	championName1_kr = timelinelist[i].champion_name_kr
	team1 = timelinelist[i].team1
	border1 = ''
	//
	championName2 = timelinelist[i].victim_championName
	championName2_kr = timelinelist[i].victim_championName_kr
	team2 = timelinelist[i].team2
	border2 = ''
	//
	if (team1 == 100) {

		border1 = ' style="border:2px solid; border-color:blue; border-radius: 50%;"  '
	} else if (team1 == 200) {

		border1 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

	} else {

		border1 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

	}
	if (team2 == 100) {

		border2 = ' style="border:2px solid; border-color:blue; border-radius: 50%;" '

	} else if (team2 == 200) {

		border2 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

	} else {

		border2 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

	}

	img1 = "<img " + border1 + " width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png' >"
	img2 = "<img " + border2 + "width = 30 height = 30 onerror=this.src='/img/object/" + championName2 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName2 + ".png' >"

	html1 = img1 + ' ->' + img2
	x = timelinelist[i].x
	y = timelinelist[i].y

	x1 = x * 500
	y1 = y * 500
	$("#one").css({
		left: x1 - 5,
		top: 505 - y1
	})

	$("#two").css({
		left: x1 - 45,
		top: 470 - y1
	})
	$('#two').hide(0)
	$('#two').html(html1)
	$('#two').show(150)

});

///////////////////////////////////////사진 클릭시 실행되는 함수
removeList = []
function imgClick(team, champName) {
	$('#one').hide()
	$('#two').hide()
	if (removeList.length != 0) {

		for (let i in removeList) {

			$("." + removeList[i]).remove()
		}

	}
	//	console.log("사진클릭")
	$('.center-box2').empty()
	$('.center-box2').prepend("<center><strong>==========Game Start==========</strong></center>")

	for (let i in timelinelist) {

		if (timelinelist[i].championName == champName && timelinelist[i].team1 == team) {

			html2 = timelinelist[i].now_time
			//
			championName1 = timelinelist[i].championName
			championName1_kr = timelinelist[i].champion_name_kr
			team1 = timelinelist[i].team1
			border1 = ''
			//
			championName2 = timelinelist[i].victim_championName
			championName2_kr = timelinelist[i].victim_championName_kr
			team2 = timelinelist[i].team2
			border2 = ''
			//
			if (team1 == 100) {
				blueList_kr.push(championName1_kr)
				blueList.push(championName1)
				border1 = ' style="border:2px solid; border-color:blue; border-radius: 50%;"  '
			} else if (team1 == 200) {
				redList_kr.push(championName1_kr)
				redList.push(championName1)
				border1 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

			} else {

				border1 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

			}
			if (team2 == 100) {
				blueList_kr.push(championName2_kr)
				blueList.push(championName2)
				border2 = ' style="border:2px solid; border-color:blue; border-radius: 50%;" '

			} else if (team2 == 200) {
				redList_kr.push(championName2_kr)
				redList.push(championName2)
				border2 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

			} else {

				border2 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

			}

			console.log("클릭중")

			img1 = "<img " + border1 + " width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png' >"
			img2 = "<img " + border2 + "width = 30 height = 30 onerror=this.src='/img/object/" + championName2 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName2 + ".png' >"

			html3 = `<div class = showImgDiv id = showImg${i} >
				 	<div class = showImgDivl> 
				 		<div class = showImgDivll>
				 			${html2} 
				 		</div>
				 		<div class = showImgDivlr> 
				 		 <span tooltip= ${championName1_kr}> <a href="javascript:inputTimeToImg(\'${html2}\',\'${championName1}\');"> ${img1} </a></span>-> <span tooltip=${championName2_kr}> <a href="javascript:inputTimeToImg(\'${html2}\',\'${championName2}\');">${img2}</a></span></div>
						</div>
					 <div class = showImgDivr></div>
				</div>`
			$('.center-box2').prepend(html3)

			html1 = img1 + ' ->' + img2
			x = timelinelist[i].x
			y = timelinelist[i].y

			x1 = x * 500
			y1 = y * 500

			x2 = x1 - 45
			y2 = 470 - y1
			style = `style = "left: ${x2}px; top: ${y2}px; border: white;
							color: white;
							position: absolute;
//							background-color: rgba(0, 0, 0, 0.85);
							width: 100px;
							height": 35px;
							z-index": 6;"
			
					`
			html5 = '<div class = "two' + i + '"' + style + '>' + html1 + '</div>'
			$('.ltop-box').append(html5)
			removeList.push("two" + i)
		}
	}

	//	console.log(team, champName)
	$('.center-box2').prepend("<p></p>	")
	$('.center-box2').prepend("<center><strong>==========Game Set==========</strong></center>")
}


/////////////////////////////////라이브시스템 시작
let liveStart = 0
function showInfoTimeLine(i) {

	if (removeList.length != 0) {

		for (let i in removeList) {

			$("." + removeList[i]).remove()
		}

	}
	$('.redTeamSider').empty()
	$('.blueTeamSider').empty()
	$('#two').html('')

	img = ''
	//	console.log(i)
	timelinelist = timeline_list[0]
	//	html1 = img1 + ' ->' + img2


	html2 = timelinelist[i].now_time
	//
	championName1 = timelinelist[i].championName
	championName1_kr = timelinelist[i].champion_name_kr
	team1 = timelinelist[i].team1
	border1 = ''
	//
	championName2 = timelinelist[i].victim_championName
	championName2_kr = timelinelist[i].victim_championName_kr
	team2 = timelinelist[i].team2
	border2 = ''
	//
	if (team1 == 100) {

		border1 = ' style="border:2px solid; border-color:blue; border-radius: 50%;"  '
	} else if (team1 == 200) {

		border1 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

	} else {

		border1 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

	}
	if (team2 == 100) {

		border2 = ' style="border:2px solid; border-color:blue; border-radius: 50%;" '

	} else if (team2 == 200) {

		border2 = ' style="border:2px solid; border-color:red; border-radius: 50%;" '

	} else {

		border2 = ' style="border:2px solid; border-color:green; border-radius: 50%;" '

	}

	img1 = "<img " + border1 + " width = 30 height = 30 onerror=this.src='/img/object/" + championName1 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName1 + ".png' >"
	img2 = "<img " + border2 + "width = 30 height = 30 onerror=this.src='/img/object/" + championName2 + ".png' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + championName2 + ".png' >"

	html3 = `<div class = showImgDiv id = showImg${i} >
				 	<div class = showImgDivl> 
				 		<div class = showImgDivll>
				 			${html2} 
				 		</div>
				 		<div class = showImgDivlr> 
				 		 <span tooltip= ${championName1_kr}>${img1}</span> -> <span tooltip=${championName2_kr}>${img2}</span></div>
						</div>
					 <div class = showImgDivr></div>
				</div>`
	$('.center-box2').prepend(html3)

	html1 = img1 + ' ->' + img2
	x = timelinelist[i].x
	y = timelinelist[i].y

	x1 = x * 500
	y1 = y * 500
	$("#one").css({
		left: x1 - 5,
		top: 505 - y1
	})

	$("#two").css({
		left: x1 - 45,
		top: 470 - y1
	})
	$('#two').hide()
	$('#two').html(html1)
	$('#two').show(100)
}

