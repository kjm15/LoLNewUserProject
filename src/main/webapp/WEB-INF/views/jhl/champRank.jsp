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
	<h1>챔피언 랭크</h1>
	<div class="contents">



		<div class="aside left"></div>
		<div class="contentsItems">
			<div class="contentsItem Search">
				<div class=search_line_champ>
					<div class="search_c">
						<input type="text" id="champSearch" placeholder="search">
						<img alt="제작자: Ayub Irawan - Flaticon "
							src="/img/jhl/free-icon-magnifier-2319177.png" width="30px"
							height="30px">
					</div>
					<div class="selectChampline">
						<!-- 				<div class="lines All" onclick="/champListImg"><span><img src="/img/jhl/positionImg/Position_Plat-All.png">전체</span></div> -->
						<div class="lines Top" id="top" name="top"
							onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Top.png">탑</span>
						</div>
						<!--  this 사용하면 div에 모든 게 반환됨-->
						<div class="lines Jug" id="jug" name="jug"
							onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Jungle.png">정글</span>
						</div>
						<div class="lines Mid" id="mid" name="mid"
							onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Mid.png">미들</span>
						</div>
						<div class="lines Bot" id="adc" name="bot"
							onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Bot.png">바텀</span>
						</div>
						<div class="lines Sup" id="sup" name="sup"
							onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Support.png">서폿</span>
						</div>
					</div>
				</div>
				<div class="champImgItems">
					<div class="se">
						<div class="champs">
							<c:forEach var="champImg" items="${champListImg}">
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
				<div
					style="text-align: center; height: 60px; border: 1px solid #8CB9FC; display: flex; align-items: center; margin-bottom: 10px; justify-content: center">
					챔피언 랭킹 <select>
						<option value="Emerald+">Emerald+
						<option value="Diamond+">Diamond+
						<option value="Master+">Master+
						<option value="Challenger+">Challenger+
					</select>
				</div>

				<div class="RankTable" style="border: 1px solid #8CB9FC;">
					<div
						style="text-align: center; border-bottom: 1px solid #8CB9FC; height: 50px; display: flex; align-items: center;">
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Top.png">탑</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Jungle.png">정글</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Mid.png">미들</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Bot.png">바텀</span>
						</div>
						<div class="rankSearch">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Support.png">서폿</span>
						</div>
					</div>
					<div class="lineRankTable">라인별 (승률/픽률 등)랭킹 테이블</div>
					
				</div>
			</div>
		</div>


		<div class="aside right"></div>
	</div>

	<%@include file="../inc/footer.jsp"%>
</body>



</html>