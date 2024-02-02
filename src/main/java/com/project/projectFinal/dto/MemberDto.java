package com.project.projectFinal.dto;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberDto {

	private String userId;
	private String userPw;
	private int userPoint;
	private int loginNow; // 현재 로그인 확인용

	// 1: 2: 3: 4: 5: 6: 999://총관리자
	private String adminLevel; // 관리자 분류

	private String role;
	
	public static MemberDto passwordEnconderDto(MemberDto memberDto , PasswordEncoder passwordEncoder) {
		
		MemberDto mDto = MemberDto.builder().userId(memberDto.getUserId())
				.userPw(passwordEncoder.encode(memberDto.getUserPw())) // 암호화처리
				.build();
		return mDto;
	}
}
