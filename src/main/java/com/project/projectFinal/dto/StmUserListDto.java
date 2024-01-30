package com.project.projectFinal.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StmUserListDto {
	private String puuid;
	private String gameName; // 라이엇 아이디
	private String tagLine; // 라이엇 패그
	private List<String> matchId; // 매치 아이디
//	private List<StmChampListDto> gameId; 		
	
}
