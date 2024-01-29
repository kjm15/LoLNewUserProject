package com.project.projectFinal.dao;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.JhlChampDto;

@Mapper
public interface JhlChampDao {

	List<HashMap<String, String>> topChampSelect = null;

	public List<HashMap<String, String>> champListImg();

	public List<HashMap<String, String>> champSearch(JhlChampDto champDto);

	public List<HashMap<String, String>> topChampSelect(JhlChampDto champDto);



	

	

}
