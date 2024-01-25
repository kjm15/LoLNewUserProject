package com.project.projectFinal.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.DuoSearchDto;

@Mapper
public interface DuoDao {

	DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto);

	ArrayList<HashMap<String, DuoSearchDto>> duoInfo();

	void deleteDuo(DuoSearchDto duoSearchDto);

	DuoSearchDto comparedcnt();

	int nowlogin(DuoSearchDto duoSearchDto);

	

}
