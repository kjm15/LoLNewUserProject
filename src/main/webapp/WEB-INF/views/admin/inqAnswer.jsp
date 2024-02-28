<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="modal0" class="modal0-overlay">
		<div class="modal0-window">
			<div class="modal-close-area">X</div>
<!-- 			<div class="title"></div> -->

			<div class="modal0-content" id="modal0-body">
			<input type="hidden" name="n_num" id="n_num" value = "${param.n_num}">
<!-- 				<input type="hidden" name="send_userId" id="send_userId" -->
<%-- 					value="${dInq.send_userId }">  --%>
					<input type="hidden"
					name="status" id="status" value="답변완료"> 
<!-- 					<input -->
<!-- 					type="hidden" name="recv_userId" id="recv_userId" -->
<%-- 					value="${userId}"> <input type="hidden" --%>
<!-- 					name="n_date" id="n_date">  -->
					<input type="hidden" name="n_title" id="n_title" value="Re:${dInq.n_title}">
				
				<textarea rows="6" cols="80" name="n_message" id="n_message">
				${dInq.n_message }
				

				</textarea>
				<br>
				<button class ="inqanswer" id = "inqAnswerBtn">답변완료</button>
			</div>
		</div>
	</div>



</body>
</html>