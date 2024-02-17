$(document).ready(function() {
	$(".darkmod_toggle").click(function() {
		
		modNum = $('#modNum').text();
		
		if (modNum == 0){
			
			$('.tableMainTr').css("background-color","#343a40")
			$('.tableMainTr').css("color","white")
			
			$('.resultTr0').css("background-color","#27282d")
			$('.resultTr0').css("color","#999")
			
			$('.resultTr1').css("background-color","#2a2c33")
			$('.resultTr1').css("color","#999")
			
			$('.highest_rate').css("color","rgb(248, 173, 83)")
			
			$('body').css("background-color","#222")
			$('.comm_graph_title > .comm_title > p').css("color","white")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color","white")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color","#999")
			
			$('.comm_box').css("background-color","#222")
			
			$('.navbars').css("background-color","#27282d")			
			$('.navbarMain1').css("background-color","#2a2c33")				
			$('.headerItmes').css("background-color","#27282d")			
			
			i = 1
			$('#modNum').html(i)
						
		} else if (modNum == 1){
			
			$('.tableMainTr').css("background-color","rgba(27, 65, 221, 0.58)")
			$('.tableMainTr').css("color","black")
			
			$('.resultTr0').css("background-color","rgba(157, 196, 253, 0.4)")
			$('.resultTr0').css("color","black")
			
			$('.resultTr1').css("background-color","rgba(157, 196, 253, 0.9)")
			$('.resultTr1').css("color","black")
			
			$('.highest_rate').css("color","red")
			
			
			$('body').css("background-color","white")
			$('.comm_graph_title > .comm_title > p').css("color","black")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color","black")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color","#999")
			
			$('.comm_box').css("background-color","white")
			
			$('.navbars').css("background-color","rgb(120, 173, 252)")	
			$('.navbarMain1').css("background-color","rgba(27, 65, 221, 0.38)")				
			$('.headerItmes').css("background-color","rgb(157, 196, 253)")		
			
			i = 0
			$('#modNum').html(i)
			
		}

	})
})