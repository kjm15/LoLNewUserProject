package com.project.projectFinal.stmController;

import org.springframework.beans.factory.annotation.Autowired;
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
	
//	@PostMapping("/matchList/find")
//	public String matchListFind(PostDto postDto) {
//		log.info("==========:{}",postDto);
//		matchListService.puuId(postDto.getGameName(),postDto.getTagLine());
//		return "";
//	}

	
}
