package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.service.MemberService;

import lombok.extern.slf4j.Slf4j;




@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	MemberService memberService;
	
	@PostMapping("/saveDb")
	public DuoSearchDto saveDb(DuoSearchDto duoSearchDto ) {
		
		log.info("==========={}",duoSearchDto);
		
		return memberService.saveDbDuo(duoSearchDto);
	}
	

	
}
