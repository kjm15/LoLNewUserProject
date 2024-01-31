
<!DOCTYPE HTML>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<head>
<title>데이터붐</title>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="new/assets/css/main.css" />
<link rel="stylesheet" href="new/assets/css/div.css" />
<link rel="stylesheet" href="new/assets/css/kdg.css" />
<link rel="stylesheet" href="new/assets/css/jhl.css" />






</head>
<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Header -->
		<header id="header" class="alt">

			<h1>데이터 붐입니다.</h1>
		</header>
		<span class="logo"><img src="images/logo.svg" alt="" /></span>
		<h1 align="center">태민이 검색바</h1>



		<!-- 			송태민시작 -->

		<div class="tcontainer">
			<div class="tleft">
				<input type="text" id="gameName" name="gameName" placeholder="아이디"
					value="깡통차기국내1위">
			</div>
			<div class="tcenter">
				<input type="text" id="tagLine" name="tagLine" placeholder="태그"
					value="KR1">
			</div>
			<div class="tright">
				<input type="button" id="getpuuid" value="검색">

			</div>
		</div>

		<p></p>



		<!-- 			송태민끝 -->



		<!-- Nav -->
		<nav id="nav">
			<ul>
				<li><a href="/jgh" class="active">장기훈</a></li>
				<li><a href="/kdg">김동근</a></li>
				<li><a href="/kjm">김진문</a></li>
				<li><a href="/stm">송태민</a></li>
				<li><a href="/kyt">김윤태</a></li>
				<li><a href="/jhl">정혜린</a></li>
				<li><a href="/admin">관리자용</a></li>
			</ul>
		</nav>

		<!-- Main -->
		<div id="main">

			<!-- Introduction -->
			<section id="intro" class="main">


				<div id='container'>
					<div id='box-left'>

						<div id="myChampion" class="champimg1">
							<div id='container1'>
								<div id='bleft'>
									<img id="myChamp" onclick="javascript:champ(this.id)"
										src="../img/champ.jpg"></img>
								</div>
								<div id='bcenter'>
									<img id="vs" src="../img/versus.png"></img>

								</div>
								<div id='bright'>

									<img id="enemyChamp" onclick="javascript:champ(this.id)"
										src="../img/champ.jpg"></img>
								</div>
							</div>

						</div>
						<div class="jhl1">
							<p align="center">그거 아시나요?</p>
							<!-- 						정혜린시작 -->


							<div class="contentsItem Search">
								<div class=search_line_champ>
									<div class="search_c">
										<input type="text" id="champSearch" placeholder="search">
										<img alt="제작자: Ayub Irawan - Flaticon "
											src="/img/jhl/free-icon-magnifier-2319177.png" width="30px"
											height="30px">
									</div>
									<div class="selectChampline">
										<div class="lines All" onclick="/champListImg">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-All.png"></span>
										</div>
										<div class="lines Top" id="top" name="top"
											onclick="champLine(this.id)">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-Top.png"></span>
										</div>
										<!--  this 사용하면 div에 모든 게 반환됨-->
										<div class="lines Jug" id="jug" name="jug"
											onclick="champLine(this.id)">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-Jungle.png"></span>
										</div>
										<div class="lines Mid" id="mid" name="mid"
											onclick="champLine(this.id)">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-Mid.png"></span>
										</div>
										<div class="lines Bot" id="adc" name="bot"
											onclick="champLine(this.id)">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-Bot.png"></span>
										</div>
										<div class="lines Sup" id="sup" name="sup"
											onclick="champLine(this.id)">
											<span><img
												src="/img/jhl/positionImg/Position_Plat-Support.png"></span>
										</div>
									</div>
								</div>
								<div class="champImgItems">
									<div class="se">
										<div class="champs">
											<c:forEach var="champImg" items="${champListImg}">
												<div class="champImgItem">
													<div class="cimgs">
														<img width="48" height="48"
															alt="${champImg.champion_name_kr}"
															src="https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${champImg.champion_name}.png"
															class="championImg">
													</div>
													<span class="champName">${champImg.champion_name_kr}</span>
												</div>
											</c:forEach>
										</div>
									</div>
								</div>
							</div>
							<!-- 						정혜린끝 -->
						</div>
					</div>

					<div id='box-center'>가운데</div>
					<div id='box-right'>오른쪽</div>
				</div>



			</section>


		</div>
</body>
<!-- Footer -->
<footer id="footer">
	<section>
		<h2>데이터붐</h2>
		<p>장기훈 김동근 김진문 김윤태 송태민 정혜린</p>
		<ul class="actions">
			<li><a href="generic.html" class="button">Learn More</a></li>
		</ul>
	</section>
	<section>
		<h2>더 알고 싶은거?</h2>
		<dl class="alt">
			<dt>주소</dt>
			<dd>인천시</dd>
			<dt>Phone</dt>
			<dd>(000) 000-0000 x 0000</dd>
			<dt>Email</dt>
			<dd>
				<a href="#">databoom@google.com</a>
			</dd>
		</dl>
		<ul class="icons">
			<li><a href="#" class="icon brands fa-twitter alt"><span
					class="label">Twitter</span></a></li>
			<li><a href="#" class="icon brands fa-facebook-f alt"><span
					class="label">Facebook</span></a></li>
			<li><a href="#" class="icon brands fa-instagram alt"><span
					class="label">Instagram</span></a></li>
			<li><a href="#" class="icon brands fa-github alt"><span
					class="label">GitHub</span></a></li>
			<li><a href="#" class="icon brands fa-dribbble alt"><span
					class="label">Dribbble</span></a></li>
		</ul>
	</section>
	<p class="copyright">&copy; databoom</p>
</footer>

</div>

<!-- Scripts -->
<script src="new/assets/js/jquery.min.js"></script>
<script src="new/assets/js/jquery.scrollex.min.js"></script>
<script src="new/assets/js/jquery.scrolly.min.js"></script>
<script src="new/assets/js/browser.min.js"></script>
<script src="new/assets/js/breakpoints.min.js"></script>
<script src="new/assets/js/util.js"></script>
<script src="new/assets/js/main.js"></script>
<script src="new/assets/js/jhl.js"></script>
</body>
</html>
