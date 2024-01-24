<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	
		${userId }님 <br> ${sendId }님 <br> ${maillist}님 <br>
		<button type="button" class="btn btn-success" type="button"
			class="btn btn-primary" data-bs-toggle="modal"
			data-bs-target="#exampleModal">메일쓰기</button>
		<table border=3>

			<thead>
				<th>번호</th>
				<th>작성자</th>
				<th>제목</th>
				<th>내용</th>
				<th>날짜</th>
				<th>받는사람</th>
			</thead>
			<tbody>

				<c:forEach var="item" items="${maillist}">

					<tr>
						<td>${item.n_num}</td>
						<td>${item.userId}</td>
						<td><a href="/detail?n_num=${item.n_num}">${item.n_title}</a></td>
						<td>${item.n_message}</td>
						<td>${item.n_date}</td>
						<td style="display: none;">${item.sendId}</td>
					</tr>

				</c:forEach>
			</tbody>
		</table>

		<!-- 메일쓰기 -->
		<%@include file="kjmmodal.jsp"%>
		<!-- 메일 보기 -->
		<%@include file="kjmmodal2.jsp"%>



	<script defer src="/js/kjm/Note/Note.js"></script>




</body>
</html>