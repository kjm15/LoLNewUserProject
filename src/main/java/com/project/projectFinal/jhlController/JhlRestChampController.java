package com.project.projectFinal.jhlController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.dto.ChampionRankDto;
import com.project.projectFinal.service.JhlChampService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class JhlRestChampController {

	@Autowired
	JhlChampService champService;

	@PostMapping("/champSearch")
	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto) {
		return champService.champSearch(champDto);
	}

	@PostMapping("/champLineSelect")
	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto) {
		return champService.champLineSelect(champDto);
	}

	@GetMapping("/champListAll")
	@ResponseBody
	public List<HashMap<String, String>> champListAll() {
		return champService.champListAll();
	}

//	@PostMapping("/champRank")
//	public List<HashMap<String, Object>> champRank(ChampionRankDto rankDto) {
//		return champService.champRank(rankDto);
//	}
//	
	@PostMapping("/champTierRank")
	public List<HashMap<String, Object>> champTierRank(ChampionRankDto rankDto) {
		return champService.champTierRank(rankDto);
	}

//	@PostMapping("/champUpdate")
//	public void champUpdate(ChampionRankDto rankDto) {
////		log.info("==={}", rankDto.getTeamPosition());
//		
//		champService.champUpdate(rankDto);
//
//	}

	@PostMapping("/champCounter")
	public void champCounter(ChampionRankDto rankDto) {

		champService.champCounter(rankDto);

	}

	@PostMapping("/tierDataUpdate")
	public void tierDataUpdate(ChampionRankDto rankDto) {

		champService.ranktierlistInfo(rankDto);

	}

	@PostMapping("/forGraphInfo")
	public Map<String, Object> forGraphInfo(String championName) {
		log.info(championName);

		return champService.forGraphInfo(championName);

	}

}
