package com.project.projectFinal.kdgController;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.dto.ItemDto;
import com.project.projectFinal.dto.itemInfoDto;
import com.project.projectFinal.dto.itemToolTipDto;
import com.project.projectFinal.service.ChampionService;
import com.project.projectFinal.service.itemService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/kdg")
public class kdgRestController {

	@Autowired
	ChampionService cs;
	
	@Autowired
	itemService is;

	@PostMapping("/search")
	public List<HashMap<String, String>> search(ChampionImageDto cDto) {

		return cs.searchChamp(cDto);

	}

	@PostMapping("/position")
	public List<HashMap<String, String>> line(ChampionImageDto cDto) {

		return cs.champLine(cDto);

	}

	@PostMapping("/re")
	public List<HashMap<String, String>> reList() {

		return cs.reChampList();

	}

	@PostMapping("/itemBuild")
	public List<HashMap<String, ItemDto>> itemBuild(ItemDto iDto) {

		return is.itemBuild(iDto);

	}

	@PostMapping("/itemBuildperTier")
	public List<HashMap<String, ItemDto>> itemBuildperTier(ItemDto iDto) {

		return is.itemBuildperTier(iDto);

	}

	@PostMapping("/itemToolTip")
	public List<itemToolTipDto> itemToolTip(itemToolTipDto iTTDto) {
		
		int itemId = iTTDto.getItemId();
		return is.itemToolTip(itemId);

	}
	
	@PostMapping("/itemInfo")
	public List<HashMap<String, itemInfoDto>> itemInfo(itemInfoDto iIDto) {
		
		return is.itemInfo(iIDto);
		
	}
	


}
