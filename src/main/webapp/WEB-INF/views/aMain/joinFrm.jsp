<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Font online-->
<link href="https://fonts.googleapis.com/css?family=Open+Sans"
	rel="stylesheet">

<!--        Animate.css-->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">



<link href="/css/common/login.css" rel="stylesheet" type="text/css">
<!-- Google JQuery CDN -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>



</head>
<body>

	<div class="page">
		<div class="container">
			<div class="left">
				<div class="login">회원가입</div>
				<div class="eula">데이터붐 회원가입 페이지입니다.</div>
			</div>
			<div class="right">

				<div class="form">
					<form action="/member/join" method="post">
						<label for="userId">아이디</label> 
						<input type="text" id="userId" name="userId"> <span id = "checkId">아이디를 적어주세요</span>
						<label for="userPw">패스워드</label> 
						<input 	type="password" id="userPw" name="userPw">  <span id = "checkPw"></span>
						<input 	type="submit" value="회원가입" id = "joinBtn">
						<input type="button" id = "membermain" value="메인으로">
					</form>
					
					
				</div>
			</div>
		</div>
	</div>
<script defer src="/js/aCommon/member.js"></script>
<script defer src="/js/aCommon/common.js"></script>
</body>
</html>