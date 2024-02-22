
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- <!DOCTYPE html> -->
<html>
<head>
<meta charset="UTF-8">

<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!--    css -->
<title>Insert title here</title>
</head>
<body>

				<table class="table table-green table-hover" id="modal_wrap">

					<thead>
						<th>번호</th>
						<th>보낸사람</th>
						<th>제목</th>
						<th>날짜</th>
					</thead>
					<tbody>

						<c:forEach var="item" items="${maillist}">
							</a>
							<tr class="maillist" id="maillist">
								<td>${item.n_num}</td>
								<td>${item.recv_userId}</td>
								<td>${item.n_title}</td>
								<td>${item.n_date}</td>
								<td style="display: none;">${item.send_userId}</td>
								<td style="display: none;">${item.n_message}</td>
							</tr>
							<input type="hidden" name="${item.recv_userId}"
								id="${item.recv_userId}">
							<input type="hidden" name="${item.send_userId}"
								id="${item.send_userId}">
						</c:forEach>
					</tbody>
				</table>











	<!-- 	js   -->





</body>
</html>