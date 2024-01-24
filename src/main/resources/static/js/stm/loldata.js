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
	$.ajax({
		type : 'post',
		url : '/match/list',
		data : data,
		success : function(res){
			console.log(res)
			console.log(res[0]['info']['participants'][0]['win'])
			for(let i=0; i<res.length; i++){
			str += "<div id='matchlist"+i+"' class='list'>"
			str += i+1+"번째 경기"
			str += "<button id='gamebtn"+i+"' onclick='gamebtn("+i+")'>더보기</button>"
			
			str += "<table border = '3'  id = 'gametable"+i+"' style='display: none'><thead>"
			str +="<th>승패</th><th>소환사 아이디</th><th>팀</th><th>챔피언</th><th>라인</th><th>킬</th><th>데스</th><th>어시스트</th>"
			str +="</thead><tbody>"
			str += "<div class='list' id = 'datalist"+i+"'  style='display: none'>"
			
			
				for(let j=0; j<res[i]["info"]['participants'].length; j++){
					str += "<tr>"
					
					if(res[i]['info']['participants'][j]['win'] == "true"){
						str += '<td>승리</td>'
					}else{
						str += '<td>패배</td>'
					}
					
					riotIdGameName = res[i]["info"]['participants'][j]['riotIdGameName']
					str += "<td>"+riotIdGameName+"</td>"
					
					if(res[i]["info"]['participants'][j]['teamId'] == 100){
						str += "<td>레드팀</td>"
					}else{
						str += "<td>블루팀</td>"
					}
					
					championName = res[i]["info"]['participants'][j]['championName']
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
			str += "</tbody></table>"
			
				
		str += "</div>"
		}
		str += "<br>"
		$('#puuid').append(str)		
		}
		
	})
	
})
