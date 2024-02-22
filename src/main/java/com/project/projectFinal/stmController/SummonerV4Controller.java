package com.project.projectFinal.stmController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.RiotGameDto;
import com.project.projectFinal.service.MatchListService;

@RestController
public class SummonerV4Controller {
	@Autowired
	MatchListService matchListService;

	@PostMapping("/summoner/v4")
	public List<Map<String, RiotGameDto>> summonerV4(String matchId) {
		List<Map<String, RiotGameDto>> RiotGameName = matchListService.DBRiotGameName(matchId); // 티어 없는애만 가져옴
	 // 티어 가져오는 포문 굴려야 함 
		return RiotGameName;
	};
}
