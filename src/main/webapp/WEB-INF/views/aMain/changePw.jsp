<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action = "/member/changePw" method="post">
데이터붐 아이디 : ${memberDto.userId}<br>
<input type ="hidden" class = "password" name = "userId" id ="userId" value = "${memberDto.userId}">
<input type ="password" class = "password" name = "userPw" id ="userPw" placeholder="새 비밀번호"><br>
<input type ="password" class = "password" name = "passwordcheck" id ="passwordcheck" placeholder="새 비밀번호 확인">
<input type = "submit" value = "확인" id = "changePwBtn">
</form>

</body>
</html>