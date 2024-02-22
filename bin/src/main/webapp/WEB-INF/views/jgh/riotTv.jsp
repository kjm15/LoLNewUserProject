
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>라문철 test</title>
<!-- css들어갈자리  -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
<link href="/css/jgh/riot.css" rel="stylesheet" type="text/css">
<!-- <link href="/css/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/modal.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/style.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="/css/jgh/animation.css" rel="stylesheet" type="text/css"> -->
</head>

<body>

	<%@include file="../inc/header.jsp"%>

	<div style="height: 1000px; width : 500px; background: rgba(0, 0, 0, 0);">



		<p>라문철 테스트 페이지 입니다. 모듈화로 옮겨갈 예정</p>

		<%@include file="../jgh/riotTv/detail1.jsp"%>



	</div>

	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->
	<script defer src="/js/jgh/riotTv/main.js"></script>
	<!-- 	<script defer src="/js/jgh/jsduo/duoChatting.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoDeleteSave.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoModal.js"></script> -->
	<!-- 	<script defer src="/js/jgh/jsduo/duoShow.js"></script> -->

</body>

</html>