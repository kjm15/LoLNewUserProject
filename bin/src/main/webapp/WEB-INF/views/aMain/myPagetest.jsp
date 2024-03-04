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
									<p>내 정보</p>
								</div>
								<div class="pline1-2">
									<button type="button" class="changebutton"
										onclick="location.href='/member/passwordcheck'">정보수정</button>
								</div>
							</div>
							<div class="pline2">
								<center>${mlist.userId}</center>

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
								<p>비밀번호 변경</p>
							</div>
						</div>




					</div>
					<div class="mMiddle">
						<div class="c-txt">정보수신동의</div>


					</div>
					<div class="mbottom">


						<div class="agree-to-receive">
							<div class="agree-to-receivetop">휴대전화</div>
							<div class="agree-to-receivebot">
								<div class="agree-to-receivebotl">
									<div class="phoneimg"></div>
								</div>
								<div class="agree-to-receivebotm"></div>
								<div class="agree-to-receivebotr">

									<div class="aline1text"></div>

								</div>
								<div class="on-off-btn">
									<input type="checkbox" id="switch"> <label for="switch"
										class="switch_label"> <span class="onf_btn"></span>
									</label>
								</div>
							</div>
						</div>
						<div class="sai"></div>
						<div class="agree-to-receive">
							<div class="agree-to-receivetop">이메일</div>
							<div class="agree-to-receivebot1">
								<div class="emailimg2"></div>
								<div class="on-off-btn">
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