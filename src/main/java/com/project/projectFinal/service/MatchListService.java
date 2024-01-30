package com.project.projectFinal.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.StmUserListDao;

import com.project.projectFinal.dto.StmUserListDto;

@Service
public class MatchListService {
	@Autowired
	WebMatchListService webmatchListService;
	@Autowired
	StmUserListDao stmChampListDao;
	
	public String puuId(StmUserListDto userListDto) {
		String puuid = webmatchListService.getpuuId(userListDto.getGameName(), userListDto.getTagLine());
		  return puuid;
	}

	public List<String> MatchList(String puuid) {
		
		
		List<String>  MList = webmatchListService.MatchList(puuid);
		
		
		return MList;
		
		
	}

	public List<Map> gamedate(List<String> matchList) {
		List<Map> MList = new ArrayList<>();
		
		
		for(int i=0; i<matchList.size(); i++) {
			Map gMap = webmatchListService.gamedate(matchList.get(i));
			MList.add(gMap);
			
		}
		return MList;
		
		
		
	}

//	public List<String> DbMatchList(StmUserListDto userListDto) { 
//		StmUserListDto MList = webmatchListService.MatchList(userListDto); // api에서 10게임 추출 
//		int matchListCnt = 0;
//		for(int i = 0; i<MList.getMatchId().size(); i++) {
//
//		int matchCnt = 	stmChampListDao.MatchList(MList.getMatchId().get(i));
//		
//		matchListCnt += matchCnt; 	
//		}
//		if(MList.getMatchId().size() == matchListCnt) {
//			
//			// 디비 바로 가면 됨
//		}else { // 부족한 api 키 구하기
//			int newMatchCnt = MList.getMatchId().size() - matchListCnt;
//			String count = Integer.toString(newMatchCnt);
//			
//			List<String> NewMList = webmatchListService.newMatchList(count, userListDto);
//			System.out.println("MLIst 사이즈"+NewMList.size());
//			List<Map> newGList = new ArrayList<>();
//			// 포문 굴리며 디비에 저장
//			for(int i=0; i<NewMList.size(); i++) {
//				Map gMap = webmatchListService.newGamedate(NewMList.get(i), userListDto);
//				newGList.add(gMap);
//				
//			}
//
//		
//		}
//		
//		return null;
//	}

	
}