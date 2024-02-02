package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {

	private String userId;
	private String userPw;
	private int userPoint;
	private int loginNow; // 현재 로그인 확인용

	private String role;

	public MemberDto(String userId, String userPw, String role) {
		this.userId = userId;
		this.userPw = userPw;
		this.role = role;

	}


}
