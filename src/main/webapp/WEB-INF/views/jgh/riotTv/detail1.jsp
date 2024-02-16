

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

모듈화 1번

<input type="text" id="gameName1" placeholder="아이디를 적어주세요"
	value="유부남" />
<input type="text" id="tagLine" placeholder="태그를 적어주세요" value="KR 1" />

<input type="button" id="find" value="찾기">
	<center><hr>!!! 라문철 tv !!!<hr></center>
<div id="loading">
	<img src="/img/loadingimg.gif" />
</div>

<div id=riotSearch
	style="overflow: scroll; width: 450px; height: 250px;">
	<div id=detail2></div>
</div>

<div id = "myImg"></div>

<div class=riotgraph>
	<div id='container'>
		<div id='box-left'>
			<div style="max-width: 300px" id="myChart2"></div>
		</div>
		<div id='box-center'>
			<div style="max-width: 300px;" id="myChart1"></div>
		</div>
		<div id='box-right'>
			<div style="max-width: 300px" id="myChart3"></div>
		</div>
		<div id='box-side'>
			
		</div>
	</div>


	<div id="teamrate" style="display: none;">
		팀기여도 1위! >> id나오는곳</br> 팀기여도 2위! >> id나오는곳</br> 팀기여도 3위! >> id나오는곳</br> 팀기여도 4위! >>
		id나오는곳</br> 팀기여도 꼴찌! >> id나오는곳</br>
		<p id="backRiot">
			<button>
				<a href=#>뒤로가기</a>
			</button>
		</p>
	</div>
</div>
