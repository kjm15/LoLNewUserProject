

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>



<div class="modal_background"></div>
<div class="modal_wrap">
	<div class="modal2">
		<div class="wrap">
			<div class=left-box>
				<div class=ltop-box>


					<img class=mapimg src="/img/map.png" id='tag'>
					<div>
						<div class = one id="one"></div>
						<div class = "two" id="two"></div>	
					</div>
				</div>
				<div class=lbottom-box>


					<div class="progress-container">
						<div class="progress-bar"
							style="width: 0%; background: rgba(255, 211, 6, 1)"></div>
					</div>

				</div>
			</div>
			<div class=right-box>
				<div class=left-box1></div>
				<div class=center-box1>

					<h2>리플레이 보기</h2>

					<p></p>
					<div id=timeLineContents class="timeLineContents">
						<div class=top-box>Time for kill</div>
						<div class=mid-box>
							<!-- 							<div class=center-box22></div> -->
							<div class=left-box2></div>


							<div class=center-box2></div>



							<div class=right-box2></div>
						</div>
						<div class=bottom-box></div>
					</div>
					<p></p>
					<div class="blueTeamSide">
						<div class="blueTeamSidel">blue</div>
						<div class="blueTeamSider"></div>

					</div>
					<p></p>
					<div class="redTeamSide">
						<div class="redTeamSidel">red</div>
						<div class="redTeamSider"></div>
					</div>

					<div class="menu">
						<input type=button value="리플레이 플레이" id="replayStart" /> <input
							type=button value="스킵/전체보기" id="liveBroadCastSkip" />

					</div>
				</div>
				<div class=right-box1></div>
			</div>

		</div>
	</div>