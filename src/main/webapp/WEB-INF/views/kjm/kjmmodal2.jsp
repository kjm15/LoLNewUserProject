<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>


</head>
<body>
<div class="modal_background"></div>
<div class="modal_wrap">
	<div class="modal_close">
		<a href="#"><h2>x</h2></a>
	</div>
	<div class="modal2">
		<h1 align="center">비회원은 채팅이 불가능합니다.</h1>
		<h1>6시간 주기로 글 삭제</h1>
		글번호 : <span id="dcntM"></span>

		<div class="text" id="modalText">
			<div>
				<div class="right">

					<h1>부검자리</h1>
					<h1>전적자리</h1>
					<h1>부검자리</h1>
					<h1>전적자리</h1>

				</div>

				<div class="left">
					<span id="duoPositionM"></span>유저를 찾는중...</br>
					<p></p>
					<!-- 				[[[<span id="myPositionM"></span>]]]유저 -->
					<span id="userIdM"></span>님이 듀오를 구하고 있습니다.</br> ===== 원하는 사람 ===== </br> 원하는
					티어 : <span id="tierM"></span></br> </br> 한줄메모 : <span id="memoM"></span></br> </br>
				</div>
			</div>

		</div>

	</div>
	<div class="wrap">
		<a href="#" class="duoP" id="duoParty">듀오 신청하기!</a>
	</div>

</div>
</body>
</html>