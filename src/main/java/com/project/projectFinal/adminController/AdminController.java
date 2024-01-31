package com.project.projectFinal.adminController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@GetMapping("/middle")
	public String admin() {

		return "admin/mainAdmin";
	}
	@GetMapping("/super")
	public String superAdmin() {

		return "admin/superAdmin";
	}
}
