package com.project.projectFinal.service;

import java.lang.ProcessHandle.Info;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.JhlChampDao;
import com.project.projectFinal.dto.ChampionImageDto;
import com.project.projectFinal.dto.ChampionRankDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class JhlChampService {

	@Autowired
	JhlChampDao champDao;

	public List<HashMap<String, String>> champSearch(ChampionImageDto champDto) {

		return champDao.champSearch(champDto);
	}

	public List<HashMap<String, String>> champLineSelect(ChampionImageDto champDto) {
		return champDao.champLineSelect(champDto);
	}

	public List<HashMap<String, String>> champListAll() {
		return champDao.champListAll();
	}

	public List<HashMap<String, Object>> champRank(ChampionRankDto rankDto) {
		return champDao.champRank(rankDto);
	}

	public void champUpdate(ChampionRankDto rankDto) {
		List<HashMap<String, Object>> laneChampList = champDao.laneListInfo(rankDto);

		log.info("====초보자페이지 업데이트 시작 : {}", rankDto.getTeamPosition());

		for (Map<String, Object> champ : laneChampList) {
			List<HashMap<String, Object>> cList = new ArrayList<>();
			champ.get("championid"); // 챔프아이디
			String champion_name_kr = (String) champ.get("champion_name_kr"); // 한국어이름
			String champion_name = (String) champ.get("champion_name"); // 영어이름

			String teamPosition = rankDto.getTeamPosition(); // 현재 라인
			int championId = (int) champ.get("championid");

			// cList : 각각의 챔피언 총 리스트
			cList = champDao.rankListTeamPositionInfo(teamPosition, championId);

			log.info("========{}", cList);

			int allCnt = cList.size(); // 한챔피언의 총 길이

			int winCnt = 0;
			int pickCnt = 0;
			double win_rate = 0;
			double pick_rate = 0;
			double ban_rate = 0;
			for (Map<String, Object> a : cList) {
				allCnt++;

				if ((int) a.get("win") == 1) {
					winCnt++;
				}

			}
			int allChampCnt = champDao.allChampCnt(teamPosition);
			int banChampCnt = champDao.banChampCnt(champion_name_kr);

			double aa = (double) winCnt;
			double bb = (double) allCnt;
			double cc = (double) banChampCnt;
			if (allCnt != 0) {
				win_rate = Math.round(((aa / allCnt) * 100) * 100) / 100.0;
				pick_rate = Math.round(((bb / allChampCnt) * 100) * 100) / 100.0;
				ban_rate = Math.round(((cc / allChampCnt) * 100) * 100) / 100.0;
			} else {
				win_rate = 0;
				pick_rate = 0;
				ban_rate = 0;
			}

			int win_total_cnt = winCnt;

			HashMap<String, Object> champRankTList = new HashMap<>();

			champRankTList.put("teamPosition", teamPosition);
			champRankTList.put("champion_name", champion_name);
			champRankTList.put("champion_name_kr", champion_name_kr);
			champRankTList.put("pick_rate", pick_rate);
			champRankTList.put("win_rate", win_rate);
			champRankTList.put("win_total_cnt", win_total_cnt);
			champRankTList.put("champion_pick", allCnt);
			champRankTList.put("ban_rate", ban_rate);
			log.info("============{}", ban_rate);
			champDao.saveChampRankT(champRankTList);
		}
		log.info("====초보자페이지 업데이트 종료 : {}", rankDto.getTeamPosition());
	}

	public void champCounter(ChampionRankDto rankDto) {
		List<HashMap<String, Object>> rListAll = champDao.rankListInfo(rankDto);
		List<HashMap<String, Object>> laneChampCounterList = champDao.laneCounterListInfo(rankDto);

//		log.info("============={}",laneChampCounterList);
//		
		for (Map<String, Object> counterChamp : laneChampCounterList) {

			String teamPosition = rankDto.getTeamPosition();
			int championId = (int) counterChamp.get("championid");
			int winCnt = 0;
			int loseCnt = 0;
//		for(Map<String, Object> ra :rListAll) {
//			List<HashMap<String, Object>> counterCampList = champDao.rankListCounterChampInfo(teamPosition, championId);
//			for(Map<String, Object> ct : counterCampList) {

			List<HashMap<String, Object>> rankCWin = champDao.rankListCounterWin(teamPosition, championId);

			for (Map<String, Object> rw : rankCWin) {
				String match_id = (String) rw.get("match_id");
				List<HashMap<String, Object>> rankCLose = champDao.rankListCounterlose(teamPosition, match_id);
				for (Map<String, Object> rl : rankCLose) {
					log.info("============={}", rl);

				}

			}

//				}
//			}
		}

	}

}
