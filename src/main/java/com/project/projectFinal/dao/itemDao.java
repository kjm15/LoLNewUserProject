package com.project.projectFinal.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.coreItemDto;
import com.project.projectFinal.dto.itemInfoDto;

@Mapper
public interface itemDao {
	
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto);

	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto);

	public List<itemInfoDto> itemInfo(int itemId);

	public List<Integer> itemIdList(String tier);

	public HashMap<String, coreItemDto> coreItemInfo1(String tier, int itemId);
	
	

}
