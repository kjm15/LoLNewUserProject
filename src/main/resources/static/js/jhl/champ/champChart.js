

//챔피언 클릭시 차트만들기
const champImgItem = document.querySelector('.champImgItems');
champImgItem.addEventListener('click', (e) => {

	console.log(e.target.id)
	champChartGraph(e.target.id)

	//차트만들기 시작

})

horizontalBarlist = []
function champChartGraph(championName) {
	
	if(championName == ''){
		
		alert("잘못눌렀습니다. 챔피언을 눌러주세요")
		return false;
	}
	
	data = { "championName": championName }
	$.ajax({
		type: 'post',
		url: '/forGraphInfo',
		data: data,
		success: function(res) {

			console.log(res)

			for (let i in res) {

				horizontalBarlist.push(makeHorizontalBar(res[i].champion_name, res[i].teamPosition))
			}

			$('#myImg').show();
			$('#teamrate').show();
			$('#myChart1').empty();
//			$('#myChart2').empty();
			$('#myChart3').empty();

			$('#myChart1').append('<canvas id="winDoughnutChart"><canvas>');
//			$('#myChart2').append('<canvas id="doughnutChart" width = "250"><canvas>');
			$('#myChart3').append('<canvas id="bar-chart-horizontal" width = "500px"><canvas>');

			let myImg = "<img width='150' height='150'  alt='못 불러옴' src='https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + res[0].champion_name + ".png'>"
			$('.myImg').html(myImg);

			//총 승률
			let win_rate = res[0].win_rate
			let lose_rate = 100 - res[0].win_rate
			let wl_rate_list = [win_rate, lose_rate]
			Chart.pluginService.register({
				beforeDraw: function(chart) {
					if (chart.config.options.elements.center) {
						// Get ctx from string
						var ctx = chart.chart.ctx;

						// Get options from the center object in options
						var centerConfig = chart.config.options.elements.center;
						var fontStyle = centerConfig.fontStyle || 'Arial';
						var txt = centerConfig.text;
						var color = centerConfig.color || '#000';
						var maxFontSize = centerConfig.maxFontSize || 75;
						var sidePadding = centerConfig.sidePadding || 20;
						var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
						// Start with a base font of 30px
						ctx.font = "30px " + fontStyle;

						// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
						var stringWidth = ctx.measureText(txt).width;
						var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

						// Find out how much the font can grow in width.
						var widthRatio = elementWidth / stringWidth;
						var newFontSize = Math.floor(30 * widthRatio);
						var elementHeight = (chart.innerRadius * 2);

						// Pick a new font size so it will not be larger than the height of label.
						var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
						var minFontSize = centerConfig.minFontSize;
						var lineHeight = centerConfig.lineHeight || 25;
						var wrapText = false;

						if (minFontSize === undefined) {
							minFontSize = 20;
						}

						if (minFontSize && fontSizeToUse < minFontSize) {
							fontSizeToUse = minFontSize;
							wrapText = true;
						}

						// Set font settings to draw it correctly.
						ctx.textAlign = 'center';
						ctx.textBaseline = 'middle';
						var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
						var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
						ctx.font = fontSizeToUse + "px " + fontStyle;
						ctx.fillStyle = color;

						if (!wrapText) {
							ctx.fillText(txt, centerX, centerY);
							return;
						}

						var words = txt.split(' ');
						var line = '';
						var lines = [];

						// Break words up into multiple lines if necessary
						for (var n = 0; n < words.length; n++) {
							var testLine = line + words[n] + ' ';
							var metrics = ctx.measureText(testLine);
							var testWidth = metrics.width;
							if (testWidth > elementWidth && n > 0) {
								lines.push(line);
								line = words[n] + ' ';
							} else {
								line = testLine;
							}
						}

						// Move the center up depending on line height and number of lines
						centerY -= (lines.length / 2) * lineHeight;

						for (var n = 0; n < lines.length; n++) {
							ctx.fillText(lines[n], centerX, centerY);
							centerY += lineHeight;
						}
						//Draw text in center
						ctx.fillText(line, centerX, centerY);
					}
				}
			});
			var config = {
				type: 'doughnut',
				data: {
					labels: ['승리', '패배'],
					datasets: [{
						data: wl_rate_list,

						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)'
							//							'rgba(255, 206, 86, 0.2)',
							//							'rgba(75, 192, 192, 0.2)',
							//							'rgba(255, 159, 64, 0.2)'
						], borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)'
							//							'rgba(255, 206, 86, 1)',
							//							'rgba(75, 192, 192, 1)',
							//							'rgba(255, 159, 64, 1)'
						]
					}]
				},
				options: {
					responsive: false,
					maintainAspectRatio: false, //x축 반으로 줄임
					cutoutPercentage: 70,
					elements: {
						center: {
							text: win_rate.toFixed(2) + "%",
							color: '#FF6384', // Default is #000000
							fontStyle: 'Arial', // Default is Arial
							sidePadding: 20, // Default is 20 (as a percentage)
							minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
							lineHeight: 10 // Default is 25 (in px), used for when text wraps


						}
					}
				}
			};

			var ctx = document.getElementById("winDoughnutChart").getContext("2d");
			var myChart = new Chart(ctx, config);

		}
	})

}

function makeHorizontalBar(champion_name, teamPosition) {

	data = { 'champion_name': champion_name, 'teamPosition': teamPosition }

	$.ajax({
		contentType: 'application/json',
		type: 'post',
		url: '/forGraphInfo2',
		data: JSON.stringify(data),
		success: function(res) {
			console.log(res)


			///수평바
			let championNameList = []
			let championImgList = []
			let championPickList = []
			for (let i in res) {
				let myImg = "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/" + res[i].champion_name + ".png"

				championNameList.push(res[i].champion_name)
				championImgList.push(myImg)
				championPickList.push(res[i].pick_rate)
			}

			labels = championNameList;
			images = championImgList


				.map(png => {
					const image = new Image();
					image.src = png;
					return image;
				});
			values = championPickList;

			new Chart(document.getElementById("bar-chart-horizontal"), {
				type: "horizontalBar",
				plugins: [{
					afterDraw: chart => {
						var ctx = chart.chart.ctx;
						var xAxis = chart.scales['x-axis-0'];
						var yAxis = chart.scales['y-axis-0'];
						yAxis.ticks.forEach((value, index) => {
							var y = yAxis.getPixelForTick(index);
							ctx.drawImage(images[index], xAxis.left-20, y-9 , 15, 15);
						});
					}
				}],
				data: {
					labels: labels,
					datasets: [{
						label: '와드 구입 갯수',
						data: values,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						], borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 2
					}]
				},
				options: {
					responsive: false,
					maintainAspectRatio: false, //x축 반으로 줄임
					layout: {
						padding: {
							left: 50
						}
					},
					tooltips: { //튤팁제거
						enabled: false
					},
					legend: {
						display: false
					},
					title: {
						display: false
					},
					scales: {
						yAxes: [{
							ticks: {
								display: false
							},
							gridLines: {
								drawBorder: false,
							}
						}],
						xAxes: [{
							ticks: {
								beginAtZero: true
							},
							gridLines: {
								display: false,
							},
							ticks: {
								autoSkip: true,  //
								maxTicksLimit: 1 // 
							}
						}],

					}
				}


			})
		}
	})
}