<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<script defer src="/js/kjm/Note/Note.js"></script>
<body>

	<div id="modal3" class="modal3-overlay">
		<div class="modal3-window">
			<div class="modal-close-area">X</div>
			<div class="modal3-content">
				<input type="hidden" name="send_userId" id="send_userId" value ="${userId }">
				<input type="hidden" name="recv_userId" id="recv_userId" value ="admin">
				
				제목<input type="text" name="n_title" id="n_title"><br>
				<textarea rows="6" cols="35" name="n_message" id="n_message"></textarea>
				<button type="button" class="btn btn-primary" id="mailsend">보내기</button>
				<input type="button" class="inq-nav-item" id="inqMain3" value="돌아가기">

			</div>
		</div>
	</div>

</body>
</html>