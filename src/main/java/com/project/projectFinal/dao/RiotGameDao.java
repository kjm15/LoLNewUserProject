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


	List<Map<String, RiotGameDto>> DBRiotGameName(String matchId);

	List<Map<String, String>> sendDataToPy(String matchId);


}
