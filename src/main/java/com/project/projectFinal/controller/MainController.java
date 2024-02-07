
package com.project.projectFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class MainController {

	@Autowired
	MemberService memberService;

	@GetMapping("/")
	public String index() {

		return "newMain";
	}
	

	@GetMapping("/new")
	public String mainNew() {

		return "newMain";
	}
	
	
	@GetMapping("/main")
	public String main(HttpSession session, MemberDto memberDto, Model model) {
		if (session.getAttribute("userId") != null) {
			String userId = (String) session.getAttribute("userId");
			
			memberDto.setUserId(userId) ;
			
			MemberDto mDto = memberService.main(memberDto);
			model.addAttribute("mDto", mDto);
		}
		return "main";
	}

//	@GetMapping("/pay")
//	public String pay() {
//
//		return "payment";
//	}

//	@GetMapping("/shop")
//	public String shop() {
//
//		return "shop";
//	}


	@GetMapping("/stm")
	public String go5() {

		return "stm/stmmain";
	}
	
	@GetMapping("/teststm")
	public String gostmtest() {

		return "stm/stmmain";
	}
	@GetMapping("/test")
	public String test() {

		return "kdg/kdgTest";
	}
	@GetMapping("/css")
	public String css() {

		return "jhl/cssDuoMain";
	}
	
}
