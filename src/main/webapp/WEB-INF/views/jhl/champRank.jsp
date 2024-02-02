<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
.w {
	position: relative;
	display: block;
}

.w .tooltiptext {
	visibility: hidden;
	width: 300px;
	background-color: #8CB9FC;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 1;
}

.w:hover .tooltiptext {
	visibility: visible;
}

.w .tooltip-right {
	top: -5px;
	left: 25%;
}

.w .tooltiptext::after {
	content: " "; /* 정사각형 영역 사용 */
	position: absolute; /* 절대 위치 사용 */
	border-style: solid;
	border-width: 6px; /* 테두리 넓이를 5px 로 설정 */
}

.w .tooltip-right::after {
	top: 50%;
	right: 100%;
	margin-top: -5px;
	border-color: transparent #8CB9FC transparent transparent;
}
</style>
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
						<div class="lines All" id="champAll">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-All.png"></span>
						</div>
						<div class="lines Top" id="top" onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Top.png"></span>
						</div>
						<!--  this 사용하면 div에 모든 게 반환됨-->
						<div class="lines Jug" id="jug" onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Jungle.png"></span>
						</div>
						<div class="lines Mid" id="mid" onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Mid.png"></span>
						</div>
						<div class="lines Bot" id="adc" onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Bot.png"></span>
						</div>
						<div class="lines Sup" id="sup" onclick="champLine(this.id)">
							<span><img
								src="/img/jhl/positionImg/Position_Plat-Support.png"></span>
						</div>
					</div>
				</div>
				<div class="champImgItems">
					<div class="se">
						<div class="champs"></div>
						<div class='cimgs'></div>
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

				<div class="rankTable">
					<div class="rankLine"
						style="text-align: center; height: 50px; display: flex; align-items: center;">
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
					<div class="lineRankTable">라인별 (티어 에메랄드로 테스트용 데이터 받고 있는 중)랭킹 테이블 만들곳</div>
					<div class="w">
						전체버튼도 생성함<span class="tooltiptext tooltip-right"> 툴팁사용해보기</span>
					</div>

				</div>
			</div>

		</div>
		<div class="aside right"></div>
	</div>


	<%@include file="../inc/footer.jsp"%>
</body>



</html>