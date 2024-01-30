package com.project.projectFinal.jghController;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.MsgDao;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class ChattRepository {
	@Autowired
	MsgDao msgDao;

	public void insertMsg(HashMap<String, String> map) {

		MsgDto msgDto = new MsgDto();

		msgDto.setRcnt(String.valueOf(map.get("rcnt")));
		msgDto.setUserId(map.get("userId"));
		msgDto.setMsg(String.valueOf(map.get("msg")));
		msgDao.insertMsg(msgDto);

	}

	public void roomUpdate(HashMap<String, String> map) {
		DuoSearchDto duoSearchDto = new DuoSearchDto();
		log.info("=={}", map.get("userId").length());

		if (map.get("userId").length() == 0) {
			duoSearchDto.setUserId("비회원");
		} else {
			duoSearchDto.setUserId(map.get("userId"));
		}

		duoSearchDto.setDuoPosition(map.get("duoPosition"));
		duoSearchDto.setMyPosition(map.get("myPosition"));
		duoSearchDto.setTier(map.get("tier"));
		duoSearchDto.setGameType(map.get("gameType"));
		duoSearchDto.setMemo(map.get("memo"));
		msgDao.roomUpdate(duoSearchDto);
		// savedb

	}

	@Transactional
	public void connectRoom(HashMap<String, String> map) {
		log.info("map : {}", map);
		try {
			DuoChattRoomDto duoChattRoomDto = new DuoChattRoomDto();
			duoChattRoomDto.setRoomNum(map.get("roomNum"));
			duoChattRoomDto.setHostId(map.get("hostId"));
			duoChattRoomDto.setGuestId(map.get("guestId"));
			log.info("==={}", duoChattRoomDto);
			msgDao.connectRoom(duoChattRoomDto);
		} catch (Exception e) {

			throw new CustomException("방생성 오류");

		}

	}

}
