package com.project.projectFinal.stmController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SummonerV4Controller {
	@PostMapping("/summoner/v4")
	public String summonerV4(String riotIdGameName, String riotIdTagline) {

		return riotIdGameName;
	};
}
