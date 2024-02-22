
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>라문철 test</title>
<!-- css들어갈자리  -->

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>

<script
	src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
<link href="/css/jgh/riot.css" rel="stylesheet" type="text/css">
<!-- <link href="/css/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/modal.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/animation.css" rel="stylesheet" type="text/css"> -->
</head>
<body>

	<%@include file="../inc/header.jsp"%>

	<div
		style="height: 1000px; width: 1000px; background: rgba(0, 0, 0, 0);">

		<h1>이곳은ai테스트페이지입니다..</h1>

		

		<h1>
			과연 결과는? 
		</h1>
		<hr>
		<p><center><span id="aiReult"> [>>>결과 나오는곳<<<] </span></center></p>
		<hr>
		<input type="text" placeholder="티어적기" value = "GOLD" id = "aiTier" name="tier">
		<input type="text" placeholder="라인적기" value = "top" id = "aiteamPosition" name="teamPosition">
		<input type="text" placeholder="평균 KDA를 적어주세요" id = "aiKda" name="kda">
		<input type="text" placeholder="총데미지 적기" value = "15324" id = "aitotalDamageDealtToChampions" name="damage">
		<input type="text" placeholder="총골드량" value = "17352" id = "aigoldEarned" name="goldEarned">
		
		<input type = "button" id = "sendToAi" value="눌러주세요" />

		<button>
			<a href="/">메인으로 이동</a>
		</button>
		<hr>
		>>데이터 관리자용 << 관리자인경우에 나올 예정
		<p><h1>비교데이터 받기</h1></p>
		<input type= "button" id= "getData" value = "원하는티어데이터받기"> 
  <label for="lang">티어</label>
  <select name="wantTier" id="tier">
    <option value="DIAMOND">DIAMOND</option>
    <option value="EMERALD">EMERALD</option>
    <option value="PLATINUM">PLATINUM</option>
    <option value="GOLD">GOLD</option>
    <option value="SILVER">SILVER</option>
    <option value="BRONZE">BRONZE</option>
  </select>
		
</div>
		<%@include file="../inc/footer.jsp"%>

		<!-- js들어갈자리  -->
		<script defer src="/js/Ai/main.js"></script>
	
</body>
</html>