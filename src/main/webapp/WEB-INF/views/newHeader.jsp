<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<link href="/css/newMain.css" rel="stylesheet">
</head>
<body>
<header>
			<div class="navbars">
				<div class="navbarMain">
					<a href="/">DATABOOM</a>
				</div>
				<c:choose>
					<c:when test="${userId != null}">
					<div class="navbarLogin">
						<div class="navChoice"><span>${userId}님 접속중</span></div>
						<div class="navChoice"><a href="/Note">메일함</a></div>
						<div class="navChoice"><a href="#">결제하기</a></div>
						<div class="navChoice"><a href="/member/logout">로그아웃</a></div>
					</div>
					</c:when>
					<c:otherwise>
						<div class="navbarLogin">
							<a href="/member/login">로그인</a>
						</div>
					</c:otherwise>
				</c:choose>


			</div>
			<div class="headerItmes">
				<div class="navMenu home">
					<a href="/">홈</a>
				</div>
				<div class="navMenu duo">
					<a href="/jgh" class="active">듀오찾기</a>
				</div>
				<div class="navMenu">
					<a href="/kdg">김동근</a>
				</div>
				<div class="navMenu">
					<a href="/kjm">김진문</a>
				</div>
				<div class="navMenu">
					<a href="/stm">송태민</a>
				</div>
				<div class="navMenu">
					<a href="/kyt">김윤태</a>
				</div>
				<div class="navMenu">
					<a href="/jhl">정혜린</a>
				</div>
			</div>
		</header>

</body>
</html>