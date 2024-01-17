package com.project.projectFinal.kjmcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.ItemService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller

public class kjmController {
	@Autowired
	ItemService itemService;
	
	@GetMapping("/kjm")
	public String kjm(){
		return "kjm/kjm";
	}
	
//	@PostMapping("/")
	
}
