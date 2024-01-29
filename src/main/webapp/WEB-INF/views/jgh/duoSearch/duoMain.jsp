<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>

	<input type="hidden" value="" id="writter" />
	<input class="loginform" type='hidden' id='mid' disabled="disabled">
	<input type="hidden" value="${userId}" id="userId" />
	<input type="hidden" value="" id="dcntflag" />
	<input type="hidden" value="" id="friendId" />
	<input type="hidden" value="" id="rcnt" />
	<input type="hidden" value="" id="guestId" />
	<input type="hidden" value="" id="hostId" />
	<input type="hidden" value="" id="dntDuo" />

	<%@include file="sideBar.jsp"%>

	<%@include file="createRoom.jsp"%>

	<!-- Modal -->
	<!-- 	듀오등록 -->
	<%@include file="modal1.jsp"%>
	<!--   세부내용 -->
	<%@include file="modal2.jsp"%>
	<!--   아코디언 메세지 -->
	<div class="accordion-box"></div>
	<%-- 	<%@include file="accordionMsg.jsp"%> --%>

</body>
</html>