package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.dto.ChampionRankDto;

@Mapper
public interface JhlChampDao {

	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto);

	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto);

	public List<HashMap<String, String>> champListAll();

	public List<HashMap<String, Object>> champRank(ChampionRankDto rankDto);

	public List<HashMap<String, Object>> rankListInfo(ChampionRankDto rankDto);

	public List<HashMap<String, Object>> laneListInfo(ChampionRankDto rankDto);

	public List<HashMap<String, Object>> rankListTeamPositionInfo(String teamPosition, int championId);

	public void saveChampRankT(HashMap<String, Object> champRankTList);

	public int saveChamppick_rate();

	public int allChampCnt(String teamPosition);

	public int banChampCnt(String champion_name_kr);

	public List<HashMap<String, Object>> laneCounterListInfo(ChampionRankDto rankDto);

	public List<HashMap<String, Object>> rankListCounterA(String teamPosition, int championId);

//	public List<HashMap<String, Object>> rankListCounterEnemy(String teamPosition1, String match_id, int championId);
//
//	public List<HashMap<String, Object>> rankAllListCounter(Integer championIdM, Integer championIdE, String teamPosition2);

	public List<HashMap<String, Object>> rankListCounterEnemy(String teamPosition1, String match_id);
//
//	public void saveChampCounterT(HashMap<String, Object> cshampCounterList);



}
