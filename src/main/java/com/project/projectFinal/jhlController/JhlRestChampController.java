package com.project.projectFinal.jhlController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.service.JhlChampService;


@RestController
public class JhlRestChampController {
	
	@Autowired
	JhlChampService champService;
	
	@PostMapping("/champSearch")
	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto) {
		return champService.champSearch(champDto);
	}
	
	
	@PostMapping("/champLineSelect")
	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto){
		return champService.champLineSelect(champDto);
	}
	
	@GetMapping("/champListAll")
	@ResponseBody
	public List<HashMap<String, String>> champListAll(){
		return champService.champListAll();
	}
	
	/*
	 * js에서 어떤값을 
	 * 
	 * 
	 */
}
