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
			<%@include file="champImg.jsp"%>
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
								src="/img/jhl/positionImg/Position_Plat-Top.png" id="Top"
								>탑</span>
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
					<div class="lineRankTable">
					<div class = "rankItems">
					<table>
						<tr>

							<td>${rankList}</td>
							<td>g</td>
							<td>g</td>

						</tr>
					</table>
					</div>
					</div>

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