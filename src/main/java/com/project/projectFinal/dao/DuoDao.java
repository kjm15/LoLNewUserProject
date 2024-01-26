package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.fasterxml.jackson.databind.JsonNode;
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

	int msgSave(MsgDto msgDto);

	MsgDto msgRead(MsgDto msgDto);



	

}
