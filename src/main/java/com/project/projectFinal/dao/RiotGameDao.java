package com.project.projectFinal.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.RiotGameDto;

@Mapper
public interface RiotGameDao {

	void RiotGameInfo(Map<String, RiotGameDto> rMap);

	void RiotGameTeams(Map<String, RiotGameDto> rMap);

	void RiotGameBans(Map<String, RiotGameDto> rMap);

	List<Map<String, RiotGameDto>> RiotGameInfoSelect(String matchId);

	List<Map<String, RiotGameDto>> RiotGameTeamsSelect(String matchId);

//	List<Map<String, RiotGameDto>> RiotGameBansSelect(String matchId);

	List<String> DBRiotGameMatchSelect(String gameName);

	Map DbriotGameData(String matchId);

	int getMatchId(String matchId);


	List<Map<String, Object>> DBRiotGameName(String matchId);

	Map<String, Object> sendDataToPy(Map<String, String> sMap);

	Map<String, Object> UPdateTier(RiotGameDto rDto);

	void saveAiData(Map<String, Object> aiReultMap);

	Map<String, Object> forOneData(Map<String, Object> aMap);

	List<Map<String, Object>> timelineInfo(String matchId);

	List<Map<String, Object>> teamList(String matchId);


}
