package com.project.projectFinal.adminController;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.projectFinal.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@PreAuthorize("hasAnyAuthority('ADMIN')")
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	MemberService memberService;

	@GetMapping("/main")
	public String mainMng() {

		return "admin/mainAdmin";
	}

	@PreAuthorize("hasAnyAuthority('ADMIN','HRD-MNG')")
	@GetMapping("/hrd")
	public String hrd() {

		return "admin/hrd";
	}

	@PreAuthorize("hasAnyAuthority('ADMIN','PAY-MNG')")
	@GetMapping("/pay")
	public String pay() {

		return "admin/pay";
	}

	@PreAuthorize("hasAnyAuthority('ADMIN','ITEM-MNG')")
	@GetMapping("/item")
	public String item() {

		return "admin/item";
	}

	@PreAuthorize("hasAnyAuthority('ADMIN','CHP-MNG')")
	@GetMapping("/chp")
	public String chp() {

		return "admin/chp";
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping("/admin")
	public String mainAdmin() {

		return "admin/mainAdmin";
	}



}
