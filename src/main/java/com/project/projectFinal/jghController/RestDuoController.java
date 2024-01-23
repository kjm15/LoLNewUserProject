package com.project.projectFinal.jghController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.service.DuoService;
import com.project.projectFinal.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	DuoService duoService;

	@PostMapping("/saveDb")
	public DuoSearchDto saveDb(DuoSearchDto duoSearchDto) {
		if (duoSearchDto.getUserId() == "") {

			duoSearchDto.setUserId("비회원");
		}


		return duoService.saveDbDuo(duoSearchDto);
	}

	@PostMapping("/deleteById")
	public boolean deleteById(DuoSearchDto duoSearchDto, HttpSession session) {

		if (duoService.infoDuoT(duoSearchDto).getUserId().equals(session.getAttribute("userId"))) {

			duoService.deleteDuo(duoSearchDto);
			return true;
		} else {
			return false;

		}
	}

	@PostMapping("/comparedcnt")
	public DuoSearchDto comparedcnt() {

		return duoService.comparedcnt();

	}
	@PostMapping("/duoInfo")
	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {

		return duoService.duoInfo(duoSearchDto);

	}
	
	
}
