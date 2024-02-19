<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>aitest</title>


</head>
<body>



<h1>이곳은ai테스트페이지입니다..</h1>


<form action="/py/aicheck" method = "post">
<input type = "text" placeholder="cs 개수를 입력해주세요" name = "cs">
<input type = "text" placeholder="와드 개수를 입력해주세요" name = "ward">
<input type = "submit" value = "눌러주세요" />
</form> 
<button><a href = "/">메인으로 이동</a></button>
<pyscript>




</pyscript>

</body>
</html>