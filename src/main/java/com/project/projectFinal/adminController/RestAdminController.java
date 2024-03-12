package com.project.projectFinal.adminController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/admin")
public class RestAdminController {

	@Autowired
	MemberService memberService;

	@PostMapping("/hrd/memberTable")
	public ArrayList<HashMap<String, MemberDto>> memberTable() {
		

		return memberService.memberTable();
	}
	@PostMapping("/paymentTable")
	public ArrayList<HashMap<String, Object>> paymentTable() {
		

		return memberService.paymentTable();
	}
	@PostMapping("/changeAuthority")
	public int changeAuthority(@RequestBody Map<String, Object> aMap) {
		
		return memberService.changeAuthority(aMap);
	}

}
