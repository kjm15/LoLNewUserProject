package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {

	private String userId;
	private String userPw;
	private int userPoint;
	private int loginNow; // 현재 로그인 확인용

	// 1: 2: 3: 4: 5: 6: 999://총관리자
	private String adminLevel; // 관리자 분류

}
