<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>



				<input type="hidden" name="send_userId" id="send_userId" value ="${userId }">
				<input type="hidden" name="recv_userId" id="recv_userId" value ="admin">
				<input type="hidden" name="status" id="status" value ="완료">
				<input type="text" name="n_title" id="n_title" value="${n_title }">
				<textarea rows="6" cols="35" name="n_message" id="n_message">
				
				안녕하세요 신뢰의databoom입니다.
				</textarea>
</body>
</html>