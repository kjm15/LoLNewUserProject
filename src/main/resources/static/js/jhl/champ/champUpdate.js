/**
 * 
 */
champUpdate() 

//setTimeout(() => { champUpdate() }, 5 * 1000); // 5초



function champUpdate() {
	laneChampList = ['TOP', 'jug', 'mid', 'adc', 'sup']
	laneList = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY']
	for (let i in laneChampList) {
		console.log(laneChampList[i])

		$.ajax({
			type: "post",
			url: "/champUpdate",
			data: { "teamPosition": laneChampList[i] },
			success: function(res) {
				
				console.log("성공")

			}

		})
	}
}

