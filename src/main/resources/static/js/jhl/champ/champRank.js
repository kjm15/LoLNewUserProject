

$(function() {

	$('Emerald').click(function() {
		$("#Top").click();
	})
	$("#Top").click(function() {
		champRank($(this).attr("id"));
	});
	champRank('Top');
});


//function tierSelect(t) {
//	$.ajax({
//		type: "post",
//		url: "tierSelect",
//		data: { "tier": t },
//		success: function(res) { }
//	})
//}





function champRank(a) {


	$.ajax({
		type: "post",
		url: "/champRank",
		data: { "teamPosition": a },
		success: function(res) {
			//			let tableTop = "<table class='Rankable'>"
			//			let tablecolgroup = "<colgroup><col width='40%'><col width='30%'><col width='30%'></colgroup><thead>"
			//			let tableColumns = "<tr class='tableColumns'><th><span>챔피언</span></th><th><span>승률</span></th><th><span>픽률</span></th></tr></thead>";
			let tableRows = '';

			for (let i = 0; i < res.length; i++) {
				tableRows += "<tr class='rTable'>";
				tableRows += "<td class ='rData'><div><div class = 'champs-sc'><div class ='champ-sc-img'><img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='champRankImg'></div><span class='rankChampName'>" + res[i].champion_name_kr + "</span></div></div></td>";
				tableRows += "<td class ='rData'>" + res[i].win_rate + "</td>";
				tableRows += "<td class ='rData'>" + res[i].pick_rate + "</td>";
				tableRows += "<td class ='rData'>" + res[i].ban_rate + "</td>";
				tableRows += "</tr>";
			}
			//			let tableBottom = "</table>"
			$('.rTableBody').html(tableRows);
			//			console.log(res);
			//			console.log(a);
	
		}
	});
}

	$(document).on('click', '.rankLine>div', function() {
		$(this).addClass('ranklineBtn');
		$(this).siblings().removeClass('ranklineBtn');
	});
