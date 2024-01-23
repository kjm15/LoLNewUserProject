package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.DuoDao;
import com.project.projectFinal.dto.DuoSearchDto;

@Service
public class DuoService {

	@Autowired
	DuoDao duoDao;

	@Transactional
	public DuoSearchDto saveDbDuo(DuoSearchDto duoSearchDto) {

		DuoSearchDto dDto = duoDao.saveDbDuo(duoSearchDto);

		if (dDto != null) {
			return dDto;

		} else {

			throw new CustomException("duo등록 실패");
		}

	}

	public DuoSearchDto infoDuoT(DuoSearchDto duoSearchDto) {
		return duoDao.infoDuoT(duoSearchDto);
	}

	public ArrayList<HashMap<String, DuoSearchDto>> duoInfo() {

		return duoDao.duoInfo();
	}

	public DuoSearchDto duoInfo(DuoSearchDto duoSearchDto) {
		// TODO Auto-generated method stub
		return duoDao.infoDuoT(duoSearchDto);
	}

	public void deleteDuo(DuoSearchDto duoSearchDto) {
		duoDao.deleteDuo(duoSearchDto);

	}

	public DuoSearchDto comparedcnt() {

		return duoDao.comparedcnt();

	}

}
