package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class MemberController {

	@Autowired
	MemberService memberService;

	//// POST매핑

	@PostMapping("/member/login") // 로그인 구현
	public String login(MemberDto memberDto, HttpSession session, Model model, RedirectAttributes redirectAttributes) {

		MemberDto a = memberService.login(memberDto); // 성공 or 실패시 에러

		// 로그인 아이디 세션에 저장
		session.setAttribute("userId", a.getUserId());

		redirectAttributes.addFlashAttribute("msg", "로그인성공");
		return "redirect:/new";

	}

	@PostMapping("/member/join") // 회원가입구현
	public String join(MemberDto memberDto, Model model, RedirectAttributes redirectAttributes) {
		log.info("가입통과");
		
		memberService.join(memberDto);// 성공 or 실패시 에러
		redirectAttributes.addFlashAttribute("msg", "회원가입 성공");
		return "redirect:/new";
	}

}
