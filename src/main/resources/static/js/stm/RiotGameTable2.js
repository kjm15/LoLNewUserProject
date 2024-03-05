function showgraph(win,lose) {
	var ctx = document.getElementById('donutChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ['승리', '패배'],
			datasets: [{
				//				label: '승리',
				data: [win, lose], // 승리와 패배 데이터
				backgroundColor: [
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(75, 192, 192, 1)',
					'rgba(255, 99, 132, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: false,
			legend: {
				position: 'bottom', // 범례 위치
			},
		}
	});
}

function profileCheck(res) {


	profileIcon = res.profileIcon
	summonerLevel = res.summonerLevel
	riotIdGameName = res.riotIdGameName
//	if (res['win'] == '1') {
//		win += 1
//	} else {
//		lose += 1
//	}



	if (data['matchCnt'] == 1) { //최신 레벨과 플레이어 아이콘을 위해 저장
		newprofileIcon = profileIcon
		newsummonerLevel = summonerLevel
		newriotIdGameName = riotIdGameName
	}

	ccc = `<div class=container333Box>
	<div class=container333>
	<div class="stmH">
            <div class="stmHright">
                <div class="cpicon">
                    <div class = "cpimg">
	<img width='85' height='85' alt='못 불러옴' style = "border-radius: 30px;"  src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/${newprofileIcon}.png>
                    </div></div>
                    <div class="uidLevelBox">
                <div class="ulevel">${newsummonerLevel} </div>
                </div>
            </div>
            <div class="uidBox">
                <div class="uid">${newriotIdGameName}</div>
                </div>
            <div class="stmHleft">
                <div class="u-chart"><canvas id="donutChart" width="160px" height="160px"></canvas></div>
            </div>
        </div>
        </div>
        <div class='stmBlank'></div>
        </div>`

	$('.graph1').append(ccc)




}


$('a.feellink').click(function(e) //a태그 눌러도 맨위로 안올라감
{
	e.preventDefault();
});

let ccc = ''
let win = 0
let lose = 0

let matchId = ''
let ingamespentTime = ''
let spentTime = ''
let queue = ''
let spendTime = '' //aaa
let win_lose = ''
let champimg = ''
let spellD = ''
let spellF = ''

let kills = ''
let deaths = ''
let assists = ''
let kda = ''
let wardscore = ''
let totalCs = ''
let mykill = ''

let dragon = ''
let str = ''
let str1 = ''

let itemstart = ''
let resMyList = []
let goBtn = 0

let myriotIdGameName = ''
let myriotIdTagline = ''
function showGameTamble(res, data) {

	$('.graph1').empty()
	resMyList = []
	for (let i in res) {
		for (let j in res[i]['info']) {
			if (data['gameName'] == res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']) {
				resMyList.push(res[i]["info"][j])
				myriotIdGameName = res[i]["info"][j]['riotIdGameName']
				myriotIdTagline = res[i]["info"][j]['riotIdTagline']
				if(res[i]['info'][j]['win']=='1'){
					win += 1
				}else{
					lose +=1
				}

			}
			
		}
	}


	//	console.log(resMyList)
	profileCheck(resMyList[0])
	showgraph(win,lose)
	for (let i in resMyList) {
		goBtn = Number(i) + (data['matchCnt']) * 4
		Myres = resMyList[i] // 추후에 i 으로 바꾸기


		timecheck(Myres)//몇시간전,몇분게임
		matchId = Myres.matchId
		queuecheck(Myres)
		win_losecheck(Myres)

		champimg = Myres.championName
		if (champimg == "FiddleSticks") {
			champimg = "Fiddlesticks"
		}
		spellD = Myres.summonerSpellD
		spellF = Myres.summonerSpellF
		kills = Myres.kills
		deaths = Myres.deaths
		assists = Myres.assists

		if (deaths == 0) {
			kda = (kills + assists) + 'perfect';
		} else {
			kda = (((kills + assists)) / deaths).toFixed(2)
		}
		wardscore = Myres.wardsKilled + Myres.wardsPlaced
		totalCs = Myres.totalMinionsKilled + Myres.totalAllyJungleMinionsKilled + Myres.totalEnemyJungleMinionsKilled

		mykill = (((kills + assists) / Myres.totalTeamkills) * 100).toFixed(0)



		if (Myres.win == 1) {

			str = `<div class="container1" id = '${matchId}container1' style='background-image:linear-gradient(315deg, #D6E5FC 0%, #BED8FE 74%) '>`
			str1 = `<div class='box-column' style='background-color:#75ABFD;width:10px;'></div>
								<div class="box-left" >
								<div><span class="queuety_tm" style='font-weight:bold;'>${queue}</span></div>
								<div><span class="stime-tm" style='font-size:13px'>${spentTime}</span></div>
								<div><span class="winlose-tm" style='color:blue;'>${win_lose}</span></div>
								<div><span class="igstime-tm" style='font-size:13px'>${ingamespentTime}</span></div>
								</div>`
			boxright = `<div class="box-right" style='background-color :#9ac2e2' id ="gamebtn${goBtn}" onclick ="gamebtn(${goBtn},'${matchId}')"><a href = 'javascript:;'><div class = "box-rightblue">∨</div></a></div>`
		} else {
			str = `<div class="container1" id ='${matchId}container1' style='background-image:linear-gradient(315deg, #FFD5F4 0%, #FFB3C8 74%)'>`
			str1 = `<div class='box-column' style='background-color:#FF5E8A;width:10px;'></div>
											<div class="box-left" >
											<div><span style='font-weight:bold;'>${queue}</span></div>
											<div><span style='font-size:13px'>${spentTime}</span></div>
											<div><span style='color:red;'>${win_lose}</span></div>
											<div><span style='font-size:13px'>${ingamespentTime}</span></div>
											</div>`
			boxright = `<div class="box-right" style='background-color : rgba(255, 2, 73, 0.18)' id ="gamebtn${goBtn}" onclick ="gamebtn(${goBtn},'${matchId}')"><a href = 'javascript:;'><div class = "box-rightred">∨</div></a></div>`

		}
		//		console.log(boxright)
		let boxcenter1 = `	<div class="box-center1">
								<div class="champSepll">
									<div class="box-center4" id = '${matchId}box-center4'></div>
									
									<div class="box-center44">
										<div class="spell1" id = '${matchId}spell1'></div>
										<div class="spell2" id = '${matchId}spell2'></div>
									</div>
									<div class="box-right4" style="font-size: 13px;" id = '${matchId}boxright4'>
									</div>
								</div>
								
								<div class="item">
									<div class="itemStart" id = '${matchId}itemStart'>
									</div>
								</div>
									
							</div>
							<div class="box-center2">
								<div class="box-center2up" id = '${matchId}center2up'></div>
								<div class="box-center2down"  id = '${matchId}'></div>
							</div>
							<div class="box-center3">
								<div class="blueChamp" id = '${matchId}blueChamp'></div>
								<div class="redChamp" id = '${matchId}redChamp'></div>
							</div>
								${boxright}
							</div>
							`
		//		line1 = `<div class="line1" id = 'line1${goBtn}' style='display: none'>`
		container2 = `<div class="container2" id = 'container2${matchId}' style = 'display: none' >`
		container4 = `<div class="container4" id = 'container4${matchId}' style = 'display: none' >`
		controller = `<div class = "controller" id = 'controller${matchId}'><div>`
		$('.containerXC').append(str)

		$('#' + matchId + 'container1').append(str1)
		$('#' + matchId + 'container1').append(boxcenter1)

		championimg = `<img width='80' height='80' style = "border-radius: 35px;"  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'></div>`
		$('#' + matchId + 'box-center4').append(championimg)

		spell1 = `<img width='30' height='30'  style = "border-radius: 35px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>`
		spell2 = `<img width='30' height='30'  style = "border-radius: 35px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>`

		$('#' + matchId + 'spell1').append(spell1)
		$('#' + matchId + 'spell2').append(spell2)

		boxright4 = `${kills}/${deaths}/${assists}<br>${kda}:1평점`

		$('#' + matchId + 'boxright4').append(boxright4)

		let itemstart = ''
		for (let k = 0; k < 6; k++) {

			let itemk = 'item' + k

			if (Myres[itemk] != 0) {
				itemimg = Myres[itemk]

				itemstart += '<img id = "'+ itemimg +'_'+ matchId +'" class = "jb-title-tm" width=30 height=30 style = "border-radius: 35px;" alt="못 불러옴" src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/' + itemimg + '.png" onmouseover="javascript:allItemTT(this.id)"><p class = "jb-text-tm"></p>&nbsp;&nbsp;&nbsp;'

			}

		}

		$('#' + matchId + 'itemStart').append(itemstart)


		boxcenter2up = `	
							킬관여 ${mykill}%<br>
							시야 점수 ${wardscore}<br>
							cs ${totalCs}<br>
							D ${dragon}
						`
		$('#' + matchId + 'center2up').append(boxcenter2up)

		boxcenter2down = `<a href="javascript:aiTimelineAni(\'${matchId}\');"><img width=40 height=40 src="/img/lodinglogo.gif" alt="리플레이시작버튼"> </a>`

		$('#' + matchId).append(boxcenter2down)
		let bcList = ''
		let rcList = ''
		for (let i in res) {

			for (j in res[i]['info']) {
				if (res[i]['info'][j]['teamId'] == 100 && res[i]['matchId'] == matchId) {
					let riotIdGameName = res[i]['info'][j]['riotIdGameName']
					let riotIdTagline = res[i]['info'][j]['riotIdTagline']
					let champimg = res[i]["info"][j]['championName']
					if (champimg == "FiddleSticks") {
						champimg = "Fiddlesticks"
					}
					if (riotIdGameName.length > 10) {
						riotIdGameName1 = riotIdGameName.substr(0, 10) + '...';
					} else {
						riotIdGameName1 = riotIdGameName

					}
					bcList += `<div style ="text-align: left;"><img width='17' height='17' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'>
							
										<a  href='/stm/${riotIdGameName}/${riotIdTagline}'>	${riotIdGameName1}</a>
													
								</div>`

				} else if (res[i]['info'][j]['teamId'] == 200 && res[i]['matchId'] == matchId) {
					let riotIdGameName = res[i]['info'][j]['riotIdGameName']
					let riotIdTagline = res[i]['info'][j]['riotIdTagline']
					let champimg = res[i]["info"][j]['championName']
					if (champimg == "FiddleSticks") {
						champimg = "Fiddlesticks"
					}
					if (riotIdGameName.length > 10) {
						riotIdGameName1 = riotIdGameName.substr(0, 10) + '...';
					} else {
						riotIdGameName1 = riotIdGameName

					}
					rcList += `<div style ="text-align: left;"><img width='17' height='17' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champimg}.png'>
							
									<a  href='/stm/${riotIdGameName}/${riotIdTagline}'>	${riotIdGameName1}</a>
											
								</div>`
				}
			}

		}
		$('#' + matchId + 'blueChamp').append(bcList)
		$('#' + matchId + 'redChamp').append(rcList)
		//		$('.containerXC').append(line1)
		$('.containerXC').append(controller)


		$('#controller' + matchId).append(container2)
		$('#controller' + matchId).append(container4)


		data1 = { 'matchId': matchId }
		$.ajax({
			type: 'post',
			url: '/ai/timelineAni',
			data: data1,
			success: function(res) {
				console.log(res.matchId + "saved")

				html = `<a href="javascript:aiTimelineAni(\'${res.matchId}\');"><img width=80 height=40 src="/img/replay3.png" alt="리플레이시작버튼"> </a>`
				$('#' + res.matchId).html(html)
			}
		})
	}
	//	console.log(myriotIdGameName)
	let more = `<div class='containerXR'></div><div class='more'>
					<center>
						<input type = "button" value = "더보기" name = "\'${myriotIdGameName}\'#\'${myriotIdTagline}\'#\'${data['matchCnt']}\'" id = 'loadMore' class='loadMore'>
						
					</center>
				</div>`
	$('.containerXC').append(more)
	
	modNum = $('#modNum').text()
	
	if(modNum == 0){
		$('.uid').css("color","white")
	}

}



function showGameTambleBody(matchId) {
	console.log(matchId)

	let blueChampList = [] //matchId의 블루 리스트
	let redChampList = []//matchId의 레드 리스트


	for (let i in allofList) {

		if (matchId == allofList[i]['matchId']) {

			for (let j in allofList[i]['info']) {


				if (allofList[i]['info'][j]['teamId'] == 100) {


					blueChampList.push(allofList[i]['info'][j])

				} else {

					redChampList.push(allofList[i]['info'][j])
				}
			}
		}
	}
	//	console.log(blueChampList)

	makeBodyblue(blueChampList, matchId);
	makeBodyred(redChampList, matchId);


}
//들어오는 값은 레드리스트
function makeBodyred(blueChampList, matchId) {
	//	console.log(blueChampList)
	teamId = '';
	if (blueChampList[0]['win'] == '1') {
		blueWin = '승리'
	} else {
		blueWin = '패배'
	}

	legend = `<div class="legend" id = '${matchId}legend2' ></div>`

	$('#container4' + matchId).append(legend);

	if (blueChampList[0]['teamId'] == 100) {
		teamId = `<div class="teamId" style=color:blue;>블루팀(${blueWin})</div>`
	} else {
		teamId = `<div class="teamId" style=color:red;>레드팀(${blueWin})</div>`

	}
	//여기서부터 시작
	champBody = `  
					${teamId}
					<div class=kda>	 <span class = "kda_tm" tooltip="(kill+assist)/death"><a href = "#">KDA</a></span>	</div>

					<div class=damage> <span class = "dmg_tm" tooltip="상대방에게 가한 (물리+마법)피해"><a href = "#">데미지</a></span></div>
					<div class=cs><span class = "minion_tm" tooltip="게임에서 잡은 미니언의 총 개수"><a href = "#">cs</span></a></div >
					<div class=itemTeam><span class = "pchit_tm" tooltip="최종 구입한 총 아이템"><a href="#">아이템</span></a></div >
					<div class=aicheck><span class = "ai_tm" tooltip="인공지능 (Troller Check System)"><a href="#">AI TCS</a></span></div>
					
				`
	$('#' + matchId + 'legend2').append(champBody)

	let ct2 = ''
	for (let i in blueChampList) {

		champion_name_kr = blueChampList[i]['champion_name_kr']
		championName = blueChampList[i]['championName']
		spellD = blueChampList[i]['summonerSpellD']
		spellF = blueChampList[i]['summonerSpellF']
		kills = blueChampList[i]['kills']
		deaths = blueChampList[i]['deaths']
		assists = blueChampList[i]['assists']
		kda = blueChampList[i]['kda']
		physicalDamageDealtToChampions = blueChampList[i]['physicalDamageDealtToChampions']
		magicDamageDealtToChampions = blueChampList[i]['magicDamageDealtToChampions']
		totalDamageDealtToChampions = parseInt(physicalDamageDealtToChampions) + parseInt(magicDamageDealtToChampions)
		physicalDamagePercent = ((physicalDamageDealtToChampions / totalDamageDealtToChampions) * 100).toFixed(0)
		magicDamagePercent = ((magicDamageDealtToChampions / totalDamageDealtToChampions) * 100).toFixed(0)
		totalMinionsKilled = blueChampList[i]['totalMinionsKilled']
		participantId = blueChampList[i]['participantId']
		riotIdGameName = blueChampList[i]['riotIdGameName']
		riotIdTagline = blueChampList[i]['riotIdTagline']


		let OnePersonitem = ''
		for (let k = 0; k < 6; k++) {
			if (blueChampList[i]['item' + k] != 0) {

				blueitem = blueChampList[i]['item' + k]
				OnePersonitem += `<img width='20' height='20' style = "border-radius: 30px;" alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${blueitem}.png>&nbsp;`
			}
		}
		if (riotIdGameName.length > 4) {
			riotIdGameName1 = riotIdGameName.substr(0, 4) + '...';
		} else {
			riotIdGameName1 = riotIdGameName

		}

		//		console.log(championName)
		ct2 += `<div class = 'ct2'>
					<div class = 'teamId1'>
						<div class = 'champImgM'>
							<div class = 'champaaa'></div>
							<div>
								<span tooltip = "${champion_name_kr}">
								<img title="${champion_name_kr}" width='30' height='30' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${championName}.png'>
							</span>
							</div>
						</div>
						<div class = 'spellM'>
							<div class = 'c'>
								<img width='20' height='20' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class = 'spellM2'>
								<div class=spellM2><img width='20' height='20'  style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						
						</div>
					</div>
						<div class = 'nickNameM'>
							<div class = 'nickNameML'></div>
							<a href='/stm/${riotIdGameName}/${riotIdTagline}'>
								<div class = nickNameMR>${riotIdGameName1}</div>
								</a>
							</div>
						
						
					</div>
					<div class = 'kda1'>
						<div class = 'killDeathAssist'>${kills}/${deaths}/${assists}</div>
						<div class = 'kdaCheck'>${kda}:1</div>
					</div>
					<div class = 'damage1'>
						<span tooltip="물리데미지 : ${physicalDamageDealtToChampions} | 마법데미지 : ${magicDamageDealtToChampions}">
							<div class = "damage11">
								<div class=damageAmountr style="flex-basis: ${physicalDamagePercent}%; background-Color: #8080c0; "  name = '${physicalDamageDealtToChampions}'></div>
								<div class=damageAmountl style="flex-basis: ${magicDamagePercent}%; background-Color: orange; "name =  '${magicDamageDealtToChampions}'></div>
							</div>
							<div class = "damage111">
									<div class = "damageGraph" font-size:10px; style="width:100%;"> ${totalDamageDealtToChampions} </div>
							</div>
						</span>
					</div>
					<div class = 'cs1'>
						<div class = 'cs11'>
							${totalMinionsKilled}
						</div>
					</div>
					<div class = 'itemTeamCheck'>
						<div class = 'teamItem1'>
								${OnePersonitem}
						</div>
					</div>
					
					<div class = aidetail id = ${matchId}` + `${participantId}>
						<img width='20' height='20' alt='못 불러옴' src = "/img/loadingimg.gif"></div>
					</div>
				</div>`
	}


	$('#container4' + matchId).append(ct2)

}


function makeBodyblue(blueChampList, matchId) {
	//	console.log(blueChampList)
	teamId = '';
	if (blueChampList[0]['win'] == '1') {
		blueWin = '승리'
	} else {
		blueWin = '패배'
	}

	legend = `<div class="legend" id = '${matchId}legend' ></div>`

	$('#container2' + matchId).append(legend);

	if (blueChampList[0]['teamId'] == 100) {
		teamId = `<div class="teamId" style=color:blue;>블루팀(${blueWin})</div>`
	} else {
		teamId = `<div class="teamId" style=color:red;>레드팀(${blueWin})</div>`

	}
	//여기서부터 시작
	champBody = `  
					${teamId}
					<div class=kda>	 <span class = "kda_tm" tooltip="(kill+assist)/death"><a href = "#">KDA</a></span>	</div>

					<div class=damage> <span class = "dmg_tm" tooltip="상대방에게 가한 (물리+마법)피해"><a href = "#">데미지</a></span></div>
					<div class=cs><span class = "minion_tm" tooltip="게임에서 잡은 미니언의 총 개수"><a href = "#">cs</span></a></div >
					<div class=itemTeam><span class = "pchit_tm" tooltip="최종 구입한 총 아이템"><a href="#">아이템</span></a></div >
					<div class=aicheck><span class = "ai_tm" tooltip="인공지능 (Troller Check System)"><a href="#">AI TCS</a></span></div>
					
				`
	$('#' + matchId + 'legend').append(champBody)

	let ct1 = ''
	for (let i in blueChampList) {

		champion_name_kr = blueChampList[i]['champion_name_kr']
		championName = blueChampList[i]['championName']
		spellD = blueChampList[i]['summonerSpellD']
		spellF = blueChampList[i]['summonerSpellF']
		kills = blueChampList[i]['kills']
		deaths = blueChampList[i]['deaths']
		assists = blueChampList[i]['assists']
		kda = blueChampList[i]['kda']
		physicalDamageDealtToChampions = blueChampList[i]['physicalDamageDealtToChampions']
		magicDamageDealtToChampions = blueChampList[i]['magicDamageDealtToChampions']
		totalDamageDealtToChampions = parseInt(physicalDamageDealtToChampions) + parseInt(magicDamageDealtToChampions)


		physicalDamagePercent = ((physicalDamageDealtToChampions / totalDamageDealtToChampions) * 100).toFixed(0)
		magicDamagePercent = ((magicDamageDealtToChampions / totalDamageDealtToChampions) * 100).toFixed(0)
		totalMinionsKilled = blueChampList[i]['totalMinionsKilled']
		participantId = blueChampList[i]['participantId']
		riotIdGameName = blueChampList[i]['riotIdGameName']
		riotIdTagline = blueChampList[i]['riotIdTagline']


		let OnePersonitem = ''
		for (let k = 0; k < 6; k++) {
			if (blueChampList[i]['item' + k] != 0) {

				blueitem = blueChampList[i]['item' + k]
				OnePersonitem += `<img width='20' height='20' style = "border-radius: 30px;" alt='못 불러옴' src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${blueitem}.png>&nbsp;`
			}
		}
		if (riotIdGameName.length > 4) {
			riotIdGameName1 = riotIdGameName.substr(0, 4) + '...';
		} else {
			riotIdGameName1 = riotIdGameName

		}

		//		console.log(championName)
		ct1 += `<div class = 'ct1'>
					<div class = 'teamId1'>
						<div class = 'champImgM'>
							<div class = 'champaaa'></div>
							<div>
								<span tooltip = "${champion_name_kr}">
								<img title="${champion_name_kr}" width='30' height='30' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${championName}.png'>
							</span>
							</div>
						</div>
						<div class = 'spellM'>
							<div class = 'c'>
								<img width='20' height='20' style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellD}.png'>
							</div>
							<div class = 'spellM2'>
								<div class=spellM2><img width='20' height='20'  style = "border-radius: 30px;" alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spellF}.png'>
							</div>
						
						</div>
					</div>
						<div class = 'nickNameM'>
							<div class = 'nickNameML'></div>
							<a href='/stm/${riotIdGameName}/${riotIdTagline}'>
								<div class = nickNameMR>${riotIdGameName1}</div>
								</a>
							</div>
						
						
					</div>
					<div class = 'kda1'>
						<div class = 'killDeathAssist'>${kills}/${deaths}/${assists}</div>
						<div class = 'kdaCheck'>${kda}:1</div>
					</div>
					<div class = 'damage1'>
						<span tooltip="물리데미지 : ${physicalDamageDealtToChampions} | 마법데미지 : ${magicDamageDealtToChampions}">
							<div class = "damage11">
								<div class=damageAmountr style="flex-basis: ${physicalDamagePercent}%; background-Color: #8080c0; "  name = '${physicalDamageDealtToChampions}'></div>
								<div class=damageAmountl style="flex-basis: ${magicDamagePercent}%; background-Color: orange; "name =  '${magicDamageDealtToChampions}'></div>

							</div>
							<div class = "damage111">
									<div class = "damageGraph" font-size:10px; style="width:100%;"> ${totalDamageDealtToChampions} </div>
							</div>
						</span>
					</div>
					<div class = 'cs1'>
						<div class = 'cs11'>
							${totalMinionsKilled}
						</div>
					</div>
					<div class = 'itemTeamCheck'>
						<div class = 'teamItem1'>
								${OnePersonitem}
						</div>
					</div>
					
					<div class = aidetail id = ${matchId}` + `${participantId}>
						<img width='20' height='20' alt='못 불러옴' src = "/img/loadingimg.gif"></div>
					</div>
				</div>`
	}


	$('#container2' + matchId).append(ct1)
}

//클릭시 타임라인 데이터 가지고 오기 , 모달열림
timeline_list = []
function aiTimelineAni(matchId) {
	timeline_list = []
	data = { 'matchId': matchId }
	$.ajax({
		type: 'post',
		url: '/ai/timelineInfo',
		data: data,
		success: function(res) {

			timeline_list.push(res)
			console.log(timeline_list)
			open()
		}
	})

}

window.addEventListener('click', (e) => {

	if (e.target.id == "loadMore") {
		var riotid = $('#loadMore').attr('name');



		var gameId = riotid.split('#');
		let gameName = gameId[0].replace(/\'/gi, "") // 아이디
		let tagLine = gameId[1].replace(/\'/gi, "") // 태그
		let matchCnt = parseInt(gameId[2].replace(/\'/gi, ""))
		//		

		// 태그
		matchCnt++;
		data = { 'gameName': gameName, 'tagLine': tagLine, 'matchCnt': matchCnt }
		//		console.log(data)
		$('#loadMore').remove()
		bbb(data)
	}

	if (e.target.className == 'box-right') {

		console.log(e.target.className)
	}

});

function timecheck(res) {

	var timeStamp = Date.now();
	gameEndTimestampString = res['gameEndTimestamp']
	gameStartTimestampString = res['gameStartTimestamp']

	gameEndTimestamp = Number(gameEndTimestampString)
	gameStartTimestamp = Number(gameStartTimestampString)

	loltime = (timeStamp - gameEndTimestamp) // ex) 몇일전입니다.

	ingametime = (gameEndTimestamp - gameStartTimestamp) // ex) 31분전 게임입니다.
	spendTime = Math.floor(ingametime / 1000 / 60);
	let day = Math.floor(loltime / 1000 / 60 / 60 / 24);
	let hour = Math.floor(loltime / 1000 / 60 / 60);
	let min = Math.floor(loltime / 1000 / 60);

	if (day == 0 && hour == 0) {
		spentTime = min + "분 전";
	} else if (day == 0) {
		spentTime = hour + "시간 전";
	} else {
		spentTime = day + "일 전";
	}

	ingamespentTime = spendTime + "분 게임";

}
function queuecheck(res) {

	dragon = '포로간식'
	if (res.queueId == 450) {
		queue = "칼바람"
		dragon = res.dragon
	} else if (res.queueId == 490) {
		queue = "빠른대전"
	} else if (res.queueId == 420) {
		queue = "솔로랭크"
	} else if (res.queueId == 440) {
		queue = "자유랭크"
	} else if (res.queueId == 1900) {
		queue = "우르프"
	}

}
function win_losecheck(res) {
	if (res.win == '0') {
		win_lose = '패배'
	} else if (res.win == '1') {
		win_lose = '승리'
	} else if (spendTime < 5) {
		win_lose = '다시하기'
	}
}