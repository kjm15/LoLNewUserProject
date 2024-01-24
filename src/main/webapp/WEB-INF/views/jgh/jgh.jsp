
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>롤 영혼의 Duo 찾기</title>
<!-- css들어갈자리  -->
<link href="/css/style.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/modal.css" rel="stylesheet" type="text/css">
<link href="/css/jgh/style.css" rel="stylesheet" type="text/css">
</head>

<body>

	<%@include file="../inc/header.jsp"%>

	<div style="height: 1200px; background: lightBLUE;" >

		<%@include file="duoSearch/duoMain.jsp"%>


	</div>
	<h2 align="left">수정삭제와 같이 눌리는 모달 수정요망</h2>
	<h2 align="left">모달 내용 완료// 승낙 및 채팅구현시작</h2>
	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->


	<script defer src="/js/jgh/jsduo/duoDeleteSave.js"></script>
	<script defer src="/js/jgh/jsduo/duoModal.js"></script>
	<script defer src="/js/jgh/jsduo/duoPort.js"></script>
	<script defer src="/js/jgh/jsduo/duoShow.js"></script>
	<script defer src="/js/jgh/jsduo/duoChatting.js"></script>
</body>

</html>