$(document).ready(function() {
	
	str = "<img src='../img/kdg/loading.gif' class = 'loadingImg'>"	
	$('.graph_box').html(str)
	
	$('.loadingImg').show()
	
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
		
		$('.loadingImg').hide();
		
		str2 = `
			<div class = "graph_box1">
				<div class = "top_graph">
					<div id="chart_top" style="width: 100%; height: 100%;"></div>
				</div>
				<div class = "jug_graph">
					<div id="chart_jug" style="width: 100%; height: 100%;"></div>
				</div>
			</div>
			<div class = "graph_box2">
				<div class = "mid_graph">
					<div id="chart_mid" style="width: 100%; height: 100%;"></div>
				</div>
				<div class = "adc_graph">
					<div id="chart_adc" style="width: 100%; height: 100%;"></div>
				</div>	
				<div class = "sup_graph">
					<div id="chart_sup" style="width: 100%; height: 100%;"></div>
				</div>	
			</div>
		`
		$('.graph_box').html(str2)
		  
	    $.ajax({

		  type: "POST",
		  url: "/kdg/itemGraph",
		  success: function(res) {


//			  top chart
		      var topdata = new google.visualization.DataTable();
		      topdata.addColumn('string', 'itemName');
		      topdata.addColumn('number', '픽률');
		      var toprows = [];
		      var topLength = 5
              for (var i = 0; i < topLength; i++) {
                  var topitemName = res[i].itemName_graph;
                  var topitemPickRate = parseFloat((parseFloat((res[i].itemPickCnt_graph/res[0].allItemCnt_graph)*100)).toFixed(2));
                  toprows.push([topitemName, topitemPickRate]);
              }
              topdata.addRows(toprows);

		      var topoptions = {
		        title: 'TOP',
		        curveType: 'none',
		        legend: { position: 'bottom' },
		        colors: ['pink']
			  }

		      var topchart = new google.visualization.LineChart(document.getElementById('chart_top'));
		      topchart.draw(topdata, topoptions);
		      
//			  jug chart
		      var jugdata = new google.visualization.DataTable();
		      jugdata.addColumn('string', 'itemName');
		      jugdata.addColumn('number', '픽률');
		      var jugrows = [];
		      var jugLength = 10
              for (var i = 5; i < jugLength; i++) {
                  var jugitemName = res[i].itemName_graph;
                  var jugitemPickRate = parseFloat((parseFloat((res[i].itemPickCnt_graph/res[0].allItemCnt_graph)*100)).toFixed(2));
                  jugrows.push([jugitemName, jugitemPickRate]);
              }
              jugdata.addRows(jugrows);

		      var jugoptions = {
		        title: 'JUG',
		        curveType: 'none',
		        legend: { position: 'bottom' },
		        colors: ['pink']
			  }

		      var jugchart = new google.visualization.LineChart(document.getElementById('chart_jug'));
		      jugchart.draw(jugdata, jugoptions);
		      
//			  mid chart
		      var middata = new google.visualization.DataTable();
		      middata.addColumn('string', 'itemName');
		      middata.addColumn('number', '픽률');
		      var midrows = [];
		      var midLength = 15
              for (var i = 10; i < midLength; i++) {
                  var miditemName = res[i].itemName_graph;
                  var miditemPickRate = parseFloat((parseFloat((res[i].itemPickCnt_graph/res[0].allItemCnt_graph)*100)).toFixed(2));
                  midrows.push([miditemName, miditemPickRate]);
              }
              middata.addRows(midrows);

		      var midoptions = {
		        title: 'MID',
		        curveType: 'none',
		        legend: { position: 'bottom' },
		        colors: ['pink']
			  }

		      var midchart = new google.visualization.LineChart(document.getElementById('chart_mid'));
		      midchart.draw(middata, midoptions);
		      
//			  adc chart
		      var adcdata = new google.visualization.DataTable();
		      adcdata.addColumn('string', 'itemName');
		      adcdata.addColumn('number', '픽률');
		      var adcrows = [];
		      var adcLength = 20
              for (var i = 15; i < adcLength; i++) {
                  var adcitemName = res[i].itemName_graph;
                  var adcitemPickRate = parseFloat((parseFloat((res[i].itemPickCnt_graph/res[0].allItemCnt_graph)*100)).toFixed(2));
                  adcrows.push([adcitemName, adcitemPickRate]);
              }
              adcdata.addRows(adcrows);

		      var adcoptions = {
		        title: 'ADC',
		        curveType: 'none',
		        legend: { position: 'bottom' },
		        colors: ['pink']
			  }

		      var adcchart = new google.visualization.LineChart(document.getElementById('chart_adc'));
		      adcchart.draw(adcdata, adcoptions);
	      
//			  sup chart
		      var supdata = new google.visualization.DataTable();
		      supdata.addColumn('string', 'itemName');
		      supdata.addColumn('number', '픽률');
		      var suprows = [];
		      var supLength = 25
              for (var i = 20; i < supLength; i++) {
                  var supitemName = res[i].itemName_graph;
                  var supitemPickRate = parseFloat((parseFloat((res[i].itemPickCnt_graph/res[0].allItemCnt_graph)*100)).toFixed(2));
                  suprows.push([supitemName, supitemPickRate]);
              }
              supdata.addRows(suprows);

		      var supoptions = {
		        title: 'SUP',
		        curveType: 'none',
		        legend: { position: 'bottom' },
		        colors: ['pink']
			  }

		      var supchart = new google.visualization.LineChart(document.getElementById('chart_sup'));
		      supchart.draw(supdata, supoptions);

	      }

      })
  
   }

})