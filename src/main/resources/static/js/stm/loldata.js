/**
 * 
 */

function gamebtn(i) {
	 var gametable = document.getElementById("gametable"+i+"");
     gametable.style.display = ((gametable.style.display!='none') ? 'none' : 'block');
     
     var e = document.getElementById("datalist"+i+"");
     e.style.display = ((e.style.display!='none') ? 'none' : 'block');
}

$("#getpuuid").on("click", function () {
	let gameName = $('#gameName').val();
	let tagLine = $('#tagLine').val();
	data  = {'gameName':gameName,'tagLine':tagLine}	
	let str = ''
	let team1 = ''
	$.ajax({
		type : 'post',
		url : '/match/list',
		data : data,
		success : function(res){
			console.log(res)
			for(let i=0; i<res.length; i++){
				str += "<div id='matchlist"+i+"' class='list'>"
				str += "<table align='center' border='1' width = '600' >"
				str += "<tr>"
				str += "<th  rowspan='2'>게임 모드</th>"
				str += "<th rowspan='3' colspan='2'> 챔피언 사진</th>"
				str += "<th rowspan='2'>킬/데스/어시</th>"
				str += "<th>킬관여율</th>"
				str += "<th rowspan='3'>19분전</th>"
				str += "<td rowspan='3'><button id='gamebtn"+i+"' onclick='gamebtn("+i+")'>더보기</button></td>"
				str += "</tr>"
				str += "<tr> <th>77%</th></tr>"
				str += "<tr>"
				str += "<th>승패</th>"
				str += "<th>평균KDa</th>"
				str += "<th>골드</th>"
				str += "</tr>"
				str += "<table border = '3'  id = 'gametable"+i+"' style='display: none'><thead>"
				str +="</thead><tbody>"
				str +="<th>승패</th><th>소환사 아이디</th><th>팀</th><th>챔피언</th><th>라인</th><th>킬</th><th>데스</th><th>어시스트</th><tr></tr>"
				str += "<td id = 'team1'></td><tr></tr>"
				str += "<div class='list' id = 'datalist"+i+"'  style='display: none'>"
				for(let j=0; j<res[i]["info"]['participants'].length; j++){
				
				
				
				
				
				
				
				
				
				
				
				
				
				
					str += "<tr>"
					
					if(res[i]['info']['participants'][0]['win'] == true){ // 첫번째 팀의 승리패배
						team1 = '승리'
					}else{
						team1 = '패배'
					}
					if(j==5){
						if(res[i]['info']['participants'][5]['win'] == true){// 두번째 팀의 승리패배
							str += "<td id = 'team2' Colspan='7'>승리</td><tr></tr>"
						}else{
							str += "<td id = 'team2' Colspan='7'>패배</td><tr></tr>"
						}
					}
					riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']
					str += "<td>"+riotIdGameName+"</td>"
					
					if(res[i]["info"]['participants'][j]['teamId'] == 100){
						str += "<td>레드팀</td>"
					}else{
						str += "<td>블루팀</td>"
					}
					
					championName = res[i]["info"]['participants'][j]['championName']
//					findchampionName(championName)
					str += "<td>"+championName+"</td>"
					
					if(res[i]["info"]['gameMode'] == "ARAM"){
						str += "<td>칼바람</td>"
					}else{
						lane = res[i]["info"]['participants'][j]['lane']
						str += "<td>"+lane+"</td>"						
					}
					
					
					
					kills = res[i]["info"]['participants'][j]['kills']
					str +=	"<td>"+kills+"</td>"
					
					deaths = res[i]["info"]['participants'][j]['deaths']
					str +=	"<td>"+deaths+"</td>"
					
					assists = res[i]["info"]['participants'][j]['assists']
					str +=	"<td>"+assists+"</td>"
					str += "</tr>"
				}
			str += "</div>"			
			str += "</table>"
			
				
		str += "</div>"
		}
		str += "<br>"
		$('#puuid').append(str)		
		$('#team1').html(team1)
		$('#puuid').show();
		}
		
	})
	
})
//function findchampionName(championName){
//	 = championName
//}
//$("#getpuuid").on("click", function () {
//	str = 'dsaasdasdasdsda'
//		
//	$('#userData').append(str);
//})
