<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<script defer src="js/jhl/champ/champRank.js"></script>
<script defer src="js/jhl/champ/champUpdate.js"></script>
<script defer src="js/jhl/champ/champCounter.js"></script>
<script defer src="js/jhl/champ/champChart.js"></script>
</head>
<body>
	<!-- 	<h3>카운터 챔피언 제대로 구하려면 100만개 데이터 필요...</h3> -->


	<div class="rankContainer">
		<!-- 		<div class="aside left"></div> -->
		<div class="contentsRank">
			<div class="contentsItemsChamp">
				<c:if test="${userId eq 'jhl'}">
					<div class="rankUpdateBtn">
						<input type="button" id="jhlRankUpdateBtn" onclick="tierUpdate()"
							value="관리자용업데이트버튼" />
					</div>
				</c:if>

				<!-- 				장기훈 -->



				<div class = championGraphContainer>
					<div class="myImg"></div>
					<div class='box-left'>
						<div style="max-width: 300px;" id="myChart1"></div>
					</div>
					<div class='box-center'>
						<div style="max-width: 300px" id="myChart2"></div>
					</div>
					<div class='box-right'>
						<div style="max-width: 1000px" id="myChart3"></div>
					</div>
					<div class='box-side'></div>
				</div>


				<!-- 장기훈 -->

				<div class="rankbanner">배너?</div>
				<div class="contentChampRank">
					<%@include file="champImg.jsp"%>
					<div class="contentsItem LineRank">
						<div class="sc-champTier">
							<span class="sc-rk-title">챔피언 랭킹</span>
							<div class="sc-champTieritems">
								<select id="rankSelect" onchange="tierSelect()">
									<option value="bronze" id="bronze">Bronze+
									<option value="silver" id="silver">Silver+
									<option value="gold" id="gold">Gold+
									<option value="platinum" id=platinum>Platinum+
									<option value="emerald" id="emerald" selected="selected">Emerald+


									
									<option value="diamond" id="diamond">Diamond+
								</select> <select id="rankSelectLanguage">
									<option value="KR" id="KR">KR
								</select>
							</div>
						</div>

						<div class="rankTable">
							<div class="rankLine">
								<div class="rankSearch ranklineBtn">
									<span id="Top" onclick="champRank('Top')"><img
										src="/img/jhl/positionImg/Position_Plat-Top.png">탑</span>
								</div>
								<div class="rankSearch">
									<span id="jug" onclick="champRank('jug')"><img
										src="/img/jhl/positionImg/Position_Plat-Jungle.png">정글</span>
								</div>
								<div class="rankSearch">
									<span id="mid" onclick="champRank('mid')"><img
										src="/img/jhl/positionImg/Position_Plat-Mid.png">미들</span>
								</div>
								<div class="rankSearch">
									<span id="adc" onclick="champRank('adc')"><img
										src="/img/jhl/positionImg/Position_Plat-Bot.png">바텀</span>
								</div>
								<div class="rankSearch">
									<span id="sup" onclick="champRank('sup')"><img
										src="/img/jhl/positionImg/Position_Plat-Support.png">서폿</span>
								</div>

							</div>
							<div class="lineRank">
								<div class="rankItems">
									<table class="Rankable">
										<colgroup>
											<col width="10%">
											<col width="30%">
											<col width="20%">
											<col width="20%">
											<col width="20%">

										</colgroup>
										<thead>
											<tr class="tableColumns">
												<th class="th-rtable"><div class='sc-rth'>
														<span>랭킹</span>
													</div></th>
												<th class="th-rtable"><div class='sc-rth'>
														<span>챔피언</span>
													</div></th>
												<th class="th-rtable"><div class='sc-rth'>
														<span>승률</span>
													</div></th>
												<th class="th-rtable"><div class='sc-rth'>
														<span>픽률</span>
													</div></th>
												<th class="th-rtable"><div class='sc-rth'>
														<span>밴률</span>
													</div></th>
											</tr>
										</thead>
										<tbody class="rTableBody">
											<tr class="rTable">
												<td class="rData"></td>
												<td class="rData"></td>
												<td class="rData"></td>
												<td class="rData"></td>

											</tr>
										</tbody>
									</table>
								</div>
							</div>



						</div>
					</div>

				</div>
			</div>
		</div>
		<!-- 		<div class="aside right"></div> -->
	</div>
</body>


</html>