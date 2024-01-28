package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;

@Mapper
public interface DuoDao {

	DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto);

	ArrayList<HashMap<String, DuoSearchDto>> duoInfo();

	void deleteDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto comparedcnt();

	int nowlogin(DuoSearchDto duoSearchDto);

	MsgDto msgSave(MsgDto msgDto);

	MsgDto msgRead(MsgDto msgDto);

	ArrayList<HashMap<String, MsgDto>> msgAll(MsgDto msgDto);

	DuoChattRoomDto roomCreate(DuoSearchDto duoSearchDto);

	int searchSameRoom(DuoSearchDto duoSearchDto);

	void deleteChatRoom(DuoChattRoomDto duoChattRoomDto);

	DuoChattRoomDto deleteSendGuest(DuoChattRoomDto duoChattRoomDto);

	DuoChattRoomDto myRoomCheck(DuoChattRoomDto duoChattRoomDto);

	ArrayList<HashMap<String, DuoChattRoomDto>> chattRoomInfo(String userId);

}
