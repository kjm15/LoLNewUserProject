<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	<table border=3>

		<thead>
			<th>번호</th>
			<th>작성자</th>
			<th>제목</th>
			<th>내용</th>
			<th>날짜</th>
		</thead>
		<tbody>

			<c:forEach var="item" items="${blist}">

				<tr>
					<td>${item.n_num}</td>
					<td>${item.userId}</td>
					<td><a href="/detail?BNum=${item.n_num}">${item.n_title}</a></td>
					<td>${item.n_message}</td>
					<td>${item.n_date}</td>
				</tr>

			</c:forEach>
		</tbody>
	</table>







<h1>**메일**</h1>
<form action="/send" method="post">
보내는사람${userId }<br>
받는사람<input type ="text" name ="sendId" id="sendId"><br>
제목<input type ="text" name ="n_title"><br>
내용<textarea rows="6" cols="35" name="n_message"></textarea><br>
<input type="submit" value ="보내기">
</form>
</body>
</html>