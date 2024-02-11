package com.project.projectFinal.jghController;

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

		log.info("=={}", riotApiDto);
		// 푸아이디 가지고 오기
		String puuid = webClientService.getPuuId(riotApiDto.getGameName(), riotApiDto.getTagLine());

		return webClientService.getgameid(puuid);
		// 리스트 가지고 오기(5개로 제한)
	}

	@PostMapping("/findOnebyList")
	public Map findOnebyList(RiotApiDto riotApiDto) {

		log.info("=={}", riotApiDto);
		// 푸아이디 가지고 오기
		
		return webClientService.getgameinfo(riotApiDto.getMatchIdjustOne());
		// 리스트 가지고 오기(3개로 제한)
	}

	@PostMapping("/dbSaveInfoRiotTv")
	public void dbSaveInfoRiotTv(@RequestBody List<Map<String, Object>> dbList) {

//		log.info("=={}", dbList);
		// 리스트맵 db저장
		webClientService.dbSaveInfoRiotTv(dbList);
	}

	@PostMapping("/dbFindData")
	public List<Map<String, Object>> dbFindData(RiotApiDto riotApiDto) {

		return webClientService.dbFindData(riotApiDto);
		// 리스트 가지고 오기(3개로 제한)
	}
}
