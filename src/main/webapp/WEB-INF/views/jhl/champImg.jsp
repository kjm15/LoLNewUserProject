<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
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
</body>
</html>