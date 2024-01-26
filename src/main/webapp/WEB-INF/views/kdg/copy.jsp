
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- champ choice js 들어갈곳 -->
<script defer src="../js/kdg/champion/champChoice.js" /></script>
<meta charset="UTF-8">
<title>챔피언 분석</title>


<!-- kdg css 들어갈곳 -->
<!-- <link rel="stylesheet" href="../css/kdg/kdg.css" /> -->
<link rel="stylesheet" href="../css/kdg/copy.css" />


</head>
<body>
	<%@include file="../inc/kdgheader.jsp"%>
	<div>
		<div>
			<h1>챔피언 분석</h1>
		</div>
	</div>
	<!-- #3C3C41 -->
	<div style="height: 2000px; background: white;">
		<p id="name" style="visibility: hidden; position: absolute;"></p>
		<div class="champs">
			<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
			<h1 id="versus">vs</h1>
			<p id="enemyChampName"
				style="visibility: hidden; position: absolute;"></p>
			<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
			<button id="anBtn">분석하기</button>
		</div>
		<!-- <h1>김동근 페이지 입니다.</h1> -->

		<div class="container" id="container">
			<div class="header" id="header">
				<div id="ex">
					<div id="champbox">
						<div id="champimgbox">
							<div id="champimg1"></div>
							<div id="vs">vs</div>
							<div id="champimg2"></div>
						</div>
						<div id="champnamebox">
							<div id="champname1"></div>
							<div id="gongback"></div>
							<div id="champname2"></div>
						</div>
					</div>
					<div id="box">
						<div id="ex1">설명</div>
						<div id="searchbox">
							<div class="searchbox" id="search">
								<input type="text" id="searchChamp" name="searchChamp"
									placeholder="ex) 가렌, garen, ㄱㄹ...">
							</div>
							<div id=line>
								<div class="img" id="topimg">
									<img id="top" class="positionICN" src="../img/top.png"
										name="top" onclick="line(this.id)">

								</div>
								<div class="img" id="jugimg">
									<img id="jug" class="positionICN" src="../img/jug.png"
										name="jug" onclick="line(this.id)">

								</div>
								<div class="img" id="midimg">
									<img id="mid" class="positionICN" src="../img/mid.png"
										name="mid" onclick="line(this.id)">

								</div>
								<div class="img" id="adcimg">
									<img id="adc" class="positionICN" src="../img/adc.png"
										name="adc" onclick="line(this.id)">

								</div>
								<div class="img" id="supimg">
									<img id="sup" class="positionICN" src="../img/sup.png"
										name="sup" onclick="line(this.id)">

								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="box" id="champListbox">
					<div id="champList">
						<ul>
							<c:forEach var="cham" items="${list}">
								<li><img id="${cham.champion_name}"
									src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
									width="77" height="77" alt="${cham.champion_name}"
									class="bg-image" onclick="javascript:submit(this.id)"> <span>${cham.champion_name_kr}</span>
								</li>
							</c:forEach>
						</ul>
					</div>
				</div>




			</div>





		</div>

		<%@include file="../inc/footer.jsp"%>
		<!-- champ list (ajax) js 들어갈곳 -->
		<script defer src="../js/kdg/champion/champList.js" /></script>

		<!-- item build (ajax) js 들어갈곳 -->
		<script defer src="../js/kdg/item/itemBuild.js" /></script>
</body>

</html>