package com.project.projectFinal.dao;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.KakaoDto;

@Mapper
public interface MemberDao {

	MemberDto login(MemberDto memberDto);

	int join(MemberDto memberDto);

	int find(MemberDto memberDto);

	int payDbSave(KakaoDto paymentDto);

	MemberDto main(MemberDto memberDto);

	int updatePoint(KakaoDto paymentDto);

	int ajaxtest(MemberDto memberDto);

	MemberDto joinIdCheck(MemberDto memberDto);

	void loginNow(MemberDto mDto);

	void logoutNow(String userId);

	MemberDto checkAdmin(String userId);


}
