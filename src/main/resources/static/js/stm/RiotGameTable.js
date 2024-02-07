/**
 * 
 */


function showGameTamble(res,data) {
	console.log(data)
	console.log(res)
	let str = ''
	str += "<div id = 'newList'>"
	str += "<div class='profile-header'>"
	str += "<div class='left'>"
	str += "<div class='left-top'>"
	str += "<div class='p-c-img'>플레이어 아이콘</div>"
	str += "<div class='p-info'>"
	str += "<div class='p-name'>닉네임</div>"
	str += "<div class='p-level'>플레이어레벨</div>"
	str += "<div class='playgames'>최근게임 : 13분전 </div>"
	str += "</div>"
	str += "</div>"
	str += "<div class='left-bottom'>미정	</div>"
	str += "</div>"
	str += "<div class='right'>"
	str += "<div class='right-top'>그래프or메일함</div>"
	str += "<div class='right-bottom'>미정</div>"
	str += "</div>"
	str += "</div>"

	str += "<div class='container1'>"
	for (let i = 0; i < res.length; i++) {
		str += "<div class='win-lose-board' id='res" + i + "'>"
		str += "<div class='match-header'>"
		str += "<div class='one'>"
		queue = ''
		win_lose = ''
		champimg = ''
		for(let j = 0; j<res[i]['info'].length; j++){
			if (res[i]["info"][j]['queueId'] == 450) {
			queue = "칼바람"
		} else if (res[i]["info"][j]['queueId'] == 490) {
			queue = "빠른대전"
		} else if (res[i]["info"][j]['queueId'] == 420) {
			queue = "솔로랭크"
		} else if (res[i]["info"][j]['queueId'] == 440) {
			queue = "자유랭크"
		}
		// 게임모드
		if (res[i]["info"][j]['win'] == '1'){
			win_lose ='승리'
		}else{
			win_lose ='패배'
		}
		// 승패
		if(data['gameName'] ==res[i]["info"][j]['riotIdGameName'] || data['gameName'] == res[i]["info"][j]['summonerName']){
			champimg = res[i]["info"][j]['championName']
			console.log(champimg)
		}
	}
		str += "<div class='puuid'>"
		str += queue
		str += "</div>"
		
		str += "<div class='win-lose'>"
		str += win_lose
		str += "</div>"
		str += "</div>"
		str += "<div class='two'>"
		str += "<div class='champimg'><img width='100' height='100'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/" + champimg + ".png'></div>"
		str += "<div class='spellgroup'>"
		str += "<div class='spell1'>스펠1</div>"
		str += "<div class='spell2'>스펠2</div>"
		str += "</div>"
		str += "<div class='number'>"
		str += "<div class='KDA'>kda</div>"
		str += "<div class='grade'>kda평균</div>"
		str += "</div>"
		str += "<div class='itemlist'>"
		str += "<div class='tool'>"
		str += "<div class='item1'></div>"
		str += "<div class='item2'></div>"
		str += "<div class='item3'></div>"
		str += "<div class='item4'></div>"
		str += "<div class='item5'></div>"
		str += "<div class='item6'></div>"
		str += "</div>"
		str += "</div>"
		str += "</div>"
		str += "<div class='three'>"
		str += "<div class='p-kill'>킬관여율</div>"
		str += "<div class='dragon'>드래곤 킬</div>"
		str += "</div>"
		str += "<div class='four'>"
		str += "<div class='timestamp'>9일전</div>"
		str += "<div class='gametimes'>20분게임</div>"
		str += "</div>"
		str += "<div class ='actions'>"
		str += "<button id='gamebtn" + i + "' onclick='gamebtn(" + i + ")'>더보기</button>"
		str += "</div>"

		str += "<br><br><br><br><br><br>"

		str += "<table class='resultwin'style='display: none' id = 'gametable" + i + "'> " //
		str += "<thead>"
		str += "<tr>"
		str += "<th colspan='2' class='th'>아군승리</th>"
		str += "<th class='th'>K/D/A</th>"
		str += "<th  class='th'>아군받은피해량</th>"
		str += "<th  class='th'>아군가한피해량</th>"
		str += "<th class='th'>CS</th>"
		str += "<th colspan='2' class='th'>아군아이템</th>"
		str += "</tr>"
		str += "</thead>"
		str += "<tbody>"
		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
			if (res[i]['info'][j]['teamId'] == 100) {
				str += "<tr>"
				str += "<td colspan='2' class='cimg'>1</td>"
				str += "<td class='K/D/A'></td>"
				str += "<td class='damageDealt'></td>"
				str += "<td class='damageReceived'></td>"
				str += "<td class='cs'></td>"
				str += "<td class='item'>"
				str += "<div class='Titemlist'>"
				str += "<div class='Titem1'></div>"
				str += "<div class='Titem2'></div>"
				str += "<div class='Titem3'></div>"
				str += "<div class='Titem4'></div>"
				str += "<div class='Titem5'></div>"
				str += "<div class='Titem6'></div>"
				str += "</div>"
				str += "</td>"
				str += "</tr>"
			}
		}
		str += "</tbody>"
		str += "<thead>"
		str += "<tr>"
		str += "<th colspan='2' class='th'>적군패배</th>"
		str += "<th class='th'>K/D/A</th>"
		str += "<th  class='th'>적군받은피해량</th>"
		str += "<th  class='th'>적군가한피해량</th>"
		str += "<th class='th'>CS</th>"
		str += "<th colspan='2' class='th'>적군아이템</th>"
		str += "</tr>"
		str += "</thead>"
		for (let j = 0; j < res[i]['info'].length; j++) { // 팀 아이디 100
			if (res[i]['info'][j]['teamId'] == 200) {
				str += "<tr>"
				str += "<td colspan='2' class='cimg'>1</td>"
				str += "<td class='K/D/A'></td>"
				str += "<td class='damageDealt'></td>"
				str += "<td class='damageReceived'></td>"
				str += "<td class='cs'></td>"
				str += "<td class='item'>"
				str += "<div class='Titemlist'>"
				str += "<div class='Titem1'></div>"
				str += "<div class='Titem2'></div>"
				str += "<div class='Titem3'></div>"
				str += "<div class='Titem4'></div>"
				str += "<div class='Titem5'></div>"
				str += "<div class='Titem6'></div>"
				str += "</div>"
				str += "</td>"
				str += "</tr>"

			}

		}

		str += "</table>"

	}
	str += "</div>"
	str += "</div>"
	$('#puuid').append(str)
	$('#puuid').show();
}