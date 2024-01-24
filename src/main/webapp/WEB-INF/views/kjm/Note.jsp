<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<script
	src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
	integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
	integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
	crossorigin="anonymous"></script>

   <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<title>Insert title here</title>
</head>
<body>
${userId }님<br>
${sendId }님<br>
${maillist}님<br>
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