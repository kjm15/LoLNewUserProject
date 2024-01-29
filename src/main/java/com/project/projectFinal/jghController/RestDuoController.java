package com.project.projectFinal.jghController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;
import com.project.projectFinal.service.DuoService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import retrofit2.http.HTTP;

@RestController
@Slf4j
public class RestDuoController {

	@Autowired
	DuoService duoService;

	@PostMapping("/duostartinfo")
	public ArrayList<HashMap<String, DuoSearchDto>> duostartinfo() {

		return duoService.duostartinfo();
	}

	@PostMapping("/comparedcnt")
	public DuoSearchDto comparedcnt() {

		return duoService.comparedcnt();

	}

	@PostMapping("/duoInfo")
	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {

		return duoService.duoInfo(duoSearchDto);

	}

	@PostMapping("/nowlogin")
	public DuoSearchDto nowlogin(DuoSearchDto duoSearchDto, HttpSession session) {

		String userId = (String) session.getAttribute("userId");
		DuoSearchDto dDto = duoService.nowlogin(duoSearchDto); // userId = hostId

		dDto.setFriendId(userId);

//		log.info("========={}", duoSearchDto);
		return dDto;

	}

	@PostMapping("/msgSave")
	public MsgDto msgSave(MsgDto msgDto) {
//		log.info("====="+msgDto);

		return duoService.msgSave(msgDto);

	}

	@PostMapping("/msgRead")
	public MsgDto msgRead(MsgDto msgDto) {

		return duoService.msgRead(msgDto);

	}

	@PostMapping("/msgAll")
	public ArrayList<HashMap<String, MsgDto>> msgAll(MsgDto msgDto) {

		return duoService.msgAll(msgDto);

	}



	@PostMapping("/myRoomCheck")
	public DuoChattRoomDto myRoomCheck(DuoChattRoomDto duoChattRoomDto) {

		return duoService.myRoomCheck(duoChattRoomDto);
	}

	@PostMapping("/chattRoomInfo")
	public ArrayList<HashMap<String, DuoChattRoomDto>> chattRoomInfo(DuoChattRoomDto duoChattRoomDto,
			HttpSession session) {
		String userId = (String) session.getAttribute("userId");

		ArrayList<HashMap<String, DuoChattRoomDto>> cDto = duoService.chattRoomInfo(userId);
//		log.info("=={}",cDto);
		return cDto;
	}

	@PostMapping("/createChattRoom")
	public DuoChattRoomDto createChattRoom(DuoChattRoomDto duoChattRoomDto) {

		return duoService.createChattRoom(duoChattRoomDto);
	}
	@PostMapping("/goOutRoom")
	public DuoChattRoomDto goOutRoom(DuoChattRoomDto duoChattRoomDto, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		
		return duoService.goOutRoom(duoChattRoomDto, userId);
	}

}
