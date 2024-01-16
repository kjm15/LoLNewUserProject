package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ChampionDto;

@Mapper
public interface ChampionDao {

	public List<HashMap<String,String>> champList();

	public List<HashMap<String,String>> searchChamp(ChampionDto cDto);

}
