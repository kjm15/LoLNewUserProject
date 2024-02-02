package com.project.projectFinal.stmController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class stmRestController {
	@Autowired
	MemberService memberService;
	@PostMapping("/join/idCheck")
	public MemberDto joinIdCheck(MemberDto memberDto,Model model) {
		MemberDto mSer = memberService.joinIdCheck(memberDto);
		return mSer;
	}
	
}
