package com.project.projectFinal.dao;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ChampionImageDto;

@Mapper
public interface JhlChampDao {


	public List<HashMap<String, String>> champListImg();

	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto);

	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto);

	public List<HashMap<String, String>> champListAll();



	

	

}
