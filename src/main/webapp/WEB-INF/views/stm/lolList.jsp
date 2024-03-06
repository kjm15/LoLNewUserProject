<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>송태민</title>
<script type="text/javascript"
	src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>

</head>
<body>
<input type = "hidden" id = "graphCheck1" value = '1'  />
<input type = "hidden" id = "graphCheck2" value = '1'  />
<input type = "hidden" id = "graphCheck3" value = '1'  />
<input type = "hidden" id = "graphCheck4" value = '1'  />


<div class ="containerAll">
<div class ="contentsXa">
	<div class="graph1" id='graph1'>
		
	 
	</div>
	<%-- 	<canvas id="donutChart" width="100" height="100"></canvas> --%>
	<div id="puuid">
		<div class="containerXX">
<!-- 			<div class="containerXl"></div> -->


			<div class="containerXC"></div>

		</div>
	</div>
	</div>
	</div>
	  
	<%-- 	<%@include file="../inc/footer.jsp"%> --%>
</body>
</html>