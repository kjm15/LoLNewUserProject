package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionDto;
import com.project.projectFinal.dto.ItemDto;
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
	
	@PostMapping("/kdg/itemTest")
	public List<HashMap<String, ItemDto>> itemTest(ItemDto IDto) {
		
		return cs.itemTest(IDto);
		
	}
	
	@PostMapping("/kdg/position")
	public List<HashMap<String, String>> line(ChampionDto cDto) {
	
		return cs.champLine(cDto);
		
	}
	
}

