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
						<label for="userId">아이디</label> <input type="text" id="userId"
							name="userId"> <span id="checkId">아이디를 적어주세요</span> <label
							for="userPw">패스워드</label> <input type="password" id="userPw"
							name="userPw"> <span id="checkPw"></span>

						<!-- <span>이메일 </span> -->
						<div id="mail_input" name="mail_input">
							<input type="text" name="mail" id="mail" placeholder="이메일 입력">
							<button type="button" id="sendBtn" name="sendBtn"
								onclick="sendNumber()">인증번호</button>
						</div>
						<br>
						<div id="mail_number" name="mail_number" style="display: none">
							<input type="text" name="number" id="number"
								placeholder="인증번호 입력">
							<button type="button" name="confirmBtn" id="confirmBtn"
								onclick="confirmNumber()">이메일 인증</button>
						</div>
						<br> <input type="text" id="Confirm" name="Confirm"
							style="display: none" value="">
</body>




<hr>
<input type="submit" value="회원가입" id="joinBtn">
<input type="button" id="membermain" value="메인으로">
</form>


</div>
</div>
</div>
</div>
<script defer src="/js/aCommon/member.js"></script>
<script defer src="/js/aCommon/common.js"></script>
<script defer src="/js/aCommon/email.js"></script>

</body>
</html>