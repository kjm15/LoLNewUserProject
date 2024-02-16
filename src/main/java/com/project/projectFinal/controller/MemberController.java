package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/member")
public class MemberController {

	@Autowired
	MemberService memberService;

	@GetMapping("/login")
	public String login(HttpServletRequest req) {

		return "aMain/loginFrm";
	}

	@GetMapping("/join")
	public String join() {

		return "aMain/joinFrm";
	}

	@GetMapping("/passwordcheck")
	public String pchk() {
		
		return "aMain/passwordChk";
	}
	
	
	@GetMapping("/mypage")
	public String mypage(Model model, HttpSession session, MemberDto memberDto) {
		String userId = (String) session.getAttribute("userId");
		memberDto.setUserId(userId);
		MemberDto mlist = memberService.myInfo(memberDto);
		model.addAttribute("mlist", mlist);
		return "aMain/myPage";
	}
	
	
	

	@PostMapping("/join")
	public String join(MemberDto memberDto) {
		log.info("=={}", memberDto);
		if (memberService.join(memberDto)) {

			return "redirect:/member/login";
		} else {

			return "redirect:/member/join";
		}

	}

	@GetMapping("/findId")
	public String fId() {
		return "aMain/findId";
	}

	@PostMapping("/findId")
	public String findId(@RequestParam String userEmail, MemberDto memberDto, Model model) {
		log.info("=====컨트롤러상={}", memberDto);
		memberDto.setUserEmail(userEmail);
		MemberDto id = memberService.findId(memberDto);
		model.addAttribute("memberDto", id);
		log.info("=====컨트롤러={}", memberDto);
		
		return "aMain/findIdresult";
	}
	
	@GetMapping("/findPw")
	public String fPw() {
		return "aMain/findPw";
	}
	
	@PostMapping("/findPw")
	public String findPw (MemberDto memberDto, HttpSession session) {
//		@RequestParam String userId,
//		memberDto.setUserId(userId);
		
		boolean findPw = memberService.findPw(memberDto);
		if(findPw) {
			session.setAttribute("userId", memberDto.getUserId());
			return "aMain/changePw";
		}else {
			return "aMain/findPw";
		}
	}
	
	
	@PostMapping("/changePw")
	public String changePw(MemberDto memberDto) {
		log.info("==========={}",memberDto);
		memberService.changePw(memberDto);
	
		return "redirect:/member/login";
	}
	
	
}
