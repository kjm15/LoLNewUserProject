package com.project.projectFinal.service;

import java.lang.ProcessHandle.Info;
import java.math.BigDecimal;
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
//			log.info("============{}", ban_rate);
			champDao.saveChampRankT(champRankTList);
		}
		log.info("====초보자페이지 업데이트 종료 : {}", rankDto.getTeamPosition());
	}

	public void champCounter(ChampionRankDto rankDto) {
		List<HashMap<String, Object>> rListAll = champDao.rankListInfo(rankDto);
		List<HashMap<String, Object>> laneChampCounterList = champDao.laneCounterListInfo(rankDto);

		for (Map<String, Object> counterChamp : laneChampCounterList) {

			String teamPosition = rankDto.getTeamPosition();
			int championId = (int) counterChamp.get("championid");
			String champion_name_kr = (String) counterChamp.get("champion_name_kr"); // 한국어이름
			String champion_name = (String) counterChamp.get("champion_name"); // 영어이름

			List<HashMap<String, Object>> rankCWin = champDao.rankListCounterA(teamPosition, championId);

			for (Map<String, Object> rw : rankCWin) {
				String match_id = (String) rw.get("match_id");
				String teamPosition1 = (String) rw.get("teamPosition");
				String championNameM = (String) rw.get("champion_name");
				String cnameKM = (String) rw.get("champion_name_kr");
				String tier = (String) rw.get("tier");
				
				int winM = (int) rw.get("win");
				Integer championIdM = Integer.parseInt((String) rw.get("championId"));

				List<HashMap<String, Object>> rankLose = champDao.rankListCounterEnemy(teamPosition1, match_id);
				for (Map<String, Object> rl : rankLose) {
					String match_id1 = (String) rl.get("match_id");
					String teamPosition2 = (String) rl.get("teamPosition");
					String championNameE = (String) rl.get("champion_name");
					String cnameKE = (String) rl.get("champion_name_kr");
					int winE = (int) rl.get("win");
					Integer championIdE = Integer.parseInt((String) rl.get("championId"));
					HashMap<String, Object> champCounterList = new HashMap<>();
					if (match_id1.equals(match_id) && championIdM != championIdE && winM != winE) {
						champCounterList.put("match_id", match_id);
						champCounterList.put("teamPostion", teamPosition2);
						champCounterList.put("championIdM", championIdM);
						champCounterList.put("championNameM", championNameM);
						champCounterList.put("cnameKM", cnameKM);
						champCounterList.put("championIdE", championIdE);
						champCounterList.put("championNameE", championNameE);
						champCounterList.put("cnameKE", cnameKE);
						champCounterList.put("winM", winM);
						champCounterList.put("winE", winE);
						champCounterList.put("tier", tier);
				
						log.info("============{}", champCounterList);
						
					}
//					log.info("============{}",match_id1.equals(match_id));// true

//						
//						champCounterList.put("cIdM", championIdM);
//						champCounterList.put("cnameKM", champion_name_kr);
//						champCounterList.put("cnameM", champion_name);
//						champCounterList.put("winM", winM);
//						champCounterList.put("winE", winE);
//						;
//						champCounterList.put("cIdE", championIdE);
//						champCounterList.put("cnameKE", champion_name_kr);
//						champCounterList.put("cnameE", champion_name);

				}

//					

//					List<HashMap<String, Object>> counterList = champDao.rankAllListCounter(championIdM, championIdE,
//							teamPosition2);
//					
//					for (Map<String, Object> ct : counterList) {
//						
//						String match_id1 = (String) ct.get("match_id");
//						String cname1 = (String) ct.get("cname1");
//						String cname2 = (String) ct.get("cname2");
//						String cnameK1 = (String) ct.get("cnameK1");
//						String cnameK2 = (String) ct.get("cnameK2");
//						String teamPosition3 = (String) ct.get("teamPosition");
//						Integer win1 = (Integer) ct.get("win1");
//						Integer win2 = (Integer) ct.get("win2");
//						
//						
////						BigDecimal champ_win_cnt = (BigDecimal)ct.get("champ_win_cnt");
////						BigDecimal enemy_champ_win_cnt = (BigDecimal)ct.get("enemy_champ_win_cnt");
//						
//						BigDecimal  total = (BigDecimal) ct.get("total");
//						HashMap<String, Object> champCounterList = new HashMap<>();
//
//
//						
//						
////						champCounterList.put("match_id", match_id1);
//						champCounterList.put("teamPostion", teamPosition3);
//						champCounterList.put("cname1", cname1);
//						champCounterList.put("cnameK1", cnameK1);
//						champCounterList.put("win1", win1);
//						champCounterList.put("cname2", cname2);
//						champCounterList.put("cnameK2", cnameK2);
//						champCounterList.put("win2", win2);
////						champCounterList.put("enemy_champ_win_cnt", enemy_champ_win_cnt);
////						champCounterList.put("enemy_win_rate", enemy_win_rate);
////						champCounterList.put("total", total);
//						log.info("============{}",champCounterList);
////						champDao.saveChampCounterT(champCounterList);
//
//					}

//						}

			}
		}

	}

}
