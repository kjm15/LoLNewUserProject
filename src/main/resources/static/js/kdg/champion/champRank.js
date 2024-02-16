$(document).ready(function() {

	i = 1;

	setInterval(function() {
		
		if (i == 0) {
			
			firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Brand.png'>"
			$('.comm_firstChamp_img').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lillia.png'>"
			$('.comm_secondChamp_img').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png'>"
			$('.comm_thirdChamp_img').html(thirdChamp)			
			
			i = i + 1;

		} else if (i == 1) {

			firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png'>"
			$('.comm_firstChamp_img').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Katarina.png'>"
			$('.comm_secondChamp_img').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png'>"
			$('.comm_thirdChamp_img').html(thirdChamp)			
			
			i = i + 1;

		} else if (i == 2) {

			firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MissFortune.png'>"
			$('.comm_firstChamp_img').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jhin.png'>"
			$('.comm_secondChamp_img').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png'>"
			$('.comm_thirdChamp_img').html(thirdChamp)	
			
			i = i + 1;

		} else if (i == 3) {

			firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Maokai.png'>"
			$('.comm_firstChamp_img').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Senna.png'>"
			$('.comm_secondChamp_img').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Bard.png'>"
			$('.comm_thirdChamp_img').html(thirdChamp)
			
			i = i + 1;
			
		} else if (i == 4) {

			firstChamp = "<img class = 'crown_img' src='../img/kdg/glory.png'><img id = 'myChamp' class = 'firstTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Trundle.png'>"
			$('.comm_firstChamp_img').html(firstChamp)

			secondChamp = "<img id = 'myChamp' class = 'secondTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Aatrox.png'>"
			$('.comm_secondChamp_img').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' class = 'thirdTierChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malphite.png'>"
			$('.comm_thirdChamp_img').html(thirdChamp)
			
			i = 0;

		}



	}, 5000)

})