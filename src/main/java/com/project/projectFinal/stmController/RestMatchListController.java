package com.project.projectFinal.stmController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.service.MatchListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestMatchListController {
	@Autowired
	MatchListService matchListService;
	

	@PostMapping("/match/list")
	public List<Map> matchList(RiotApiDto userListDto) {
		String puuid = matchListService.puuId(userListDto);
		
		userListDto.setPuuid(puuid);
		
		List<String> matchList = matchListService.MatchList(userListDto.getPuuid());
		
		List<Map> MList = matchListService.gamedate(matchList);
		return MList;
	}
	
//	@PostMapping("/match/list")
//	public List<String> matchList(StmUserListDto userListDto) {
//		String puuid = matchListService.puuId(userListDto);
//		
//		userListDto.setPuuid(puuid);
//		
//		List<String> matchList = matchListService.DbMatchList(userListDto);
//		return matchList;
////		List<Map> MList = matchListService.gamedate(matchList);
////		return MList;
////	}
//	
//	}
}