<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
	function champ(a) {
		var idName = a;

		$('#champList').css("visibility", "visible");
		$('#searchChamp').css("visibility", "visible");
		$('#searchChamp').val('');
		
		$('#name').html(a);
	}

	function submit(b) {
		var a = $('#name').text();
		var c = a + 'ion';
		var champName = b;
		let str1 = '<img onclick="javascript:champ(this.id)" id=';
		let str2 = ' src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/';
		let str3 = '.png">';
		let str = str1 + a + str2 + b + str3;

		$('#' + c).html(str);
		$('#champList').css("visibility", "hidden")
		$('#searchChamp').css("visibility", "hidden");
	}
</script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<meta charset="UTF-8">
<title>챔피언 분석</title>

<style type="text/css">
* {
    cursor: url(../img/normal.png) 2 2, auto;
}

#myChampion {
	width: 50%;
	height: 500px;
	float: left;
	position: relative;
}

#enemyChampion {
	width: 50%;
	height: 500px;
	float: right;
	position: relative;
}

#myChampion #myChamp {
	border-radius: 50%;
	border: 1px solid black;
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	left: 60%;
	transform: translate(-50%, -50%);
	
	cursor: url(../img/unavailable.png) 2 2, auto;
}

#enemyChampion #enemyChamp {
	border-radius: 50%;
	border: 1px solid black;
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	right: 35%;
	transform: translate(-50%, -50%);
	
	cursor: url(../img/unavailable.png) 2 2, auto;
}

#versus {
	position: absolute;
	top: 40%;
	left: 46.2%;
	font-size: 100px;
}

#champList::-webkit-scrollbar, body::-webkit-scrollbar {
	width: 8px;
}
#champList::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
	height: 3px;
	background: #785A28;
	
	border-radius: 15px;
}
#champList::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
	background: rgba(33, 122, 244, .1);
}


#champList {
	padding: 20px;

	background-color: #091428;
	color: #C8AA6E;
	
	
	width: 78%;
	height: 800px;
	visibility: hidden;
	overflow: scroll;
	float: left;
	
	margin-left: 200px;
}

li {
	position: relative;
	width: 84px;
	height: 84px;
	float: left;
	padding: 1px;
	margin-left: 10px;
	margin-bottom: 30px;
	cursor: pointer;
}

ul {
	list-style: none;
	height: 500px;
	padding-inline-start: 10px;
}

span {
	display: block;
	width: 72px;
	line-height: 14px;
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-top: 2px;
	height: 16px;
	text-align: center;
}

#searchChamp {
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 217px;
	
	visibility: hidden;
	
	background-color: #FFFFFF;
	
	padding-left: 30px;
}

input[type=text] {
	width: 300px;
	height: 40px;
	font-size: 16px;
	
	outline: none;
	border-radius: 15px;
	
	cursor: auto;
	
	background-image: url(../img/search.png);
}

img:hover {
	-webkit-transform: scale(1.4);
	transform: scale(1.4);

}

</style>

</head>
<body>
	<%@include file="inc/header.jsp"%>
	<div style="height: 2000px; background: #3C3C41;">
		<p id="name" style="visibility: hidden; position: absolute;"></p>
		<!-- <h1>김동근 페이지 입니다.</h1> -->
		<div id="myChampion">
			<img onclick="javascript:champ(this.id)" src="../img/champ.jpg"
				id="myChamp"></img>
		</div>
		<div id="enemyChampion">
			<img onclick="javascript:champ(this.id)" src="../img/champ.jpg"
				id="enemyChamp"></img>
		</div>
		<h1 id="versus">vs</h1>
		<input type="text" id="searchChamp" name="searchChamp" placeholder="ex) 가렌, garen, ㄱㄹ...">
			<ul>
			<div id="champList">
				<c:forEach var="cham" items="${list}">
					<li><img id="${cham.champion_name}"
						src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
						width="77" height="77" alt="${cham.champion_name}"
						class="bg-image" onclick="javascript:submit(this.id)"> <span>${cham.champion_name_kr}</span></li>
				</c:forEach>
			</ul>
		</div>
	</div>
	
	<%@include file="inc/footer.jsp"%>
<script type="text/javascript">
	$(document).ready(function() {
		$("#searchChamp").keyup(function() {
			
			$('#champList').empty();
			
			let cn = $('#searchChamp').val()

			data = {
				"searchChamp" : cn
			}
			$.ajax({
				type : "POST",
				url : "/kdg/search",
				data : data,
				success : function(res) {							
					str1 = "<ul>"
					str2 = ''
							for (let i = 0; i < res.length; i++){
								str2 += "<li><img id='"+res[i].champion_name+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res[i].champion_name+".png'"
								str2 += "width='72' height='72' alt='"+res[i].champion_name+"' class='bg-image' onclick='javascript:submit(this.id)'>"
								str2 +=	"<span>"+res[i].champion_name_kr+"</span></li>"
								}
					str3="</ul>"
					
					$('#champList').html(str1 + str2 +str3)
				}
			})
		});
	});
		
</script>
</body>

</html>