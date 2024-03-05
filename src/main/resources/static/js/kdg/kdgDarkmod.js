$(document).ready(function() {
	$(".darkmod_toggle").click(function() {

		modNum = $('#modNum').text();


		if (modNum == 1) { // 다그코드 on
						$('span').css("color","#ffffff")

			//			아이템 분석

			$('.tableMainTr').css("background-color", "#343a40")
			$('.tableMainTr').css("color", "white")

			$('.resultTr0').css("background-color", "#27282d")
			$('.resultTr0').css("color", "#999")

			$('.resultTr1').css("background-color", "#2a2c33")
			$('.resultTr1').css("color", "#999")

			$('body').css("background-color", "#222")

			$('.comm_graph_title > .comm_title > p').css("color", "white")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color", "white")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color", "#999")

			$('.comm_box').css("background-color", "#222")

			//			header 설정
			$('.navbars').css("background-color", "#2a2c33")
			$('.search-contents1').css("background-color", "#2a2c33")
			$('.korea').css("color", "#4375DB")
			$('.teamname').css("color", "#4375DB")


			//			$('..sc-kr1').css("border-left","2px solid #2a2c33")
			$('.headerItmes').css("background-color", "#27282d")

			//			footer 설정
			$('.footer-bottom').css("background-color", "#2a2c33")


			//			초보자
			$('.contentsRank').css("background-color", "#222")

			$('.tooltiptext').css("background-color", "#2a2c33")
			$('.tooltiptext').css("border", "1px solid #2a2c33")
			$('.rankTable').css('color', 'white')
			$('.champs').css('color', 'white')
			$('.sc-rk-title').css('color', 'white')
			$('.myChampsNameBox').css("background-color", "#2a2c33")
			//			$('.champNum').css("color","white")
			//			$('.rankChampName').css("color","white")
			//			$('.rate_vp').css("color","white")
			//			$('.champName').css("color","white")

			//			$('.search_c').css("background-color","white")

			$('.lines').css("background-image", "linear-gradient(#ffffff, #2a2c33 0%, #222 94%)")



			//			듀오
			$('.duo-th').css("background-color", "rgb(52, 58, 64)")
			$('.duoTr').css("background-color", "rgb(42, 44, 51)")
			$('#btn-duoSearch').css("background-color", "rgb(52, 58, 64)")
			$('.duo-momo').css("background-color", "rgb(52, 58, 64)")


			dkmodnum = 0
			$('#modNum').html(dkmodnum)

		} else if (modNum == 0) { // 다크모드 off
						$('span').css("color","#212529")

			$('.tableMainTr').css("background-color", "rgba(27, 65, 221, 0.58)")
			$('.tableMainTr').css("color", "black")

			$('.resultTr0').css("background-color", "rgb(120, 173, 252)")
			$('.resultTr0').css("color", "black")

			$('.resultTr1').css("background-color", "rgb(157, 196, 253)")
			$('.resultTr1').css("color", "black")

			$('body').css("background-color", "white")
			$('.comm_graph_title > .comm_title > p').css("color", "black")
			$('.comm_graph_title > .graph_title > .graph_title1 > p').css("color", "black")
			$('.comm_graph_title > .graph_title > .graph_title2 > p').css("color", "#999")

			$('.comm_box').css("background-color", "white")

			$('.navbars').css("background-color", "rgb(120, 173, 252)")
			$('.search-contents1').css("background-color", "rgb(120, 173, 252)")
			$('.korea').css("color", "#4375DB")
			$('.teamname').css("color", "#4375DB")


			//			$('..sc-kr1').css("border-left","2px solid rgb(120, 173, 252)")
			$('.headerItmes').css("background-color", "rgb(157, 196, 253)")

			$('.footer-bottom').css("background-color", "rgb(120, 173, 252)")

			//			초보자
			$('.contentsRank').css("background-color", "#FFFFFF")

			$('.tooltiptext').css("background-color", "#8CB9FC")
			$('.tooltiptext').css("border", "1px solid rgb(120, 173, 252)")
			$('.rankTable').css('color', '#212529')
			$('.champs').css('color', '#212529')
			$('.sc-rk-title').css('color', '#212529')
			$('.myChampsNameBox').css("background-color", "#8CB9FC")
			//			$('.champNum').css("color","black")
			//			$('.rankChampName').css("color","black")
			//			$('.rate_vp').css("color","black")
			//			$('.champName').css("color","black")

//			$('.search_c').css("background-color", "white")

			$('.lines').css("background-image", "linear-gradient(315deg, #D6E5FC 0%, #9DC4FD 74%)")


			$('.Top').css("color", "#ffffff")
			$('.jug').css("color", "#ffffff")
			$('.mid').css("color", "#ffffff")
			$('.adc').css("color", "#ffffff")
			$('.sup').css("color", "#ffffff")
			//			듀오
			$('.duo-no').css("color", "#ffffff")
			$('.duo-name').css("color", "#ffffff")
			$('.duo-mPosition').css("color", "#ffffff")
			$('.duo-tear').css("color", "#ffffff")
			$('.duo-gType').css("color", "#ffffff")
			$('.duo-yPosition').css("color", "#ffffff")
			$('.duo-ms').css("color", "#ffffff")

			$('.duo-th').css("background-color", "rgb(69, 139, 197)")
			$('.duoTr').css("background-color", "rgba(69, 139, 197, 0.70)")
			$('#btn-duoSearch').css("background-color", "rgb(120, 173, 252)")
			$('.duo-momo').css("background-color", "rgba(157, 196, 253, 0.7)")


			dkmodnum = 1
			$('#modNum').html(dkmodnum)

		}

	})

})



//function dkMode() {
//
//
//}
//
//})

