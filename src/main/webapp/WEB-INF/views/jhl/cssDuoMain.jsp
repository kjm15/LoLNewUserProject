<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DuoMainCss만들기</title>

<link href="/css/newDuo.css" rel="stylesheet">
</head>
<body>
	<%@include file="../inc/header.jsp"%>

	<div class="duoContent">
		<div class="duoTitle">
			<h1>롤 듀오 찾기</h1>
		</div>
		<div class="duoContainer">
			<div class="duoMain">


				<div class="duoSearch">
					<div class ="position-icon">
					<div class = "icon-img">*</div>
					<div class = "icon-img">*</div>
					<div class = "icon-img">*</div>
					<div class = "icon-img">*</div>
					<div class = "icon-img">*</div>
					</div>

					<div>
						<button id="btn-duoSearch">Duo찾기작성</button>
					</div>
				</div>
				<div class="duoTitems">
					<div class="duoT">
						<table class="DuoTable">
							<colgroup>
								<col width="5%">
								<col width="15%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="15%">
								<col width="5%">
							</colgroup>

							<tr class="duo-th">

								<th class="duoitems dNo">번호</th>
								<th class="duoitems dName">이름</th>
								<th class="duoitems mPosition">나의 포지션</th>
								<th class="duoitems dTear">티어</th>
								<th class="duoitems dType">게임타입</th>
								<th class="duoitems yPosition">찾는 포지션</th>
								<th class="duoitems recentP">최근 챔피언</th>
								<th class="duoitems dMeno">메모</th>
								<th class="duoitems blank"></th>

							</tr>
							<tr class="duoTr Dtd">

								<td class="duoitems dNo"><span class="duo-no">1</span></td>
								<td class="duoitems dName"><span class="duo-name">롤계정98237</span></td>
								<td class="duoitems mPosition"><span class="duo-mPosition">서폿</span></td>
								<td class="duoitems dTear"><span class="duo-tear">에메랄드</span></td>
								<td class="duoitems dType"><span class="duo-gType">자유랭크</span></td>
								<td class="duoitems yPosition"><span class="duo-yPosition">전체</span></td>
								<td class="duoitems recentP"><span class="duo-recentP">개발중</span></td>
								<td class="duoitems dMeno"><div class="duo-momo">
										<div class="duo-m">
											<span class="duo-ms">듀오하실분 잘하시는분만 멘탈 좋으신 분만 30분뒤 가능ㄱㄱ</span>
										</div>
									</div></td>
								<td class="duoitems blank"><span class="duo-blank">...</span></td>
							</tr>




						</table>

					</div>
				</div>
			</div>
		</div>


	</div>

	<%@include file="../inc/footer.jsp"%>
</body>
</html>