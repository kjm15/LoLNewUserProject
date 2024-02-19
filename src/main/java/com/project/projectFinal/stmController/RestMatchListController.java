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
import com.google.gson.Gson;
import com.project.projectFinal.dto.RiotApiDto;
import com.project.projectFinal.dto.RiotGameDto;
import com.project.projectFinal.service.MatchListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestMatchListController {
	@Autowired
	MatchListService matchListService;

	private List<String> matchList; // 검색시 리스트
	private List<String> MorematchList; // 검색시 리스트
//	private List<String> moreMatchList; // 더보기

	@PostMapping("/match/list")
	public List<Map> matchList(RiotApiDto userListDto) {

		RiotGameDto riotGameDto = new RiotGameDto();
		String puuid = matchListService.puuId(userListDto);
		userListDto.setPuuid(puuid);

		matchList = matchListService.MatchList(userListDto);

		List<String> DbMatchList = matchListService.DBRiotGameMatchSelect(userListDto.getGameName());
		if (DbMatchList.size() == 0) { // 만약 디비에 저장 데이터가 없을경우 바로 api 가기

			List<Map> MList = matchListService.gamedate(matchList);

			return MList;
		}
		int Dbcount = 0; // 디비에 있는지 확인을 위하여 카운트
		List<String> newApiMatchList = new ArrayList<>();
		for (int i = 0; i < matchList.size(); i++) { // 디비랑 비교
			int Db = matchListService.getMatchId(matchList.get(i));
			if (Db == 0) {
				newApiMatchList.add(matchList.get(i));
			}
		}

		if (newApiMatchList.size() != 0) {
			List<Map> MList = matchListService.gamedate(newApiMatchList);
			return MList;
		}

		return null;

	}

	@PostMapping("/riot/api")
	public String RiotGameapi(String Mlist) throws JsonMappingException, JsonProcessingException {
		RiotGameDto riotGameDto = new RiotGameDto();
		Gson gson = new Gson();
		ArrayList<HashMap<String, ArrayList<HashMap<String, String>>>> map1 = gson.fromJson(Mlist, ArrayList.class);

		int res = 0;
		for (int i = 0; i < map1.size(); i++) {
			Map response = map1.get(i);
			List info = (List) response.get("info");
			for (int j = 0; j < info.size(); j++) {
				Map RiotInfo = (Map) info.get(j);
				matchListService.RiotGameInfo(RiotInfo);
				System.out.println("인포");

			}
			List teams = (List) response.get("teams");
			for (int j = 0; j < teams.size(); j++) {
				Map RiotTeams = (Map) teams.get(j);
				matchListService.RiotGameTeams(RiotTeams);
				System.out.println("팀");

			}
			if (response.get("bans") == null) {
				res += 1;
			} else {
				List bans = (List) response.get("bans");
				for (int j = 0; j < bans.size(); j++) {
					Map RiotBans = (Map) bans.get(j);
					matchListService.RiotGameBans(RiotBans);
					System.out.println("벤");

				}
			}

		}

		return "잘됨";

	}

	@PostMapping("/riot/game")
	public ArrayList<HashMap<String, Object>> RiotGame() {
		List<String> MatchList = matchList; // 새로 가져온 리스트

		if (MorematchList != null) {
			if (MorematchList.size() > MatchList.size()) {
				MorematchList = null;
			}
		}

		List<String> MatchListSelect = new ArrayList<>();// 새로 가져온 리스트

		if (MatchList.size() > 3) {
			for (int j = MorematchList.size(); j < MatchList.size(); j++) {
				MatchListSelect.add(MatchList.get(j));
			}
		} else {
			MatchListSelect = MatchList;
		}

		ArrayList<HashMap<String, Object>> MList = new ArrayList<>();
		for (int i = 0; i < MatchListSelect.size(); i++) {
			HashMap<String, Object> newGList = new HashMap<>();
			List<Map<String, RiotGameDto>> infoData = matchListService.RiotGameInfoSelect(MatchListSelect.get(i));
			List<Map<String, RiotGameDto>> teamsData = matchListService.RiotGameTeamsSelect(MatchListSelect.get(i));
			List<Map<String, RiotGameDto>> bansData = matchListService.RiotGameBansSelect(MatchListSelect.get(i));
			newGList.put("bans", bansData);
			newGList.put("teams", teamsData);
			newGList.put("info", infoData);
			MList.add(newGList);
		}
		MorematchList = matchList;
		return MList;
	}
}