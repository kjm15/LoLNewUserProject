package com.project.projectFinal.jhlController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.projectFinal.service.JhlChampService;

import lombok.extern.slf4j.Slf4j;

//import com.project.projectFinal.service.JhlChampService;
@Controller
@Slf4j
public class JhlChampController {

	@Autowired
	JhlChampService champService;

	@GetMapping("/jhl")
	public String jhl() {
		return "jhl/jhl";
	}
}
