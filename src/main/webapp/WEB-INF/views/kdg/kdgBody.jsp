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
<p id="modNum" style="visibility: hidden; position: absolute;">0</p>
<div class = "darkmod_checkbox">
	<div class = "toggle_box">
		<input type="checkbox" id="toggle" class ="darkmod_toggle" hidden> 
		
		<label for="toggle" class="toggleSwitch">
		  <span class="toggleButton"></span>
		</label>
	</div>
	<div class = "TS_name_box">
		<p>다크모드</p>
	</div>
</div>

<div class = "comm_graph_title">
	<div class = "comm_title">
		<p> 라인 별 Best Pick
	</div>
	
	<div class = "graph_title">
		<div class = "graph_title1">
			<p> 라인 별 Popular Items
		</div>
		<div class = "graph_title2">
			<p> 상위 5개 아이템,&nbsp;<br>전체 티어 기준입니다.
		</div>
	</div>
</div>
<br>

<div class = "comm_graph_box">

	<div class = "comm_box">
	
		<div class = "comm_firstChamp">
			<div class = "comm_firstChamp_imgbox">
				<div class = "comm_firstChamp_img">
					<img class = "crown_img" src="../img/kdg/glory.png">
					<img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Brand.png'>
				</div>
			</div>
		</div>
		
		<div class = "comm_secondChamp">
			<div class = "comm_secondChamp_imgbox">
				<div class = "comm_secondChamp_img">
					<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lillia.png'>
				</div>
			</div>
		</div>
		
		<div class = "comm_thirdChamp">
			<div class = "comm_thirdChamp_imgbox">
				<div class = "comm_thirdChamp_img">
					<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png'>
				</div>			
			</div>
		</div>
		
	</div>
	
	<div class = "graph_box">
		<div class = "graph_box1">
			<div class = "top_graph">
			
			</div>
			<div class = "jug_graph">
			
			</div>
		</div>
		<div class = "graph_box2">
			<div class = "mid_graph">
			
			</div>
			<div class = "adc_graph">
			
			</div>	
			<div class = "sup_graph">
			
			</div>	
		</div>
	</div>


</div>
<br>

<div class="coreItemList_box" style="background-color: lightgray; color: white; width: 1100px; height: 1549px;">

</div>

<div class="sideBanner">
  <a data-bs-toggle="modal" href="#exampleModalToggle"><img class = "bannerImg" src="../img/kdg/kdgBanner.jpg"></a>
  <span class="txt-label banner_span_txt">
    <a id = "analysisBtn" class="btn btn-primary banner_to_modalBtn" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style = "width: 150px;" onclick='javascript:test()'>get Item Build</a>
  </span>
</div>