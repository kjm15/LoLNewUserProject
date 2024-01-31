package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class coreItemDto {
	
	private String tier;
	private int itemId;
	
	private String line;
	private int lineCnt;
	private int lineAllCnt;
	
	private String itemPickChamp;
	private int itemPickCnt;
	private int itemCnt;
	private int allItemCnt;
	private int itemWinCnt;
	private String itemName;

}
