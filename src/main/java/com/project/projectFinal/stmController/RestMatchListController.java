package com.project.projectFinal.stmController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.PostDto;
import com.project.projectFinal.service.MatchListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestMatchListController {
	@Autowired
	MatchListService matchListService;
	
	@PostMapping("/matchList/find")
	public List<Map> matchListFind(PostDto postDto,Model model) {
		//log.info("==========postDto:{}",postDto);
		String puuid = matchListService.puuId(postDto.getGameName(),postDto.getTagLine());
		//log.info("==========puuid:{}",puuid);
		List<String> matchList = matchListService.MatchList(puuid);
		//log.info("==========puuid:{}",matchList);
		
		List<Map> MList = matchListService.gamedate(matchList);
		return MList;
	}
	@PostMapping("/match/list")
	public List<Map> matchList(PostDto postDto) {
		String puuid = matchListService.puuId(postDto.getGameName(),postDto.getTagLine());
		
		List<String> matchList = matchListService.MatchList(puuid);
		
		List<Map> MList = matchListService.gamedate(matchList);
		return MList;
	}
	
	
}