
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>송태민</title>
<!-- css들어갈자리  -->
</head>
<body>

<%@include file="../inc/header.jsp" %>
<div style="height: 700px; background: lightpink;">
<div align="center">
<form action="/matchList/find" method="post">
<input type="text" id="gameName" name="gameName" placeholder="아이디" value="깡통차기국내1위">
<input type="text" id="tagLine" name ="tagLine" placeholder="태그" value="KR1">
<button>검색</button>
</form>
</div>




</div>
<%@include file="../inc/footer.jsp" %>

<!-- js들어갈자리  -->
<script defer src ="/js/stm/joinId.js"></script>
</body>

</html>