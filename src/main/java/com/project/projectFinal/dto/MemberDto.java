package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDto {

	private String userId;
	private String userPw;
	private int userPoint;
	private int loginNow; //현재 로그인 확인용
	                                               
	
}
