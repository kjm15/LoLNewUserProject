

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

모듈화 1번

<input type="text" id="gameName1" placeholder="아이디를 적어주세요" value="MaRin" />
<input type="text" id="tagLine" placeholder="태그를 적어주세요" value="Pro" />

<input type="button" id="find" value="찾기">

<input type= "button" id= "getData" value = "원하는티어데이터받기"> 
  <label for="lang">티어</label>
  <select name="wantTier" id="tier">
    <option value="DIAMOND">DIAMOND</option>
    <option value="EMERALD">EMERALD</option>
    <option value="PLATINUM">PLATINUM</option>
    <option value="GOLD">GOLD</option>
    <option value="SILVER">SILVER</option>
    <option value="BRONZE">BRONZE</option>
  </select>
<center>
	<hr>
	!!! 라문철 tv !!! <p>(솔로큐 인경우에는 인공지능이 추가 정보를 확인해드립니다.)</p>
	<hr>
</center>
<div id="loading">
	<img src="/img/loadingimg.gif" />
</div>

<div id=riotSearch
	style="overflow: scroll; width: 450px; height: 250px;">
	<div id=detail2></div>
</div>

<div id="myImg"></div>

<div class=riotgraph>
	<div id='container'>
		<div id='box-left'>
			<div style="max-width: 300px;" id="myChart1"></div>

		</div>
		<div id='box-center'>
			<div style="max-width: 300px" id="myChart2"></div>
		</div>
		<div id='box-right'>
			<div style="max-width: 300px" id="myChart3"></div>
		</div>
		<div id='box-side'></div>
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
