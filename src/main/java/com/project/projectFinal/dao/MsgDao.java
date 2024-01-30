package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoChattRoomDto;
import com.project.projectFinal.dto.DuoSearchDto;
import com.project.projectFinal.dto.MsgDto;

@Mapper
public interface MsgDao {

	int insertMsg(MsgDto msgDto);

	void roomUpdate(DuoSearchDto duoSearchDto);

	void connectRoom(DuoChattRoomDto duoChattRoomDto);

	
}
