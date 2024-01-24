package com.project.projectFinal.dao;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface JhlChampDao {

	public List<HashMap<String, String>> ChampListImg();

	

	

}
