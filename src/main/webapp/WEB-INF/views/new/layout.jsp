<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<header class="selectlist">
			<div class="select"></div>
			<div class="select"></div>
			<div class="select"></div>
		</header>
		<!-- 좌우감싼곳 -->
		<div class="maincontainer">
			<!-- 챔피언 이미지?들 -->
			<div class="mainleft">
				<!-- vs챔피언 -->
				<div class="championselect" id="champbox">
					<!-- 챔피언사진 -->
					<div class="championvs" id="champimgbox">
						<div class="championimg" id="myChampion">
							<img id="myChamp" onclick="javascript:champ(this.id)"
								src="../img/champ.jpg"></img>
						</div>
						<div class="vs">
							<img id="vs" src="../img/versus.png"></img>
						</div>
						<div class="championimg" id="enemyChampion">
							<img id="enemyChamp" onclick="javascript:champ(this.id)"
								src="../img/champ.jpg"></img>
						</div>

					</div>
					<!-- 챔피언 이름 -->
					<div class="championname" id="champnamebox">
						<div class="champname" id="champname1">내챔</div>
						<div class="gongback" id="gongback"></div>
						<div class="champname" id="champname2">상대챔</div>
					</div>
				</div>
				<!-- 챔피언 검색 -->
				<div class="champsearch" id="searchbox">
					<div class="searchbox" id="search">
						<input type="text" id="searchChamp" name="searchChamp"
							placeholder="ex) 가렌, garen, ㄱㄹ...">
					</div>
				</div>
				<!-- 라인 버튼 -->
				<div class="lineselect" id="line">
					<div class="img" id="topimg">
						<img id="top" class="positionICN" src="../img/top.png" name="top"
							onclick="line(this.id)">

					</div>
					<div class="img" id="jugimg">
						<img id="jug" class="positionICN" src="../img/jug.png" name="jug"
							onclick="line(this.id)">

					</div>
					<div class="img" id="midimg">
						<img id="mid" class="positionICN" src="../img/mid.png" name="mid"
							onclick="line(this.id)">

					</div>
					<div class="img" id="adcimg">
						<img id="adc" class="positionICN" src="../img/adc.png" name="adc"
							onclick="line(this.id)">

					</div>
					<div class="img" id="supimg">
						<img id="sup" class="positionICN" src="../img/sup.png" name="sup"
							onclick="line(this.id)">

					</div>
				</div>
				<!-- 챔피언리스트 -->
				<div class="champlist">
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
										<span class="champName1">${champImg.champion_name_kr}</span>
									</div>
								</c:forEach>
							</div>
						</div>



					</div>
				</div>
			</div>
			<!-- tier와 ajax -->
			<div class="mainright">
				<!-- 티어 -->
				<div class="mid-header">
					<button id="anBtn">분석하기</button>
					<button class="tier" id="iron" onclick="tier(this.id)">
						<img src="../img/tier/iron.png" style="width: 30px; height: 30px;">
						아이언
					</button>
					<button class="tier" id="bronze" onclick="tier(this.id)">
						<img src="../img/tier/bronze.png"
							style="width: 30px; height: 30px;"> 브론즈
					</button>
					<button class="tier" id="silver" onclick="tier(this.id)">
						<img src="../img/tier/silver.png"
							style="width: 30px; height: 30px;"> 실버
					</button>
					<button class="tier" id="gold" onclick="tier(this.id)">
						<img src="../img/tier/gold.png" style="width: 30px; height: 30px;">
						골드
					</button>
					<button class="tier" id="platinum" onclick="tier(this.id)">
						<img src="../img/tier/platinum.png"
							style="width: 30px; height: 30px;"> 플래티넘
					</button>
					<button class="tier" id="emerald" onclick="tier(this.id)">
						<img src="../img/tier/emerald.png"
							style="width: 30px; height: 30px;"> 에메랄드
					</button>
					<button class="tier" id="diamond" onclick="tier(this.id)">
						<img src="../img/tier/diamond.png"
							style="width: 30px; height: 30px;"> 다이아몬드
					</button>
					<button class="tier" id="master" onclick="tier(this.id)">
						<img src="../img/tier/master.png"
							style="width: 30px; height: 30px;"> 마스터
					</button>
					<button class="tier" id="grandmaster" onclick="tier(this.id)">
						<img src="../img/tier/grandmaster.png"
							style="width: 30px; height: 30px;"> 그랜드마스터
					</button>
					<button class="tier" id="challenger" onclick="tier(this.id)">
						<img src="../img/tier/challenger.png"
							style="width: 30px; height: 30px;"> 챌린저
					</button>
				</div>
				<!--ajax  -->
				<div class="cbox" id="champListbox">
					<div id="champList">
						<ul>
							<c:forEach var="cham" items="${list}">
								<li><img id="${cham.champion_name}"
									src="https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/${cham.champion_name}.png"
									width="77" height="77" alt="${cham.champion_name}"
									class="bg-image" onclick="javascript:submit(this.id)"> <span>${cham.champion_name_kr}</span>
								</li>
							</c:forEach>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>