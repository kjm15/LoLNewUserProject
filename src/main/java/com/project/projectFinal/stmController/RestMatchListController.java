package com.project.projectFinal.stmController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.dto.RiotGameDto;
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

	@PostMapping("/riot/game")
	public ArrayList<HashMap<String, ArrayList<HashMap<String, String>>>> RiotGame(String Mlist)
			throws JsonMappingException, JsonProcessingException {
		RiotGameDto riotGameDto = new RiotGameDto();	
		Gson gson = new Gson();

		ArrayList<HashMap<String, ArrayList<HashMap<String, String>>>> map1 = gson.fromJson(Mlist, ArrayList.class);
		List<Map> newGList = new ArrayList<>();
		for (int i = 0; i < map1.size(); i++) {
			Map response1 = map1.get(i);
//			log.info("=={}", response1.get("teams"));
			List response2 = (List) response1.get("info");
			for (int j = 0; j < response2.size(); j++) {
				Map response3 = (Map) response2.get(j);
//				log.info(i+"=={}", response3);
				String riotIdGameName = (String) response3.get("riotIdGameName");
				riotGameDto.setRiotIdGameName(riotIdGameName);
				log.info(i+"=={}", response3);
				
			}
		}
		

		return null;
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