<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<script defer src="js/jhl/champ/champRank.js"></script>
<script defer src="js/jhl/champ/champUpdate.js"></script>
<script defer src="js/jhl/champ/champCounter.js"></script>
</head>
<body>

	<c:if test="${userId eq 'jhl'}">
		<div class="rankUpdateBtn">
			<input type="button" id="jhlRankUpdateBtn" onclick="champUpdate()"
				value="관리자용업데이트버튼" />
		</div>
	</c:if>

	<div class="rankContainer">
		<div class="bannerC">배너</div>
		<div class="contentsRank">
			<div class="aside left"></div>
			<div class="contentsItemsChamp">
				<%@include file="champImg.jsp"%>
				<div class="contentsItem LineRank">
					<div
						style="text-align: center; height: 60px; border: 1px solid #8CB9FC; display: flex; align-items: center; margin-bottom: 10px; justify-content: center">
						챔피언 랭킹 <select id="rankSelect">
							<option value="BRONZE+" id="Brozne">Bronze+
							<option value="SILVER+" id="Silver">Silver+
							<option value="GOLD+" id="Gold">"Gold"+
							<option value="PLATINUM" id=Platinum+>"Platinum+"+
							<option value="Emerald+" id="Emerald"
								onclick="tierSelect(this.id)">Emerald+
							<option value="Diamond+" id="Diamond">Diamond+

							
						</select>


					</div>

					<div class="rankTable">
						<div class="rankLine">
							<div class="rankSearch ranklineBtn">
								<span id="Top" onclick="champRank(this.id)"><img
									src="/img/jhl/positionImg/Position_Plat-Top.png">탑</span>
							</div>
							<div class="rankSearch">
								<span id="jug" onclick="champRank(this.id)"><img
									src="/img/jhl/positionImg/Position_Plat-Jungle.png">정글</span>
							</div>
							<div class="rankSearch">
								<span id="mid" onclick="champRank(this.id)"><img
									src="/img/jhl/positionImg/Position_Plat-Mid.png">미들</span>
							</div>
							<div class="rankSearch">
								<span id="adc" onclick="champRank(this.id)"><img
									src="/img/jhl/positionImg/Position_Plat-Bot.png">바텀</span>
							</div>
							<div class="rankSearch">
								<span id="sup" onclick="champRank(this.id)"><img
									src="/img/jhl/positionImg/Position_Plat-Support.png">서폿</span>
							</div>
						</div>
						<div class="lineRank">
							<div class="rankItems">
								<table class="Rankable">
									<colgroup>
										<col width="40%">
										<col width="30%">
										<col width="30%">

									</colgroup>
									<thead>
										<tr class="tableColumns">
											<th><span style="font-style: inherit;">챔피언</span></th>
											<th><span>승률</span></th>
											<th><span>픽률</span></th>
											<th><span>밴률</span></th>
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
			<div class="aside right"></div>
		</div>
	</div>


</body>


</html>