package com.project.projectFinal.stmController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.RiotGameDto;
import com.project.projectFinal.service.MatchListService;
import com.project.projectFinal.service.WebMatchListService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class SummonerV4Controller {
	@Autowired
	MatchListService matchListService;

	@Autowired
	WebMatchListService webmatchListService;

	@PostMapping("/summoner/v4/userList")
	public List<Map<String, RiotGameDto>> summonerV4(String matchId) {
		List<Map<String, RiotGameDto>> RiotGameName = matchListService.DBRiotGameName(matchId); // 티어 없는애만 가져옴
		
		System.out.println(RiotGameName.size() + "개의 티어 가지러 감...");
		
//		webmatchListService.SummonerV4(RiotGameName);

		
		return RiotGameName;
	};
	
	@PostMapping("/summoner/v4/Rank")
	public Map<String, String> summonerV4Rank(@RequestBody Map<String , String> data) {
//		System.out.println(data);
		webmatchListService.SummonerV4(data);
		return data;
	}
}
