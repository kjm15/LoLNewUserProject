<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

</head>

<body>

	<div class="main">
		<%@include file="newHeader.jsp"%>
		<section>
			<div class="contents">
				<div class="contentsItems">
					<div class="logo-item">
						<img alt="" src="/img/jhl/logo.png" width="300px" height="204px">
					</div>
					<div class="search-contents">
						<div class="search-itmes">
							<div class="sc-dataBoom">
								<span class="sp teamname">DATABOOM</span>
							</div>
							<div class="sc-kr">
								<span class="sp korea">KR1</span>
							</div>
							<input type="text" id="search-home" placeholder="플레이어이름 + #KR1">

	<%@include file="inc/header.jsp"%>


	<%@include file="aMain/mainDetail.jsp"%>



	<%@include file="inc/footer.jsp"%>




		</section>
		<%@include file="newFooter.jsp"%>
	</div>


</body>
</html>