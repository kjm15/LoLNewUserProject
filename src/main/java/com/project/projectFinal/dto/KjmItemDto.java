package com.project.projectFinal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KjmItemDto {
	private int match_id;
	private int participant_id;
	private String champName;
	private int item_id;
	private int cnt;
}
