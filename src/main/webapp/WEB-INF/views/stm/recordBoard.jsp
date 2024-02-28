<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>송태민 테스트</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- <link rel="stylesheet" href="/css/stm/lolDataList.css" type="text/css"> -->
<link href="/css/stm/recordBoard.css" rel="stylesheet" type="text/css">

</head>
<body>
	<%@include file="../inc/header.jsp"%>
	<div class="containerXX">
<!-- 		<div class="containerXl"></div> -->


		<div class="containerXC">

			<div class="graph1">그래프용</div>
			<div class="container1">

				<div class="box-left">

					<div style="background-color: green;">빠른대전</div>
					<div style="background-color: blue;">3일전게임</div>
					<div style="background-color: skyblue;">패배</div>
					<div style="background-color: skypink;">50분게임</div>


				</div>
				<div class="box-center1">


					<div class="champSepll">

						<div class=box-left4></div>
						<div class=box-center4>챔프사진</div>
						<div class=box-center44>

							<div class="spell1">스펠1</div>
							<div class="spell2">스펠2</div>

						</div>
						<div class=box-right4>kda평점</div>

					</div>
					<div class="item">
						<div class=itemNo></div>
						<div class=itemStart>아이템사진</div>
					</div>

				</div>

				<div class="box-center2">킬관여율</div>
				<div class="box-center3">

					<div class="blueChamp">

						<div>1번</div>
						<div>2번</div>
						<div>3번</div>
						<div>4번</div>
						<div>5번</div>


					</div>
					<div class="redChamp">
						<div>1번</div>
						<div>2번</div>
						<div>3번</div>
						<div>4번</div>
						<div>5번</div>
					</div>



				</div>
				<div class="box-right">더보기</div>


			</div>
			<div class="line1">흰색 선</div>
			<div class="container2">

				<div class="legend">


					<div class="teamId">블루팀</div>
					<div class=kda>kda</div>
					<div class=damage>가한피해량</div>
					<div class=cs>총합cs</div>
					<div class=itemTeam>아이템</div>



				</div>
				<div class="ct1">


					<div class="teamId1">

						<div class=champImgM>사진</div>
						<div class=spellM>

							<div class=spellM1>
								<img width='23' height='23' alt='못 불러옴'
									src=https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/1001.png>
							</div>
							<div class=spellM2>스펠2</div>
						</div>
						<div class=nickNameM>닉네임</div>
					</div>
					<div class=kda1>
						<div class=killDeathAssist>k/d/a</div>
						<div class="kdaCheck">kda</div>
					</div>
					<div class=damage1>

						<div class=damageAmount>숫자</div>
						<div class=damageGraph>그래프</div>
					</div>
					<div class=cs1>총합cs</div>
					<div class=itemTeamCheck>
						<div class=teamItem1>아이템1</div>

					</div>

				</div>



			</div>



		</div>
		<div class="containerXR"></div>

	</div>



	<div class=container3></div>




	<%@include file="../inc/footer.jsp"%>










	<!-- 전적 리스트 jsp -->
	<%-- 	<%@include file="../stm/lolList.jsp"%> --%>
	<%-- 	<%@include file="../stm/StmUserData.jsp"%> --%>
	<!-- 	<script defer src="/js/stm/loldata.js"></script> -->
	<!-- 	<script defer src="/js/stm/RiotGameTable.js"></script> -->

	<%-- 	<%@include file="../inc/footer.jsp"%> --%>

</body>
</html>