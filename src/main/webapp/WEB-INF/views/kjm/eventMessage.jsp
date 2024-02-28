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
				<input type="button" class="inq-nav-item" id="eventMessage2" value="메시지함">
				<input type="button" class="inq-nav-item" id="sendinq2" value="문의하기">
			</div>

			<div class="modal-content">
				<table class="table table-green table-hover" id="modal_wrap">
					<thead>
						<tr class="eventMessage">
<!-- 							<th class="recv_userId" style="display: none;"></th> -->
							<th class="send_userId">보낸사람</th>
							<th class="n_title">제목</th>
							<th class="n_date">날짜</th>
						</tr>
					</thead>
					<tbody id="event_body">

					</tbody>
				</table>
				<input type="hidden" id="userId" value="${userId }">
			</div>
		</div>
	</div>

</body>
</html>