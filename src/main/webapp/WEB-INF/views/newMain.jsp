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
<link href="/css/newMain.css" rel="stylesheet">
</head>
<body>
	<div class="main">
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

		<section>
			<div class="contents">
				<div class="contentsItems">
					<div class="logo-item">
						<img alt="" src="/img/jhl/logo.png" width="300px" height="204px">
					</div>
					<div class="search-contents">
						<div class="search-itmes">
							<div class="sc-dataBoom">
								<span class="sp teamname">DATABOOM</span>
							</div>
							<div class="sc-kr">
								<span class="sp korea">KR1</span>
							</div>
							<input type="text" id="search-home" placeholder="플레이어이름 + #KR1">

							<button id="searchBoom">BOOM</button>
						</div>
					</div>
					<div class="black-box">빈칸</div>

				</div>
			</div>


		</section>
		<footer class="footer-bottom">
			<h2>데이터 붐</h2>
			<span>장기훈 김동근 김진문 김윤태 송태민 정혜린</span>
			
			<div>인천일보아카데미</div>
			<div>인천광역시 미추홀구 매소홀로488번길 6-32 태승빌딩 5층</div>
		</footer>
	</div>
</body>
</html>