/**
 * 
 */

 $("#joinId").keyup(function() {
	 let userId = $('#joinId').val();
	 data = {'userId' : userId}
	 let str = ''
	 
	 $.ajax({
		 type : 'post',
		 url : '/join/idCheck',
		 data : data,
		 
		 success : function(res){
			 if(res){
				str ="중복된 아이디 입니다."
				$('#joinbnt').prop('disabled', true);
		 	 }else{
				str = "사용가능한 아이디 입니다."
				$('#joinbnt').prop('disabled', false);	  
			 }
			 $("#checkId").html(str);
		 }
	 })
 })