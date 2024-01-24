package com.project.projectFinal.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.JhlChampDao;

@Service
public class JhlChampService {

	@Autowired
	JhlChampDao champDao;
	
	public List<HashMap<String, String>> champListImg() {
		
		return champDao.ChampListImg();
	}

}
