package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.dto.DuoSearchDto;

@Mapper
public interface DuoDao {

	DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto);

	ArrayList<HashMap<String, DuoSearchDto>> duoInfo();


//	
//	DuoSearchDto comparerCnt();

	DuoSearchDto nowlogin(DuoSearchDto duoSearchDto);

	DuoMsgDto msgSave(DuoMsgDto msgDto);

	
	
	
	
	DuoMsgDto msgRead(DuoMsgDto msgDto);

	ArrayList<HashMap<String, DuoMsgDto>> msgAll(DuoMsgDto msgDto);

	DuoMsgDto searchSameRoom(DuoSearchDto duoSearchDto);

	DuoMsgDto myRoomCheck(DuoMsgDto duoChattRoomDto);

	ArrayList<HashMap<String, DuoMsgDto>> chattRoomInfo(String userId);

	DuoMsgDto createChattRoom(DuoMsgDto duoChattRoomDto);

	void goOutRoomGuest(DuoMsgDto duoChattRoomDto);

	void goOutRoomHost(DuoMsgDto dDto);

	void deleteChattRoom(DuoMsgDto duoChattRoomDto);

	

}
