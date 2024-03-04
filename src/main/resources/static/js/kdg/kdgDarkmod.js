$(document).ready(function() {
	$(".darkmod_toggle").click(function() {
	
		modNum = $('#modNum').text();
		
		if (modNum == 1){ // 다그코드 on
		
//			아이템 분석
			
			$('.tableMainTr').css("background-color","#343a40")
			$('.tableMainTr').css("color","white")
			
			$('.resultTr0').css("background-color","#27282d")
			$('.resultTr0').css("color","#999")
			
			$('.resultTr1').css("background-color","#2a2c33")
			$('.resultTr1').css("color","#999")
			
			$('body').css("background-color","#222")

			$('.comm_graph_title > .comm_title > p').css("color","white")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color","white")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color","#999")
			
			$('.comm_box').css("background-color","#222")
			
//			header 설정
			$('.navbars').css("background-color","#2a2c33")					
			$('.search-contents1').css("background-color","#2a2c33")
//			$('..sc-kr1').css("border-left","2px solid #2a2c33")
			$('.headerItmes').css("background-color","#27282d")		
			
//			footer 설정
			$('.footer-bottom').css("background-color","#2a2c33")
			
			
//			초보자
			$('.contentsRank').css("background-color","#222")	
			
			$('span').css("color","#ffffff")
			$('.tooltiptext').css("background-color","#2a2c33")
			$('.tooltiptext').css("border","1px solid #2a2c33")
			
			
			dkmodnum = 0
			$('#modNum').html(dkmodnum)
						
		} else if (modNum == 0){ // 다크모드 off
			
			$('.tableMainTr').css("background-color","rgba(27, 65, 221, 0.58)")
			$('.tableMainTr').css("color","black")
			
			$('.resultTr0').css("background-color","rgb(120, 173, 252)")
			$('.resultTr0').css("color","black")
			
			$('.resultTr1').css("background-color","rgb(157, 196, 253)")
			$('.resultTr1').css("color","black")	
			
			$('body').css("background-color","white")
			$('.comm_graph_title > .comm_title > p').css("color","black")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color","black")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color","#999")
			
			$('.comm_box').css("background-color","white")
			
			$('.navbars').css("background-color","rgb(120, 173, 252)")		
			$('.search-contents1').css("background-color","rgb(120, 173, 252)")
//			$('..sc-kr1').css("border-left","2px solid rgb(120, 173, 252)")
			$('.headerItmes').css("background-color","rgb(157, 196, 253)")		

			$('.footer-bottom').css("background-color","rgb(120, 173, 252)")	
			
//			초보자
			$('.contentsRank').css("background-color","#FFFFFF")	
			
			$('span').css("color","#212529")
			$('.tooltiptext').css("background-color","#8CB9FC")
			$('.tooltiptext').css("border","1px solid rgb(120, 173, 252)")
			
			
			dkmodnum = 1
			$('#modNum').html(dkmodnum)
			
		}

	})
})


	
		function dkMode(){
			
			
		}