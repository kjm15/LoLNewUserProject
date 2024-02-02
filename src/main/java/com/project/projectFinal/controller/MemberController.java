package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/member")
public class MemberController {

	@Autowired
	MemberService memberService;

	@GetMapping("login")
	public String login(HttpServletRequest req) {
		String referer = req.getHeader("Referer");
		req.getSession().setAttribute("prevPage", referer);
		return "aMain/loginFrm";
	}
	@GetMapping("join")
	public String join() {
		
		return "aMain/joinFrm";
	}
	@PostMapping("join")
	public String join(MemberDto memberDto) {

		if (memberService.join(memberDto)) {

			return "redirect:/member/login";
		} else {

			return "redirect:/member/join";
		}

	}

}
