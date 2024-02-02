package com.project.projectFinal.config;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum MemberRole {

	SUPERADMIN("ROLE_SUPERADMIN,ROLE_ADMIN"), 
	ADMIN("ROLE_ADMIN");

	private String value;
}