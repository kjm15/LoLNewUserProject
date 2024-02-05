package com.project.projectFinal.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.jghController.ChattRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ChatService {

	@Autowired
	ChattRepository chattRepository;

	// 서비스를 여기서 실행
	// 메세지 저장문구
	public void moveService(HashMap<String, String> map) {
		if (map.get("work").equals("sendMsg")) {
			chattRepository.insertMsg(map);
		}

		if (map.get("work").equals("roomUpdate")) {
			chattRepository.roomUpdate(map);
		}

		if (map.get("work").equals("connectRoom")) {
			chattRepository.connectRoom(map);
		}

	}

	public DuoMsgDto chattInfo(String rCnt) {
		DuoMsgDto mDto = new DuoMsgDto();
		mDto.setRCnt(rCnt);

		return chattRepository.chattInfo(mDto);

	}

}
