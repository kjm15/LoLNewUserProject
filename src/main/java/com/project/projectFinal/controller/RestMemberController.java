package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/member")
public class RestMemberController {
		
	@Autowired
	MemberService memberService;
	@PostMapping("/join/idCheck")
	public MemberDto joinIdCheck(MemberDto memberDto,Model model) {
		MemberDto mDto = memberService.joinIdCheck(memberDto);
		return mDto;
	}

}
