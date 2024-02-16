/**
 * 
 */


//setTimeout(() => { champUpdate() }, 5 * 1000); // 5초



function champUpdate() {
	laneChampList = ['TOP', 'jug', 'mid', 'adc', 'sup']
	for (let i in laneChampList) {
		console.log(laneChampList[i]+"업데이트 시작")

		$.ajax({
			type: "post",
			url: "/champUpdate",
			data: { "teamPosition": laneChampList[i] },
			success: function(res) {
				
				console.log("<< 5 뜨면 업데이트 성공")

			}

		})
	}
}

