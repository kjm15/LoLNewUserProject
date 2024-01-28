/**
 * 
 */

$(document).ready(function(){
	$('#anBtn').click(function(){
		/* 티어 버튼 보이기 */
		$('#iron').show();
		$('#bronze').show();
		$('#silver').show();
		$('#gold').show();
		$('#platinum').show();
		$('#emerald').show();
		$('#diamond').show();
		$('#master').show();
		$('#grandmaster').show();
		$('#challenger').show();
		$('#anBtn').hide();
		
		$('#lineCheck').empty();
		
		var myChampName = $('#myChampName').text();
		var enemyChampName = $('#enemyChampName').text();
		var tier = 'platinum';
		console.log(tier);
		console.log(myChampName);
		console.log(enemyChampName);
		
		data = {
			
			"tier" : tier,
			"myChampName" : myChampName,
			"enemyChampName" : enemyChampName
		}
		$.ajax({
		type : "POST",
		url : "/kdg/itemBuild",
		data : data,
		success : function(res) {	
			
			$('#champList').empty();
			console.log(res);
			
			str1 = "<table class = 'itemBuild'><td>추천 순위</td><td>티어</td><td colspan = '3'>빌드</td><td>빌드 승률</td><td>게임 수</td><td>승리 수</td>"
			str2 = ""
			
			for (let i = 0; i < res.length; i++){
				str2 += "<tr><td>"+(i+1)+"</td>"
				str2 += "<td><img src='../img/tier/"+tier+".png' style='width: 70px; height: 70px;'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId1+".png'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId2+".png'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId3+".png'></img></td>"
				str2 += "<td>"+(res[i].myBuildwinCount/res[i].myBuildPickCount*100).toFixed(2)+"%</td>"
				str2 += "<td>"+res[i].myBuildPickCount+" 게임</td>"
				str2 += "<td>"+res[i].myBuildwinCount+" 게임</td></tr>"
				 
			}
			
			str3 = "</table>"
			
			$('#champList').html(str1 + str2 + str3);
			$('#champList').show();
			
		}
	})
	})
})

function tier(c){
	
	$('#champList').empty();

	var myChampName = $('#myChampName').text();
	var enemyChampName = $('#enemyChampName').text();
	var tier = c;
	
	console.log(tier);
	console.log(myChampName);
	console.log(enemyChampName);
	
	str = "아이템 버전 : 14.01, 설정 티어 : "+tier+" <img src='../img/tier/"+tier+".png' style = 'width: 30px; height: 30px;'></img>, 라인 : all"	
	$('#info22').html(str)	
	
	data = {
		
		"tier" : tier,
		"myChampName" : myChampName,
		"enemyChampName" : enemyChampName
		
	}
	if(tier == "master" || tier == "grandmaster" || tier == "challenger"){
		
		$('#champList').html(tier+"티어에서 두 챔피언의 데이터가 부족합니다.").css("font-size","larger").css("color","gold").css("text-align","center");
		return
	}
	$.ajax({
		type : "POST",
		url : "/kdg/itemBuildperTier",
		data : data,
		success : function(res) {	
			
			console.log(res);
			
			str1 = "<table class = 'itemBuild'><td>추천 순위</td><td>티어</td><td colspan = '3'>빌드</td><td>빌드 승률</td><td>게임 수</td><td>승리 수</td>"
			str2 = ""
			
			for (let i = 0; i < res.length; i++){
				str2 += "<tr><td>"+(i+1)+"</td>"
				str2 += "<td><img src='../img/tier/"+tier+".png' style='width: 70px; height: 70px;'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId1+".png'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId2+".png'></img></td>"
				str2 += "<td><img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res[i].itemId3+".png'></img></td>"
				str2 += "<td>"+(res[i].myBuildwinCount/res[i].myBuildPickCount*100).toFixed(2)+"%</td>"
				str2 += "<td>"+res[i].myBuildPickCount+" 게임</td>"
				str2 += "<td>"+res[i].myBuildwinCount+" 게임</td></tr>"
				 
			}
			
			str3 = "</table>"
			
			$('#champList').html(str1 + str2 + str3);
			$('#champList').show();
			
		}
	})	

	
}