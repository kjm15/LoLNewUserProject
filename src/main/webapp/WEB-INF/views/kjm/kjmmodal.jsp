<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>**메일**</h1>
<form action="/send" method="post">
보내는사람${userId }<br>
받는사람<input type ="text" name ="sendId" id="sendId"><br>
제목<input type ="text" name ="n_title"><br>
내용<textarea rows="6" cols="35" name="n_message"></textarea><br>
<input type="submit" value ="보내기">
</form>
</body>
</html>