package com.project.projectFinal.service;

import java.util.List;

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
}