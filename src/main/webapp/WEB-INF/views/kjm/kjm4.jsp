
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

</head>

<body>

	<%@include file="../inc/header2.jsp"%>
	<div id = "div1" style="height: 700px; background: whitesmoke;">
		<nav class="navbar bg-body-tertiary,nav c">
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
	<%@include file="../inc/footer.jsp"%>

	<!-- js들어갈자리  -->

	<script defer src="/js/aCommon/common.js"></script>
	<script defer src="/js/kjm/searchId.js"></script>
	<script defer src="/js/kjm/kjm.js"></script>

</body>


</html>