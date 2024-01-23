<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>송태민</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- css들어갈자리  -->
</head>
<body>
<%@include file="../inc/header.jsp" %>
<div style="height: 700px; background: lightpink;">
<div align="center">
<!-- <form action="/matchList/find" method="post"> -->
<input type="text" id="gameName" name="gameName" placeholder="아이디" value="깡통차기국내1위">
<input type="text" id="tagLine" name ="tagLine" placeholder="태그" value="KR1">
<button id="getpuuid">검색</button>
<!-- </form> -->
</div>
<div id="puuid"></div>
</div>
<%@include file="../inc/footer.jsp" %>

<!-- js들어갈자리  -->
<script defer src ="/js/stm/joinId.js"></script>
</body>
<script type="text/javascript">
$("#getpuuid").on("click", function () {
	let gameName = $('#gameName').val();
	let tagLine = $('#tagLine').val();
	data  = {'gameName':gameName,'tagLine':tagLine}	
	let str = ''
	$.ajax({
		type : 'post',
		url : '/matchList/find',
		data : data,
		
		success : function(res){
			
			$('#puuid').html(res)		
			
		}
	})
})

</script>
</html>