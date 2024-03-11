<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="modal5" class="modal5-overlay">
		<div class="modal5-window">
			<div class="modal-close-area">X</div>
			<div class="modal5-title">
				<h2>DataBoom</h2>
			</div>

			<div class="modal5-content">
				<table>
					<tr>
					<tr style="display: none;">
						<th>번호</th>
						<td id="Enum"></td>
					</tr>
					<tr>
						<th class="thead-title">제목</th>
						<td class="title" id="Etitle"></td>
						<th class="thead">등록일</th>
						<td class="datetime" id="Edatetime"></td>
					</tr>

					<tr>
						<th class="thead-message">내용</th>
						<td class="message" id="Emessage"></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</body>
</html>