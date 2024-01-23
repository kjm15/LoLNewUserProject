package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchListService {
	@Autowired
	WebMatchListService webmatchListService;

	public String puuId(String gameName, String tagLine) {
		String puuid = webmatchListService.getpuuId(gameName , tagLine);
		  return puuid;
	}

	public List<String> MatchList(String puuid) {
		List<String>  MList = webmatchListService.MatchList(puuid);
		
		return MList;
		
	}

	public List<Map> gamedate(List<String> matchList) {
		List<Map> MList = new ArrayList<>();
		for(int i=0; i<matchList.size(); i++) {
			Map gMap = webmatchListService.gamedate(matchList.get(i));
			MList.add(gMap);
			
		}
		return MList;
		
		
		
	}
}