<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<!-- 	<div style="height: 1000px; background: rgba(0, 0, 0, 0);"> -->

	<div class="navbars">
		<div class="navbarMain">
			<a href="/">DATABOOM</a>
		</div>

		<c:choose>
			<c:when test="${userId != null}">
				<div class="navbarLogin">
					<div class="navChoice">
						<span>${userId}님 접속중</span>
					</div>
					<div class="navChoice">
						<a href="/member/mypage">마이페이지</a>
					</div>
					<div class="navChoice">
						<a href="/Note">메일함</a>
					</div>
					<!-- 					 <div id="app"></div> -->
					<div class="navChoice" id="modal_test">
						<a href="javascript:openModal()">결제하기</a>
					</div>
					<div class="navChoice">
						<a href="/member/logout">로그아웃</a>
					</div>
				</div>
			</c:when>
			<c:otherwise>
				<div class="navbarLogin">
					<a href="/member/login">로그인</a>
				</div>
			</c:otherwise>
		</c:choose>


	</div>
	<div class="profile">
		<div class="pline1">
			<div class="pline1-1">
				<p>내 프로필</p>
			</div>
			<div class="pline1-2">
				<button type="button" class="changebutton">정보수정</button>
			</div>
		</div>
		<div class="pline2">
			<p>${mlist.userName}</p>
		</div>
		<div class="pline2">
			<p>${mlist.userId}</p>
		</div>
		<div class="pline2">
			<div class = "emailimg"></div>
			<div class = "pline2text">${mlist.userEmail}</div>
		</div>
		<div class="pline2">
			<p>포인트 ${mlist.userPoint}</p>
		</div>
		<div class="pline2">
			<p>비밀번호 변경</p>
		</div>

	</div>







	<!-- 	</div> -->
</body>
</html>