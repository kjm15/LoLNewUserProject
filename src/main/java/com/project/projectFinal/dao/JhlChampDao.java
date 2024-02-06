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



	

	

}
