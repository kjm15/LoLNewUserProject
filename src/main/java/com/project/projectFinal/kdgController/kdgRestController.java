package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.service.ChampionService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class kdgRestController {
	
	@Autowired
	ChampionService cs;
	
	@PostMapping("/kdg/search")
	public List<HashMap<String, String>> search(ChampionDto cDto) {
	
		return cs.searchChamp(cDto);
		
	}
	
	
	
}
