<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<section>

	<div class="contents">
		<div class="contentsItems">


			<div class="kjmcontainer">
				<div class="right"></div>
				<div class="middle">
					<div class="mtop">


						<div class="profile">
							<div class="pline1">
								<div class="pline1-1">
									<p>이름</p>
								</div>
							</div>
							<div class="pline2">
								<div class="pline2-1" id = "changeIdArea">
									${mlist.userName}
								</div>
								<div class="pline2-2">
									<button type="button" class="changebutton" id = "changeId">수정</button>
								</div>
							</div>


							<div class="pline3">메일</div>


							<div class="pline4">
								<div class="emailimg"></div>
								<div class="pline4text">
									<center>${mlist.userEmail}</center>
								</div>
							</div>


							<div class="pline5">
								<div class="pline5top">
									포인트
									<div class="pointimg"></div>
								</div>
								<div class="pline5bottom">
									<div class="pline5l"></div>
									<div class="pline5text">
										<center>${mlist.userPoint}Point</center>
									</div>
									<div class="cash">
										<a href="javascript:openModal()">충전</a>
									</div>
								</div>
							</div>


							<div class="pline6">
								<!-- 								<a href="/member/MyChangePw">비밀번호 변경</a> -->
								<button type="button" class="myPgCpw" id="myPgCpw">비밀번호
									변경</button>
							</div>
						</div>




					</div>
					<div class="mMiddle">
						<div class="c-txt" id="ctxt">정보수신동의</div>


					</div>
					<div class="mbottom" id="mbottom">


						<div class="agree-to-receive">
							<div class="agree-to-receivetop" id="phoneText">휴대전화</div>
							<div class="agree-to-receivebot">
								<div class="agree-to-receivebotl">
									<div class="phoneimg" id="current-pw"></div>
								</div>
								<div class="agree-to-receivebotm"></div>
								<div class="agree-to-receivebotr">

									<div class="aline1text"></div>

								</div>
								<div class="on-off-btn" id="onandoff">
									<input type="checkbox" id="switch"> <label for="switch"
										class="switch_label"> <span class="onf_btn"></span>
									</label>
								</div>
							</div>
						</div>
						<div class="sai"></div>
						<div class="agree-to-receive">
							<div class="agree-to-receivetop" id="emailText">이메일</div>
							<div class="agree-to-receivebot1">
								<div class="emailimg2" id="new-pw"></div>
								<div class="on-off-btn" id="onandoff2">
									<input type="checkbox" id="switch2"> <label
										for="switch2" class="switch_label2"> <span
										class="onf_btn2"></span>
									</label>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>
			<div class="left"></div>
		</div>
	</div>




</section>