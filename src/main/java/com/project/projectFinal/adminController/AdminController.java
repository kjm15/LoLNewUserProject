package com.project.projectFinal.adminController;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@PreAuthorize("hasAnyAuthority('ADMIN','SUPERADMIN')")
@RequestMapping("/admin")
public class AdminController {
	
	@GetMapping("/middle")
	public String admin() {

		return "admin/mainAdmin";
	}
	@PreAuthorize("hasAuthority('SUPERADMIN')")
	@GetMapping("/super")
	public String superAdmin() {

		return "admin/superAdmin";
	}
}
