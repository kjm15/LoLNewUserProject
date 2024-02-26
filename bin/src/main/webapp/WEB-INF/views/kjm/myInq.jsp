<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div id="modal2" class="modal2-overlay">
		<div class="modal2-window">
			<div class="modal-close-area">X</div>


			<div class="inqnav">
				<input type="button" class="inq-nav-item" id="inqMain2" value="문의내역">
				<input type="button" class="inq-nav-item" id="myinq2" value="메시지함">
				<input type="button" class="inq-nav-item" id="sendinq2" value="문의하기">
			</div>

			<div class="modal-content">
								<table class="table table-green table-hover" id="modal_wrap">

					<thead>
						<th>번호</th>
						<th>보낸사람</th>
						<th>제목</th>
						<th>날짜</th>
					</thead>
					<tbody>

						<%-- 						<c:forEach var="item" items="${maillist}"> --%>
						<!-- 							</a> -->
						<!-- 							<tr class="maillist" id="maillist"> -->
						<%-- 								<td>${item.n_num}</td> --%>
						<%-- 								<td>${item.recv_userId}</td> --%>
						<%-- 								<td>${item.n_title}</td> --%>
						<%-- 								<td>${item.n_date}</td> --%>
						<%-- 								<td style="display: none;">${item.send_userId}</td> --%>
						<%-- 								<td style="display: none;">${item.n_message}</td> --%>
						<!-- 							</tr> -->
						<%-- 							<input type="hidden" name="${item.recv_userId}" --%>
						<%-- 								id="${item.recv_userId}"> --%>
						<%-- 							<input type="hidden" name="${item.send_userId}" --%>
						<%-- 								id="${item.send_userId}"> --%>
						<%-- 						</c:forEach> --%>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</body>
</html>