

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

모듈화 1번

<input type="text" id="gameName1" placeholder="아이디를 적어주세요"
	value="bury my비애" />
<input type="text" id="tagLine" placeholder="태그를 적어주세요" value="KR1" />

<input type="button" id="find" value="찾기">

<div id="loading">
	<img src="/img/loadingimg.gif" />
</div>

<div id = riotSearch style="overflow:scroll; width:400px; height:150px;">
<div id=detail2></div>
</div>
<div class=riotgraph>
	<div style="max-width: 300px;" id="myChart1"></div>

	<div style="max-width: 150px" id="myChart2"></div>

	<div style="max-width: 150px" id="myChart3"></div>
	<div style="max-width: 300px" id="myChart4"></div>
	<div id="teamrate" style="display: none;">
		<p>팀기여도 1위! >> id나오는곳</p>
		<p>팀기여도 2위! >> id나오는곳</p>
		<p>팀기여도 3위! >> id나오는곳</p>
		<p>팀기여도 4위! >> id나오는곳</p>
		<p>팀기여도 꼴찌! >> id나오는곳</p>
		<p id="backRiot">
			<a href=#>뒤로가기</a>
		</p>
	</div>
</div>