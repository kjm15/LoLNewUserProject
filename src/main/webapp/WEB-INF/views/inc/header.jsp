<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<header>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
		crossorigin="anonymous">
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
		integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
		integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
		crossorigin="anonymous"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<link href="/css/newMain.css" rel="stylesheet">

	<link href="/css/jgh/modal.css" rel="stylesheet" type="text/css">
	<link href="/css/common/roulette.css" rel="stylesheet" type="text/css">
	<script defer src="/js/aPayment/payment.js"></script>
	<script defer src="/js/aCommon/roulette.js"></script>

	<script defer src="/js/stm/loldata.js"></script>
	<script defer src="/js/stm/RiotGameTable.js"></script>



	<div class="navbars">
		<div class="navbarMain">
			<a href="/">DATABOOM</a>
		</div>
		<div class="navMenuDuo">
			<a href="/jgh">영혼의Duo</a>
		</div>
		<c:if test="${searchbox == null}">
			<div class="search-contents1">
				<div class="search-itmes1">
					<div class="sc-dataBoom">
						<span class="sp teamname">DATABOOM</span>
					</div>
					<div class="sc-kr1">
						<span class="sp korea">KR1</span>
					</div>
					<div class="search-home1">
						<input type="text" class="search-home11" id="search-home"
							placeholder="플레이어이름 + #KR1" value="">
					</div>
					<div class="searchBoom1">
						<button id="searchBoom" class="searchBoom11">BOOM</button>
					</div>
				</div>
			</div>
		</c:if>
		<c:choose>
			<c:when test="${userId != null}">
				<div class="navbarLogin">
					<!-- 					<div class="navChoice"> -->
					<%-- 						<span>${userId}님 접속중</span> --%>
					<!-- 					</div> -->
					<div class="navChoice">
						<a href="/member/mypage">${userId}님</a>
					</div>
					<!-- 					<div class="navChoice"> -->
					<!-- 						<a href="/Note">메일함</a> -->
					<!-- 					</div> -->

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

	<div class="headerItmes">
		<div class="navMenu home">
			<a href="/">홈</a>
		</div>
		<div class="navMenu">
			<a href="/jhl" class="active">초보자Tip!</a>
		</div>

		<div class="navMenu">
			<a href="/kdg">아이템 분석</a>
		</div>
		<div class="darkmod_checkbox">
			<div class="toggle_box">
				<input type="checkbox" id="toggle" class="darkmod_toggle" hidden>

				<label for="toggle" class="toggleSwitch"> <span
					class="toggleButton"></span>
				</label>
			</div>
			<div class="TS_name_box">
				<p>다크모드</p>
			</div>
		</div>


		<!-- 		<c:if test="${userId != null}">-->


		<!-- 			<div class="navMenu duo"> -->
		<!-- 				<a href="#" id="rouletteStart">룰렛하기</a> -->

		<!-- 			</div> -->
		<!-- &nbsp;&nbsp;&nbsp; -->
		<!-- 			<div id="progress-container"> -->
		<!-- 				<div id="progress-bar"></div> -->
		<!-- 			</div> -->
		<!-- 			<div> -->
		<!-- 				<span ></span>	&nbsp;&nbsp;&nbsp;[남은]횟수<span id=roulette></span> -->
		<!-- 			</div> -->

		<!-- 		</c:if> -->

	</div>

	<div id="app" class="aaa"></div>



	<%@include file="modal4.jsp"%>
	<input type="hidden" id="gameName" value="${gameName}" /> <input
		type="hidden" id="userId" value="${userId}" />

</header>