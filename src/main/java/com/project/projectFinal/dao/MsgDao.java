package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.DuoMsgDto;

@Mapper
public interface MsgDao {

	int insertMsg(DuoMsgDto msgDto);

	void roomUpdate(DuoSearchDto duoSearchDto);

	void connectRoom(DuoChattRoomDto duoChattRoomDto);

	
}
