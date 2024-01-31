package com.project.projectFinal.service;

import java.io.Console;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.itemDao;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.coreItemDto;
import com.project.projectFinal.dto.itemInfoDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class itemService {
	
	@Autowired
	itemDao id;
	
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto) {
		
		return id.itemBuild(iDto);
		
	}

	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto) {
		
		return id.itemBuildperTier(iDto);
		
	}

	public List<itemInfoDto> itemInfo(int itemId) {
		
		return id.itemInfo(itemId);
		
	}

	public void test(coreItemDto cIDto) {
		
		String tier = cIDto.getTier();
		List<Integer> ciList = id.itemIdList(tier);
		
		List<HashMap<Integer, HashMap<String, coreItemDto>>> teli = new ArrayList<>();
		
		for(int i = 0; i < ciList.size(); i++) {
			
			int itemId = ciList.get(i);
			HashMap<Integer, HashMap<String, coreItemDto>> iMap = new HashMap<>(); 
			HashMap<String, coreItemDto> info1 = id.coreItemInfo1(tier, itemId);
			iMap.put(itemId, info1);
			
			teli.add(iMap);
				
		}
		
		log.info("=================== teli : {}", teli);
		
	}
	
}
