<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
	<%@include file="../inc/header.jsp"%>
	<!-- <div style="height: 1000px; background: lightpink;"> -->
	<!-- <h1>정혜린 페이지 입니다.내용 미정</h1> -->
	<!-- <div> -->
	<h1>챔피언 분석</h1>
	<div class="contents">



		<div class="aside left">여백</div>
		<div class="contentsItems">
			<div class="contentsItem Search">
			<div class=search_line_champ>
				<div class="search_c">
					<input type="text" id="champSearch" placeholder="search"> <img
						alt="제작자: Ayub Irawan - Flaticon "
						src="/img/jhl/free-icon-magnifier-2319177.png" width="30px"
						height="30px">
				</div>
				<div class="selectChampline">
<!-- 				<div class="lines All" id="all" onclick="champLine(this.id)"><span>All</span></div> -->
				<div class="lines Top" id="top" name="top" onclick="champLine(this.id)"><span><img src="/img/jhl/positionImg/Position_Plat-Top.png">탑</span></div>
				<!--  this 사용하면 div에 모든 게 반환됨-->
				<div class="lines Jug" id="jug" name="jug" onclick="champLine(this.id)"><span><img src="/img/jhl/positionImg/Position_Plat-Jungle.png">정글</span></div>
				<div class="lines Mid" id="mid" name ="mid" onclick="champLine(this.id)"><span><img src="/img/jhl/positionImg/Position_Plat-Mid.png">미들</span></div>
				<div class="lines Bot" id="adc" name="bot" onclick="champLine(this.id)"><span><img src="/img/jhl/positionImg/Position_Plat-Bot.png">바텀</span></div>
				<div class="lines Sup" id="sup" name="sup" onclick="champLine(this.id)"><span><img src="/img/jhl/positionImg/Position_Plat-Support.png">서폿</span></div>
				</div>
			</div>				
				<div class="champImgItems">
					<div class="se">
						<div class="champs">
							<c:forEach var="champImg" items="${champListImg}" >
								<div class="champImgItem">
									<div class="cimgs">
										<img width="48" height="48" alt="${champImg.champion_name_kr}"
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
			<div class="contentsItem LineRank">

				<div class="LineB">
					<button class="seletB Top">탑</button>
					<button class="seletB Jug">정글</button>
					<button class="seletB Mid">미들</button>
					<button class="seletB Bot">바텀</button>
					<button class="seletB Sup">서폿</button>
				</div>
				<div>랭킹 / 챔피언 / 승률 / 픽률 table 만들 예정</div>
				<div>라인별 (승률/픽률 등)랭크 테이블</div>
			</div>
		</div>


		<div class="aside right">여백</div>
	</div>

	<%@include file="../inc/footer.jsp"%>
</body>



</html>