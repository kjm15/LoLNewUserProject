package com.project.projectFinal.jghController;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.MsgDao;
import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.dto.DuoSearchDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class ChattRepository {
	@Autowired
	MsgDao msgDao;

	public void roomUpdate(HashMap<String, String> map) {
		DuoSearchDto duoSearchDto = new DuoSearchDto();
//		log.info("=={}", map.get("userId").length());

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



	public DuoMsgDto chattInfo(DuoMsgDto mDto) {

		return msgDao.chattInfo(mDto);

	}

	public DuoSearchDto duoInfo(DuoSearchDto mDto) {
		return msgDao.duoInfo(mDto);
	}

	public DuoMsgDto duoCreateMsgRoom(DuoMsgDto mDto) {
	
		
		return msgDao.connectRoom(mDto);
	}



	public void insertMsg(DuoMsgDto mDto) {
		msgDao.insertMsg(mDto);
		
	}

}
