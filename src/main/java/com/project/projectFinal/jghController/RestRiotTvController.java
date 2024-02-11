package com.project.projectFinal.jghController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.service.WebClientService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/riotTv")
public class RestRiotTvController {

	@Autowired
	WebClientService webClientService;

	@PostMapping("/findPuuIdFindList")
	public List<String> findPuuIdFindList(RiotApiDto riotApiDto) {

		String puuid = webClientService.getPuuId(riotApiDto.getGameName(), riotApiDto.getTagLine());

		return webClientService.getgameid(puuid, String.valueOf(riotApiDto.getMatchIdCnt()));

	}

	@PostMapping("/findOnebyList")
	public Map findOnebyList(RiotApiDto riotApiDto) {

		return webClientService.getgameinfo(riotApiDto.getMatchIdjustOne());

	}

	@PostMapping("/dbSaveInfoRiotTv")
	public void dbSaveInfoRiotTv(@RequestBody List<Map<String, Object>> dbList) {

		// 리스트맵 db저장
		webClientService.dbSaveInfoRiotTv(dbList);
	}

	@PostMapping("/dbFindData")
	public List<Map<String, Object>> dbFindData(RiotApiDto riotApiDto) {

		return webClientService.dbFindData(riotApiDto);

	}

	@PostMapping("/matchListVsDb")
	public ArrayList<String> matchListVsDb(@RequestBody List<String> mList) {

		return webClientService.matchListVsDb(mList);
	}
}
