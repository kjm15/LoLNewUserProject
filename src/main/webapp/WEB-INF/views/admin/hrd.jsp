
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>인사담당자 페이지</title>
<!-- css들어갈자리  -->

</head>
<body>

	<%@include file="../inc/header.jsp"%>
	<a href="/admin/mng"> 메인으로 가기</a> [[인사담당관 출입가능.]]
	<div class="memberC">

		<div class="memberCR">
			권한시작
		</div>
		<div class="memberCl">
			<div id="memberTable"></div>
		</div>

	</div>




	<script defer src="/js/admin/hrd.js"></script>





</body>
</html>