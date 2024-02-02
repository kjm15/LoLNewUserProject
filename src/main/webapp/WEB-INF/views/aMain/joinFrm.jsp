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

<script defer src="/js/aCommon/common.js"></script>

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
				<div class="eula">By logging in you agree to the ridiculously
					long terms that you didn't bother to read</div>
			</div>
			<div class="right">

				<div class="form">
					<form action="/member/join" method="post">
						<label for="userId">아이디</label> 
						<input type="text" id="userId"
							name="userId"> <label for="userPw">패스워드</label> 
							<input
							type="password" id="userPw" name="userPw"> 
							<input
							type="submit" value="회원가입">
					</form>
				</div>
			</div>
		</div>
	</div>


</body>
</html>