/**
 * 
 */

$("#joinId").on('keyup',function() {
	 let userId = $('#joinId').val();
	 data = {'userId' : userId}
	 let str = ''
	 let str2 = ''
	 let userPw = $('#joinPw').val();
	 if(userId.length < 3){
		str ="아이디는 3자 이상."
		$('#joinbnt').prop('disabled', true);
	 	$("#checkId").html(str);
	 	return;
	 }
	 $.ajax({
		 type : 'post',
		 url : '/join/idCheck',
		 data : data,
		 
		 success : function(res){
			 if(res){
				str ="중복된 아이디 입니다."
				$("#checkId").css('color','red')
				$('#joinbnt').prop('disabled', true);
		 	 }else{
				str = "사용가능한 아이디 입니다."
				$("#checkId").css('color','green')
				$('#joinbnt').prop('disabled', false);
				if(userPw.length<3){
					str2 = "비밀번호 기입은 필수입니다."
					$("#checkPw").css('color','red')
					$('#joinbnt').prop('disabled', true);
					$("#checkPw").html(str2);  
					
			}
		}
			$("#checkId").html(str);
		 }
	 })
	  	
 })
 $("#joinPw").keyup(function() {
	  	let userPw = $('#joinPw').val();
		data ={ 'userPw' : userPw}
		let str = ''
		
		if(userPw.length < 3){
			str ="비밀번호는 3자이상"
			$("#checkPw").css('color','red')
			$('#joinbnt').prop('disabled', true);
		}else{
			str ="사용가능"
			$("#checkPw").css('color','green')
			$('#joinbnt').prop('disabled', false);
		}
	 	 $("#checkPw").html(str);
 })
 