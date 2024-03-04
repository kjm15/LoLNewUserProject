

$(function() {
	// 초기 실행: 기본 포지션에 대한 데이터 로드
	$('.rankSearch span#Top').addClass('active');
	var defaultPosition = 'Top';
	var defaultTier = 'emerald';
	champRank(defaultPosition, defaultTier);
	//	tierUpdate();
});

//






//function champRank(a) {
//
//
//	$.ajax({
//		type: "post",
//		url: "/champRank",
//		data: { "teamPosition": a },
//		success: function(res) {
//			//			let tableTop = "<table class='Rankable'>"
//			//			let tablecolgroup = "<colgroup><col width='40%'><col width='30%'><col width='30%'></colgroup><thead>"
//			//			let tableColumns = "<tr class='tableColumns'><th><span>챔피언</span></th><th><span>승률</span></th><th><span>픽률</span></th></tr></thead>";
//			let tableRows = '';
//
//			for (let i = 0; i < res.length; i++) {
//				tableRows += "<tr class='rTable'>";
//				tableRows += "<td class ='rData'><div><div class = 'champs-sc'><div class ='champ-sc-img'><img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='champRankImg'></div><span class='rankChampName'>" + res[i].champion_name_kr + "</span></div></div></td>";
//				tableRows += "<td class ='rData'>" + res[i].win_rate + "</td>";
//				tableRows += "<td class ='rData'>" + res[i].pick_rate + "</td>";
//				tableRows += "<td class ='rData'>" + res[i].ban_rate + "</td>";
//				tableRows += "</tr>";
//			}
//			//			let tableBottom = "</table>"
//			$('.rTableBody').html(tableRows);
//			//			console.log(res);
//			//			console.log(a);
//
//		}
//	});
//
//}


function tierSelect() {
	var selectedPosition = document.querySelector('.rankSearch span.active').id;
	var selectedTier = document.getElementById("rankSelect").value;
	champRank(selectedPosition, selectedTier)
}
function champRank(position, tier) {
	var tier = document.getElementById("rankSelect").value;
	$.ajax({
		type: "post",
		url: "/champRank",
		data: { "teamPosition": position, "tier": tier },
		success: function(res) {

			let tableRows = '';

			for (let i = 0; i < res.length; i++) {
				tableRows += "<tr class='rTable'>";
				tableRows += "<td class='rData'><span class='champNum'>" + (i + 1) + "</span></td>";
				tableRows += "<td class ='rData'><div><div class = 'champs-sc'><div class ='champ-sc-img'><img width='45' height='45' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='champRankImg'></div><span class='rankChampName'>" + res[i].champion_name_kr + "</span></div></div></td>";
				tableRows += "<td class ='rData'><div class='rate_items'><span class= 'rate_vp'>" + res[i].win_rate + "<span class='rate_p'> % </span></span></div></td>";
				tableRows += "<td class ='rData'><div class='rate_items'><span class= 'rate_vp'>" + res[i].pick_rate + "<span class= 'rate_p'> % </span></span></div></td>";
				tableRows += "<td class='rData'><div class='rate_items'><span class='rate_vp'>" + res[i].ban_rate + "<span class='rate_p'> % </span></span></div></td>";

				tableRows += "</tr>";
			}


			$('.rTableBody').html(tableRows);
			//			console.log(res);
			//			console.log(a);

			if (modNum == 1) {

				$('span').css("color", "#ffffff")


			}
		}
	});

}

$('.rankSearch span').on('click', function() {
	$('.rankSearch span').removeClass('active');
	$(this).addClass('active');
	// 추가: 클릭한 포지션에 따라 데이터 갱신
	var selectedPosition = $(this).attr('id');
	var selectedTier = document.getElementById("rankSelect").value;
	champRank(selectedPosition, selectedTier);


});


$(document).on('click', '.rankLine>div', function() {
	$(this).addClass('ranklineBtn');
	$(this).siblings().removeClass('ranklineBtn');


});
