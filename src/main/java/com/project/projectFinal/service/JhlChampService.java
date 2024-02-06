package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.dao.JhlChampDao;
import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.dto.ChampionRankDto;

@Service
public class JhlChampService {

	@Autowired
	JhlChampDao champDao;
	
	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto) {

		return champDao.champSearch(champDto);
	}


	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto) {
		return champDao.champLineSelect(champDto);
	}

	public List<HashMap<String, String>> champListAll() {
		return champDao.champListAll();
	}


	public List<HashMap<String, Object>> champRank(ChampionRankDto rankDto) {
		return champDao.champRank(rankDto);
	}





}
