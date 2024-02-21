/**
 * 
 */
//champCounter()

function champCounter() {
	laneChampCounterList = ['TOP', 'jug', 'mid', 'adc', 'sup']
	for (let i in laneChampCounterList) {

		console.log(laneChampCounterList[i] + "업데이트 시작")

		$.ajax({
			type: "post",
			url: "/champCounter",
			data: { "teamPosition": laneChampCounterList[i] },
			success: function(res) {
//				console.log("<<  뜨면 업데이트 성공")
			}
		})
	}
}