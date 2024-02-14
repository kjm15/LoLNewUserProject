<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">    
<title>아이템 분석</title>

<!-- 숨겨놓은 p tag 모음 -->
<p id="name" style="visibility: hidden; position: absolute;"></p>
<div class = "champs" style="visibility: hidden; position: absolute;">
	<p id="myChampName" style="visibility: hidden; position: absolute;"></p>
	<p id="enemyChampName" style="visibility: hidden; position: absolute;"></p>
	<p id="lineCheck" style="visibility: hidden; position: absolute;"></p>
	<p id="tierCheck" style="visibility: hidden; position: absolute;"></p>
</div>
<p id="selectMenu" style="visibility: hidden; position: absolute;"></p>	
<p id="tier_en" style="visibility: hidden; position: absolute;">platinum</p>
<p id="tier_en_Modal" style="visibility: hidden; position: absolute;">platinum</p>
<p id="selectTier" style="visibility: hidden; position: absolute;">플래티넘</p>
<p id="selectTierModal" style="visibility: hidden; position: absolute;">플래티넘</p>
<p id="selectCore" style="visibility: hidden; position: absolute;">1코어 아이템</p>

<div class="coreItemList_box" style="background-color: lightgray; color: white; width: 1100px; height: 1549px;">

</div>

<div class="sideBanner">
  <a data-bs-toggle="modal" href="#exampleModalToggle"><img class = "bannerImg" src="../img/kdg/kdgBanner.jpg"></a>
  <span class="txt-label">
    <a id = "analysisBtn" class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style = "width: 150px;" onclick='javascript:test()'>get Item Build</a>
  </span>
</div>