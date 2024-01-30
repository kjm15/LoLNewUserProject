package com.project.projectFinal.jghController;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.service.DuoService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	DuoService duoService;

	@PostMapping("/duostartinfo")
	public ArrayList<HashMap<String, DuoSearchDto>> duostartinfo() {

		return duoService.duostartinfo();
	}
	@PostMapping("/chattRoomInfo")
	public ArrayList<HashMap<String, DuoMsgDto>> chattRoomInfo(DuoMsgDto duoMsgDto,
			HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		
		ArrayList<HashMap<String, DuoMsgDto>> cDto = duoService.chattRoomInfo(userId);
//		log.info("=={}",cDto);
		return cDto;
	}
	@PostMapping("/duoInfo")
	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {

		return duoService.duoInfo(duoSearchDto);

	}

	@PostMapping("/myRoomCheck")
	public DuoMsgDto myRoomCheck(DuoMsgDto duoChattRoomDto) {

		return duoService.myRoomCheck(duoChattRoomDto);
	}
	@PostMapping("/msgAll")
	public ArrayList<HashMap<String, DuoMsgDto>> msgAll(DuoMsgDto msgDto) {
	
		return duoService.msgAll(msgDto);

	}
	@PostMapping("/goOutRoom")
	public DuoMsgDto goOutRoom(DuoMsgDto duoChattRoomDto, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		
		return duoService.goOutRoom(duoChattRoomDto, userId);
	}

	
	@PostMapping("/createChattRoom")
	public DuoMsgDto createChattRoom(DuoMsgDto duoChattRoomDto) {

		return duoService.createChattRoom(duoChattRoomDto);
	}
//
//	@PostMapping("/comparerCnt")
//	public DuoSearchDto comparerCnt() {
//
//		return duoService.comparerCnt();
//
//	}



//	@PostMapping("/nowlogin")
//	public DuoSearchDto nowlogin(DuoSearchDto duoSearchDto, HttpSession session) {
//		log.info("==={}",duoSearchDto);
//		String userId = (String) session.getAttribute("userId");
//		DuoSearchDto dDto = duoService.nowlogin(duoSearchDto); // userId = hostId
//
//		dDto.setUserId(userId);
//
////		log.info("========={}", duoSearchDto);
//		return dDto;
//
//	}
//
//	@PostMapping("/msgSave")
//	public DuoMsgDto msgSave(DuoMsgDto msgDto) {
////		log.info("====="+msgDto);
//
//		return duoService.msgSave(msgDto);
//
//	}
//
//	@PostMapping("/msgRead")
//	public DuoMsgDto msgRead(DuoMsgDto msgDto) {
//
//		return duoService.msgRead(msgDto);
//
//	}







}
