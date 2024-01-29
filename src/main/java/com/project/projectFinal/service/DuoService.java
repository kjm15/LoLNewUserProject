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

//	public DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto) {
//		return duoDao.infoDuoT(duoSearchDto);
//	}

	public ArrayList<HashMap<String, DuoSearchDto>> duoInfo() {

		return duoDao.duoInfo();
	}

	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {
		// TODO Auto-generated method stub
		return duoDao.infoDuoT(duoSearchDto);
	}



	public DuoSearchDto comparedcnt() {

		return duoDao.comparedcnt();

	}

	public ArrayList<HashMap<String, DuoSearchDto>> duostartinfo() {

		return duoDao.duoInfo();

	}

	@Transactional
	public DuoSearchDto nowlogin(DuoSearchDto duoSearchDto) {

		DuoSearchDto result = duoDao.nowlogin(duoSearchDto); // 로그인 했는지 확인

		return result;
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

	public DuoChattRoomDto myRoomCheck(DuoChattRoomDto duoChattRoomDto) {
		DuoChattRoomDto dDto = duoDao.myRoomCheck(duoChattRoomDto); // 방생성이 되었는지 확인

		return dDto;
	}

	public ArrayList<HashMap<String, DuoChattRoomDto>> chattRoomInfo(String userId) {

		return duoDao.chattRoomInfo(userId);
	}

	public DuoChattRoomDto createChattRoom(DuoChattRoomDto duoChattRoomDto) {

		return duoDao.createChattRoom(duoChattRoomDto);
	}

	public DuoChattRoomDto goOutRoom(DuoChattRoomDto duoChattRoomDto, String userId) {

		DuoChattRoomDto dDto = duoDao.myRoomCheck(duoChattRoomDto);

		if (dDto.getGuestId().equals(userId)) {
			
			dDto.setGuestId(userId);
			duoDao.goOutRoomGuest(dDto);
		} else {
			dDto.setHostId(userId);
			duoDao.goOutRoomHost(dDto);
		}
		DuoChattRoomDto dDtoResult = duoDao.myRoomCheck(duoChattRoomDto); 
		// 방에서 나오고 둘다 없는게 확인되면 방자체를 삭제시키기
		if(dDtoResult.getGuestId().equals("") && dDtoResult.getHostId().equals("")) {
			
			duoDao.deleteChattRoom(duoChattRoomDto);
			
		}

		return dDto;
	}

}
