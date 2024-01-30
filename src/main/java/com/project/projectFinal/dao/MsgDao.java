package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoMsgDto;
import com.project.projectFinal.dto.DuoSearchDto;

@Mapper
public interface MsgDao {

	int insertMsg(DuoMsgDto msgDto);

	void roomUpdate(DuoSearchDto duoSearchDto);

	void connectRoom(DuoMsgDto duoChattRoomDto);

	
}
