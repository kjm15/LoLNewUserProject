$('#myPgCpw').on("click", function() {
	//	console.log("실행")
	let changetxt = document.getElementById('ctxt');
	changetxt.innerHTML = '<div>비밀번호를 입력해주세요</div>'
//	let changetxt4 = document.getElementById('current-pw');
//	changetxt4.innerHTML = '<input type = "password" name ="userPw" id="currentPw">'

	let changetxt6 = document.getElementById('mbottom');
	changetxt6.innerHTML = 
						`<div class="agree-to-receive">
							<div class="agree-to-receivetop" >새 비밀번호</div>
							<div class="agree-to-receivebot">
								<div class="agree-to-receivebotl">
									<input type = "password" class="inputArea" id="newPwTest">
								</div>
							</div>
						</div>
						<div class="agree-to-receive">
							<div class="agree-to-receivetop" >새 비밀번호 확인</div>
							<div class="agree-to-receivebot">
								<div class="agree-to-receivebotl">
									<input type = "password" class="inputArea" name ="userPw" id="newPw">
								</div>
							</div>
						</div>`

})

$('#changeId').on("click", function(){
	let changeArea = document.getElementById('changeIdArea');
	changeArea.innerHTML = '<input type = "text" class = "inputArea" name = "userName" id = "userName">'
})