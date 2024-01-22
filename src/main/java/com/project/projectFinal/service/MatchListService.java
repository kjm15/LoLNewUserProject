package com.project.projectFinal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchListService {
	@Autowired
	WebMatchListService matchListService;

	public String puuId(String gameName, String tagLine) {
		  WebMatchListService.getpuuId(gameName , tagLine);
		    
	}
}
