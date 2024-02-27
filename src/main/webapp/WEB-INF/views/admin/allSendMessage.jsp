<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script defer src="/js/kjm/Note/inqAdmin.js"></script>
</head>
<body>
<button id = "test">버튼</button>
<form id = "allSend" action = "/sendToAllMembers" method="post">
<div id = "memberl">
<input type = "hidden" name = "recv_userId" id="recv_userId" value ="">
<input type = "hidden" name = "send_userId" id = "send_userId" value = "${userId}">
<input type = "text" name = "n_title" id = "n_title">
<textarea name = "n_message" id = "n_message" rows ="4" cols ="50"></textarea>
  
 <select name="recv_userId" id="recv_userId">
<option value="recv_userId"></option>
 </select>
<button type = "submit">발송</button>
</div>
</form>
</body>
</html>