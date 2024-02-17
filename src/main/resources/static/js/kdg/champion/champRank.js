$(document).ready(function() {
	
	i = 1
	
	setInterval(getChampRank, 5000)
	
	function getChampRank(){
		
	    $.ajax({

		  type: "POST",
		  url: "/kdg/champRank",
		  success: function(res) {
		  	  
	  	  		if (i == 0) {
						
					console.log('탑')
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[0][0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
					
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[0][1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[0][2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)			
					
					i = i + 1;
		
				} else if (i == 1) {
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[1][0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
					
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[1][1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[1][2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)			
					
					i = i + 1;
		
				} else if (i == 2) {
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[2][0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
					
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[2][1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[2][2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)	
					
					i = i + 1;
		
				} else if (i == 3) {
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[3][0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
					
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[3][1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[3][2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)
					
					i = i + 1;
					
				} else if (i == 4) {
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[4][0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
		
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[4][1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[4][2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)
					
					i = 0;
		
				}
		  
		  }
		
		
		
		})

	}
})

	

$(document).ready(function() {
		
	    $.ajax({

			  type: "POST",
			  url: "/kdg/champRankStart",
			  success: function(res) {
		
					firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[0].champion_name+".png'>"
					$('.comm_firstChamp_img').html(firstChamp)
					
					secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[1].champion_name+".png'>"
					$('.comm_secondChamp_img').html(secondChamp)
					
					thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/"+res[2].champion_name+".png'>"
					$('.comm_thirdChamp_img').html(thirdChamp)	
			  
			  }

		
		})
})
