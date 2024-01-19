package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {

	private int match_id;
	private int participant_id;
	private String champName;
	private String line;
	private String team;
	private String win;
	private int item_id;
	private int cnt;
}
