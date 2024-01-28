package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.DuoDao;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DuoService {

	@Autowired
	DuoDao duoDao;

	@Transactional
	public DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto) {

		DuoSearchDto dDto = duoDao.saveDbDuo(duoSearchDto);

		if (dDto != null) {
			return dDto;

		} else {

			throw new CustomException("duo등록 실패");
		}

	}

	public DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto) {
		return duoDao.infoDuoT(duoSearchDto);
	}

	public ArrayList<HashMap<String, DuoSearchDto>> duoInfo() {

		return duoDao.duoInfo();
	}

	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {
		// TODO Auto-generated method stub
		return duoDao.infoDuoT(duoSearchDto);
	}

	public void deleteDuo(DuoSearchDto duoSearchDto) {
		duoDao.deleteDuo(duoSearchDto);

	}

	public DuoSearchDto comparedcnt() {

		return duoDao.comparedcnt();

	}

	public ArrayList<HashMap<String, DuoSearchDto>> duostartinfo() {

		return duoDao.duoInfo();

	}

	@Transactional
	public DuoChattRoomDto nowlogin(DuoSearchDto duoSearchDto) {

		int result = duoDao.nowlogin(duoSearchDto); // 로그인 했는지 확인

		int result1 = duoDao.searchSameRoom(duoSearchDto); // 현재 채팅방이 있는지 확인

		if (result == 1 && result1 != 1) { // 로그인 중이고 만든채팅방이 없는경우
			DuoChattRoomDto rDto = duoDao.roomCreate(duoSearchDto); // 방만들기

//			log.info("===={}", rDto);
			return rDto;

		}

		return null;
	}

	public MsgDto msgSave(MsgDto msgDto) {
		return duoDao.msgSave(msgDto);
	}

	public MsgDto msgRead(MsgDto msgDto) {

		return duoDao.msgRead(msgDto);
	}

	public ArrayList<HashMap<String, MsgDto>> msgAll(MsgDto msgDto) {

		return duoDao.msgAll(msgDto);
	}

	public DuoChattRoomDto deleteChatRoom(DuoChattRoomDto duoChattRoomDto) {

		DuoChattRoomDto dDto = duoDao.deleteSendGuest(duoChattRoomDto);
		duoDao.deleteChatRoom(duoChattRoomDto);
		return dDto;
	}

	public DuoChattRoomDto myRoomCheck(DuoChattRoomDto duoChattRoomDto) {
		DuoChattRoomDto dDto = duoDao.myRoomCheck(duoChattRoomDto); // 방생성이 되었는지 확인

		return dDto;
	}

	public ArrayList<HashMap<String, DuoChattRoomDto>> chattRoomInfo(String userId) {
		// TODO Auto-generated method stub
		return duoDao.chattRoomInfo(userId);
	}

}
