package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.StmUserListDto;

@Mapper
public interface StmUserListDao {
	
	int MatchList (String matchId);
	
		
		
	
}
