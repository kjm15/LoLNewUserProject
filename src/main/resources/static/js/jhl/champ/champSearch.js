/**
 * 
 */
$(function() {

	champImgAll();

});


$('#champSearch').on('keyup', function() {
	let searchChamp = $('#champSearch').val();

	$.ajax({
		type: "post",
		url: "/champSearch",
		data: { "champSearch": searchChamp },
		success: function(res) {

			let str1 = "<div class='se'>"
			let str2 = "<div class ='champs'> ";
			let str3 = '';
			for (let i = 0; i < res.length; i++) {
				str3 += "<div class='champImgItem'><div class='cimgs'>";
				str3 += "<img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='championImg'></div>";
				str3 += "<span class ='champName'>" + res[i].champion_name_kr + "</span>";
				str3 += "</div>";

			}
			let str4 = "</div>"
			let str5 = "</div>"
			$('.champImgItems').html(str1 + str2 + str3 + str4 + str5);
//			console.log(res)

		}
	});
});

function champImgAll() {
	$.ajax({
		type: "get",
		url: "/champListAll",
		dataType: "json",
		success: function(res) {

			let str1 = "<div class='se'>"
			let str2 = "<div class ='champs'> ";
			let str3 = '';
			for (let i = 0; i < res.length; i++) {
				str3 += "<div class='champImgItem'><div class='cimgs'>";
				str3 += "<img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='championImg'></div>";
				str3 += "<span class ='champName'>" + res[i].champion_name_kr + "</span>";
				str3 += "</div>";

			}
			let str4 = "</div>"
			let str5 = "</div>"
			$('.champImgItems').html(str1 + str2 + str3 + str4 + str5);
//			console.log(res)

		}
	});

}
$('#champAll').on('click', function() {
	champImgAll();

});





function champLine(lineSelect) {
	$.ajax({
		type: "post",
		url: "/champLineSelect",
		data: { "line": lineSelect },
		success: function(res) {

			let str1 = "<div class='se'>"
			let str2 = "<div class ='champs'> ";
			let str3 = '';
			for (let i = 0; i < res.length; i++) {
				str3 += "<div class='champImgItem'><div class='cimgs'>";
				str3 += "<img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='championImg'></div>";
				str3 += "<span class ='champName'>" + res[i].champion_name_kr + "</span>";
				str3 += "</div>";

			}
			let str4 = "</div>"
			let str5 = "</div>"
			$('.champImgItems').html(str1 + str2 + str3 + str4 + str5)
//			console.log(lineSelect)
//			console.log(res)

		}
	})

};

//function champRank(a){
//	$.ajax({
//		type: "post",
//		url: "/champRank",
//		data: { "teamPosition": a },
//		success: function(res) {
//			let str1 = "<table>"
//			let str2= ''
//			for(let i=0; i<res.length; i++){
//				str2 += "<tr>"
//				str2 +="<td><img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='championImg'></div></td>"
//				str2 +="<td>"+res[i].top_win_rate+"</td>"
//				str2 +="<td>"+res[i].top_pick_rate+"</td>" 
//				str2+="</tr>"
//			}
//			let str3 ="</table>"
//			
//			$('.rankItems').html(str1 + str2 + str3)
//		console.log(res)
//		
//		}
//	})
//}


