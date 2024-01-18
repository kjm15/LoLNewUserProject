
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>김진문</title>
<!-- css들어갈자리  -->
<link href="/css/kjm.css" rel="stylesheet" type="text/css">


</head>

<body>

	<%@include file="inc/header1.jsp"%>
	<div style="height: 700px; background: whitesmoke;">
		<nav class="navbar bg-body-tertiary,nav justify-content-center">
			<div class="container-fluid" , id=Sform>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search"
						aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	</div>
	<div class="container" id = "container1">
		<!-- Content here -->
		
	</div>
	<%@include file="inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="/js/aCommon/common.js"></script>
	<script defer src="/js/kjm/searchId.js"></script>
	<script defer src="/js/kjm/kjm.js"></script>

</body>


</html>