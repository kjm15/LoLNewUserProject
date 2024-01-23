<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<input type = "hidden" value = "" id = "dntDuo"/> 
	<div id=duoTable class=searchDuoT>
		<h1 align="center">롤 듀오DUO 구하기</h1>
		<div align="right">
			<button type="button" class="btn btn-success" type="button"
				class="btn btn-primary" data-bs-toggle="modal"
				data-bs-target="#exampleModal">글쓰기</button>
			<p></p>
		</div>

		<table class="table table-dark table-hover" id="modal_wrap">
			<thead>
				<tr>
					<th>번호</th>
					<th>이름</th>
					<th>주포지션</th>
					<th>티어</th>
					<th>게임타입</th>
					<th>찾는포지션</th>
					<th>최근 챔피언</th>
					<th>메모</th>
					<th>등록일시</th>

				</tr>
				<tr>
					<th colspan=10>===============================================================================================================================</th>

				</tr>
			</thead>
			<tbody id="preflag">

				<c:forEach var="ditem" items="${dList}">

					<tr>

						<td>${ditem.dcnt}</td>

						<td>${ditem.userId}</td>
						<td>${ditem.myPosition}</td>
						<td>${ditem.tier}</td>
						<td>${ditem.gameType}</td>
						<td>${ditem.duoPosition}</td>
						<td>최근챔피언개발중</td>
						<td>${ditem.memo}</td>
						<td> ${ditem.date}</td>
						<td>
							<div class="dropdown">
								<button class="btn btn-secondary dropdown-toggle" type="button"
									data-bs-toggle="dropdown" aria-expanded="false">...</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">수정</a></li>
									<li><a class="dropdown-item"
										href="javascript:deleteDuo(${ditem.dcnt})">삭제</a></li>
								</ul>
							</div>
						</td>

					</tr>
				 
				</c:forEach>



			</tbody>

		</table>
	</div>


	<!-- Modal -->
<!-- 	듀오등록 -->
<%@include file="modal1.jsp"%>

	<!-- Modal 클릭시 세부내용 -->
	<div class="modal_background"></div>
	<div class="modal_wrap">
		<div class="modal_close">
			<a href="#"><h2>x</h2></a>
		</div>
		<div align="center">내용들어갈예정</div>
		</br>
		<div class="text" id="modalText">
			회원이름 : <span id="userIdM"></span></br> 
			회원이름 : <span id="userIdM"></span></br> 
			내 포지션 : <span id="myPositionM"></span></br>
			원하는 티어 : <span id="tierM"></span></br> 
			원하는 포지션 : <span id="duoPositionM"></span></br>
			한줄메모 : <span id="memoM"></span></br>





		</div>
	</div>



</body>
</html>