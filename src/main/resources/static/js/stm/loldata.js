/**
 * 
 */

function gamebtn(i) {
	var gametable = document.getElementById("gametable" + i + "");
	gametable.style.display = ((gametable.style.display != 'none') ? 'none' : 'block');

	var e = document.getElementById("datalist" + i + "");
	e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}

$("#getpuuid").on("click", function() {
				 var timeStamp = Date.now();
				 console.log(timeStamp-1706155516059)
	let gameName = $('#gameName').val();
	let tagLine = $('#tagLine').val();
	data = { 'gameName': gameName, 'tagLine': tagLine }
	let str = ''
	let team1 = ''
	$.ajax({
		type: 'post',
		url: '/match/list',
		data: data,
		success: function(res) {
			console.log(res)
			for (let i = 0; i < res.length; i++) {
				str += "<div id='matchlist" + i + "' class='list'>"
				str += "<table align='center' border='1' width = '800' >"
				str += "<tr>"

				str += "<th width = '150' rowspan='2' id='gameMode" + i + "'></th>"

				str += "<th rowspan='3' colspan='2'> 챔피언 사진</th>"
				str += "<th rowspan='2' id = 'KDA" + i + "' width = '100'></th>" // k/d/a
				let mykill = ''
				for (let j in res[i]["info"]['participants']) {
					if(res[i]["info"]['participants'][j]['teamId']==res[i]["info"]['teams'][0]['teamId']){	
						
								mykill ="킬 관여: "+ res[i]["info"]['teams'][0]['objectives']['champion']['kills']
						
							}else if(res[i]["info"]['participants'][j]['teamId']==res[i]["info"]['teams'][1]['teamId']){
						
								let totalkill =res[i]["info"]['teams'][1]['objectives']['champion']['kills']
								mykill=(((res[i]["info"]['participants'][j]['kills']+res[i]["info"]['participants'][j]['assists'])/totalkill)*100).toFixed(0)+"%"
							}
				}
				str += "<th>킬 관여율</th>"
				
				
				str += "<th rowspan='3'>19분전</th>"
				str += "<td rowspan='3'><button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button></td>"
				str += "</tr>"
				str += "<tr> <th>"+mykill+"</th></tr>"
				str += "<tr>"
				let team = ''
				let dragon = ''
				for (let j in res[i]["info"]['participants']) {
					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
						if (res[i]["info"]['participants'][j]['win'] == true) {
							team = '승리'
						} else {
							team = '패배'
						}
						if(res[i]["info"]['queueId'] != 450){
							if(res[i]["info"]['participants'][j]['teamId']==res[i]["info"]['teams'][0]['teamId']){	
								dragon ="드래곤 킬:"+ res[i]["info"]['teams'][0]['objectives']['dragon']['kills']
							}else if(res[i]["info"]['participants'][j]['teamId']==res[i]["info"]['teams'][1]['teamId']){
								dragon ="드래곤 킬:"+ res[i]["info"]['teams'][1]['objectives']['dragon']['kills']
							}
						}
					}
					
				}
				str += "<th>"+team+"</th>"
				str += "<th id='KdaAverage" + i + "'>평균</th>"
				
				str += "<th width = '100'>"+dragon+"</th>"
				str += "</tr>"
				str += "<table border = '3'  id = 'gametable" + i + "' style='display: none'><thead>"
				str += "</thead><tbody>"
				str += "<th>승패</th><th>소환사 아이디</th><th>팀</th><th>챔피언</th><th>라인</th><th>킬</th><th>데스</th><th>어시스트</th><tr></tr>"
				
				

				str += "<td id = 'team1'>" +  + "</td><tr></tr>"
				str += "<div class='list' id = 'datalist" + i + "'  style='display: none'>"


				for (let j = 0; j < res[i]["info"]['participants'].length; j++) {

					if (gameName == res[i]["info"]['participants'][j]['riotIdGameName']) {
						res[i]["info"]['participants'][j]['kills'] + "/" + res[i]["info"]['participants'][j]['deaths'] + "/" + res[i]["info"]['participants'][j]['assists']
					}





					str += "<tr>"
					if (j == 0) {
						if (res[i]['info']['participants'][0]['win'] == true) { // 첫번째 팀의 승리패배
							team1 = '승리'
						} else {
							team1 = '패배'
						}
					}
					if (j == 5) {
						if (res[i]['info']['participants'][5]['win'] == true) {// 두번째 팀의 승리패배
							str += "<td id = 'team2' Colspan='7'>승리</td><tr></tr>"
						} else {
							str += "<td id = 'team2' Colspan='7'>패배</td><tr></tr>"
						}
					}
					riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']
					str += "<td>" + riotIdGameName + "</td>"

					if (res[i]["info"]['participants'][j]['teamId'] == 100) {
						str += "<td>레드팀</td>"
					} else {
						str += "<td>블루팀</td>"
					}

					championName = res[i]["info"]['participants'][j]['championName']
					//					findchampionName(championName)
					str += "<td>" + championName + "</td>"

					if (res[i]["info"]['gameMode'] == "ARAM") {
						str += "<td>칼바람</td>"
					} else {
						lane = res[i]["info"]['participants'][j]['lane']
						str += "<td>" + lane + "</td>"
					}



					kills = res[i]["info"]['participants'][j]['kills']
					str += "<td>" + kills + "</td>"

					deaths = res[i]["info"]['participants'][j]['deaths']
					str += "<td>" + deaths + "</td>"

					assists = res[i]["info"]['participants'][j]['assists']
					str += "<td>" + assists + "</td>"
					str += "</tr>"
				}
				str += "</div>"
				str += "</table>"


				str += "</div>"
			}
			str += "<br>"
			$('#puuid').append(str)
			findUserGameMode(res)
			findUserKda(gameName, res)
			$('#team1').html(team1)
			$('#puuid').show();
		}

	})

})
function findUserGameMode(res) {

	for (let i = 0; i < res.length; i++) {
		var userGameMode = document.getElementById("gameMode" + i); // 게임모드
		if (res[i]["info"]['queueId'] == 450) {
			gameMode = "칼바람"
		} else if (res[i]["info"]['queueId'] == 490) {
			gameMode = "빠른대전"
		} else if (res[i]["info"]['queueId'] == 420) {
			gameMode = "솔로랭크"
		} else if (res[i]["info"]['queueId'] == 440) {
			gameMode = "자유랭크"
		}
		userGameMode.innerHTML = gameMode
	}
}
function findUserKda(gameName,res){
//	console.log(res)
	for(let i=0; i<res.length; i++){
		var userKda = document.getElementById("KDA"+i); // k/d/a
		var userKdaAverage = document.getElementById("KdaAverage"+i); // k/d/a 
			for(let j=0; j<res[i]["info"]['participants'].length; j++){
				if(gameName==res[i]["info"]['participants'][j]['riotIdGameName']){
				Kda	= res[i]["info"]['participants'][j]['kills']+"/" +res[i]["info"]['participants'][j]['deaths']+"/"+res[i]["info"]['participants'][j]['assists']
				KdaAverage = ((res[i]["info"]['participants'][j]['kills']+res[i]["info"]['participants'][j]['assists'])/res[i]["info"]['participants'][j]['deaths']).toFixed(2)

				} // 평균 kda								
			}			
			userKda.innerHTML=Kda
			userKdaAverage.innerHTML = KdaAverage

	}
}

