package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.DuoMsgDto;

@Mapper
public interface DuoDao {

	DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto);

	ArrayList<HashMap<String, DuoSearchDto>> duoInfo();


	
	DuoSearchDto comparedcnt();

	DuoSearchDto nowlogin(DuoSearchDto duoSearchDto);

	DuoMsgDto msgSave(DuoMsgDto msgDto);

	
	
	
	
	DuoMsgDto msgRead(DuoMsgDto msgDto);

	ArrayList<HashMap<String, DuoMsgDto>> msgAll(DuoMsgDto msgDto);

	DuoChattRoomDto searchSameRoom(DuoSearchDto duoSearchDto);

	DuoChattRoomDto myRoomCheck(DuoChattRoomDto duoChattRoomDto);

	ArrayList<HashMap<String, DuoChattRoomDto>> chattRoomInfo(String userId);

	DuoChattRoomDto createChattRoom(DuoChattRoomDto duoChattRoomDto);

	void goOutRoomGuest(DuoChattRoomDto duoChattRoomDto);

	void goOutRoomHost(DuoChattRoomDto dDto);

	void deleteChattRoom(DuoChattRoomDto duoChattRoomDto);

	

}
