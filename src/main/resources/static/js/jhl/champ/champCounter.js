/**
 * 
 */
//champCounter()

function champCounter() {
	laneChampCounterList = ['TOP', 'jug', 'mid', 'adc', 'sup']
	for (let i in laneChampCounterList) {



		$.ajax({
			type: "post",
			url: "/champCounter",
			data: { "teamPosition": laneChampCounterList[i] },
			success: function(res) {
				//			console.log(res)
				console.log(laneChampCounterList[i])
			}
		})
	}
}