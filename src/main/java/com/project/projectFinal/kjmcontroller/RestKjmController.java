package com.project.projectFinal.kjmcontroller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
public class RestKjmController {
	
	@PostMapping("/test/ajax")
	public String ajaxtest(MemberDto memberDto) {
		//mDto.ajaxtest();
		log.info("==========mdto{}",memberDto);
		return null;
	}
	
}
