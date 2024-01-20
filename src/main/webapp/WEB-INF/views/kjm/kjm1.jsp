
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>김진문</title>
<!-- css들어갈자리  -->


</head>

<body>

	<%@include file="../inc/header2.jsp"%>
	<div style="height: 1000px; background: whitesmoke;">
		<div class="header" id="characterclass">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-6">

				<div class="col">
					<img id="tanker" class="positionICN" src="../img/kjm/tanker.jpg"
						name="tanker" onclick="">
				</div>
				<div class="col">
					<img id="warrior" class="positionICN" src="../img/kjm/warrior.jpg"
						name="warrior" onclick="">
				</div>
				<div class="col">
					<img id="assassin" class="positionICN"
						src="../img/kjm/assassin.jpg" name="assassin" onclick="">
				</div>
				<div class="col">
					<img id="ap" class="positionICN" src="../img/kjm/ap.jpg" name="ap"
						onclick="">
				</div>
				<div class="col">
					<img id="ad" class="positionICN" src="../img/kjm/ad.jpg" name="ad"
						onclick="">
				</div>
				<div class="col">
					<img id="support" class="positionICN" src="../img/kjm/support.jpg"
						name="support" onclick="">
				</div>
			</div>
		</div>
		<div class="container" id="itemlist">
			<div>
				<div>me</div>
				<div></div>
			</div>
			<div>
				<div>me</div>
				<div>opponent</div>
			</div>
		</div>
	</div>
	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="/js/aCommon/common.js"></script>
	<script defer src="/js/kjm/searchId.js"></script>

</body>


</html>