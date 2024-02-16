/**
 * 
 */
champUpdate() 

//setTimeout(() => { champUpdate() }, 5 * 1000); // 5초



function champUpdate() {
	laneChampList = ['TOP', 'jug', 'mid', 'adc', 'sup']
	for (let i in laneChampList) {
		console.log(laneChampList[i])

		$.ajax({
			type: "post",
			url: "/champUpdate",
			data: { "teamPosition": laneChampList[i] },
			success: function(res) {
				
				champRank('top');
				console.log("성공")

			}

		})
	}
}

