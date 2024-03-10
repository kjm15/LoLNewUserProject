package com.project.projectFinal.jghController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.project.projectFinal.service.MatchListService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/ai")
@Slf4j
public class RestPythonBuilder {
//	
	@Autowired
	MatchListService matchListService;

	@PostMapping("/dataToAi")
	public Map<String, Object> sendDataToPy(@RequestBody Map<String, String> sMap, Model model) throws Exception {

		return matchListService.sendDataToPy(sMap);

	}

	// 솔로랭크
	@PostMapping("/trollcheck420")
	public Map<String, Object> trollcheck420(@RequestBody Map<String, Object> aMap, Model model, HttpSession session)
			throws Exception {

		Map<String, Object> fList = matchListService.findAiData(aMap);

		if (fList != null) {
			String matchId = String.valueOf(fList.get("matchId"));
			String participantId = String.valueOf(fList.get("participantId"));

			fList.put(matchId + participantId, fList.get("key"));
			return fList;
		} else {

			String filePath = "";
			String userId = (String) session.getAttribute("userId");
			if (userId == null) {
				filePath = "src/main/resources/static/py/aiModelSave/aiModelCheck.py";
			} else if (userId.equals("admin")) {
				filePath = "src/main/resources/static/py/admin/aiTrollCheck420.py";

			} else {
				filePath = "src/main/resources/static/py/aiModelSave/aiModelCheck.py";
			}
			String matchId = (String) aMap.get("matchId");
			String participantId = String.valueOf(aMap.get("participantId"));
			String key = matchId + participantId;
			String tier = (String) aMap.get("Tier");
			String teamPosition = String.valueOf(aMap.get("teamPosition"));
			String gameDuration = String.valueOf(aMap.get("gameDuration"));
			String kda = String.valueOf(aMap.get("kda"));
			String totalDamageDealtToChampions = String.valueOf(aMap.get("totalDamageDealtToChampions"));
			String goldEarned = String.valueOf(aMap.get("goldEarned"));
			String championName = String.valueOf(aMap.get("championName"));
			String airesult = String.valueOf(aMap.get("airesult"));
			String champion_name_kr = String.valueOf(aMap.get("champion_name_kr"));
			String queueId = String.valueOf(aMap.get("queueId"));

			ProcessBuilder pb = new ProcessBuilder().command("python", filePath, key, tier, teamPosition, gameDuration,
					kda, totalDamageDealtToChampions, goldEarned, championName, queueId, matchId // ,
			);
			Process p = pb.start();
			BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
			StringBuilder buffer = new StringBuilder();
			String line = null;
			while ((line = in.readLine()) != null) {
				buffer.append(line);
			}
			int exitCode = p.waitFor();

			in.close();
			Gson gson = new GsonBuilder().create();
			Map<String, Object> bMap = new HashMap<>();
			bMap = gson.fromJson(buffer.toString(), Map.class);
//		String bMap = gson.fromJson(buffer.toString(), String.class);

			log.info("솔로랭크 결과값 : {}", bMap);

			if (bMap == null) { // 언랭인경우 에러 방지
				bMap = new HashMap<>();

				bMap.put(matchId + participantId, "에러");
				bMap.put("key", "에러");
				bMap.put("participantId", participantId);
				bMap.put("championName", championName);
				bMap.put("tier", tier);
				bMap.put("length", 0);
				bMap.put("accuracy", 0);

			}
			bMap.put("matchId", matchId);
			bMap.put("participantId", participantId);
			matchListService.saveAiData(bMap);
			bMap.put("champion_name_kr", champion_name_kr);

			return bMap;
		}
	}

	// 칼바람
	@PostMapping("/trollcheck450")
	public Map<String, Object> trollcheck450(@RequestBody Map<String, Object> aMap, Model model,
			HttpSession httpSession) throws Exception {
		Map<String, Object> aiReultMap = new HashMap<>();
//		log.info("===myMap : {}", aMap);
		String userId = (String) httpSession.getAttribute("userId");
		String filePath = "";
		if (userId == null) {
			log.info("일반 인공지능 접속");
			filePath = "src/main/resources/static/py/jgh/aiTrollCheck450.py";
		} else if (userId.equals("admin")) {
			log.info("admin 인공지능 접속");
			filePath = "src/main/resources/static/py/admin/aiTrollCheck450.py";

		} else {
			log.info("일반 인공지능 접속");
			filePath = "src/main/resources/static/py/jgh/aiTrollCheck420.py";

		}

		String matchId = (String) aMap.get("matchId");
		String participantId = String.valueOf(aMap.get("participantId"));
		String key = matchId + participantId;
		String gameDuration = String.valueOf(aMap.get("gameDuration"));
		String kda = String.valueOf(aMap.get("kda"));
		String totalDamageDealtToChampions = String.valueOf(aMap.get("totalDamageDealtToChampions"));
		String goldEarned = String.valueOf(aMap.get("goldEarned"));
		String championName = String.valueOf(aMap.get("championName"));
		String champion_name_kr = String.valueOf(aMap.get("champion_name_kr"));
		String airesult = String.valueOf(aMap.get("airesult"));

		if (airesult.equals("null")) { // ai결과가 없으면
			ProcessBuilder pb = new ProcessBuilder().command("python", filePath, key, gameDuration, kda,
					totalDamageDealtToChampions, goldEarned, championName);
			Process p = pb.start();
			BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
			StringBuilder buffer = new StringBuilder();
			String line = null;
			while ((line = in.readLine()) != null) {
				buffer.append(line);
			}
			int exitCode = p.waitFor();

			in.close();
			ObjectMapper objectMapper = new ObjectMapper();
			aiReultMap = objectMapper.readValue(buffer.toString(), Map.class);

			aiReultMap.put("matchId", matchId);
			aiReultMap.put("participantId", participantId);
//		log.info("칼바람 결과값 : {}", aiReultMap);
			matchListService.saveAiData(aiReultMap);

		} else {

			aiReultMap.put(key, matchListService.forOneData(aMap).get("airesult"));
		}
		aiReultMap.put("champion_name_kr", champion_name_kr);

		return aiReultMap;
	}

	// 타임라인애니메이팅 insert
	@PostMapping("/timelineAni")
	public Map<String, Object> trollcheck450(String matchId, Model model) throws Exception {

		Map<String, Object> aiReultMap = new HashMap<>();
		List<Map<String, Object>> timelineInfo = timelineInfo(matchId);
		if (timelineInfo.size() != 0) {
			aiReultMap.put("matchId", matchId);
			return aiReultMap;

		}

//			log.info("===myMap : {}", aMap);
		String filePath = "src/main/resources/static/py/jgh/timelineAni.py";
		ProcessBuilder pb = new ProcessBuilder().command("python", filePath, matchId);
		Process p = pb.start();
		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
		StringBuilder buffer = new StringBuilder();
		String line = null;
		while ((line = in.readLine()) != null) {
			buffer.append(line);
		}
		int exitCode = p.waitFor();

		in.close();
		ObjectMapper objectMapper = new ObjectMapper();
		aiReultMap = objectMapper.readValue(buffer.toString(), Map.class);

		aiReultMap.put("matchId", matchId);
		log.info("칼바람 결과값 : {}", aiReultMap);
		matchListService.saveAiData(aiReultMap);

		return aiReultMap;

	}

	@PostMapping("/timelineInfo")
	public List<Map<String, Object>> timelineInfo(String matchId) throws Exception {

		return matchListService.timelineInfo(matchId);

	}

	@PostMapping("/teamList")
	public List<Map<String, Object>> teamList(String matchId) throws Exception {

		return matchListService.teamList(matchId);

	}

	// ai모델 저장하기 >> 모델검색으로 바뀔예정
	@PostMapping("/aiModelSaveData")
	public String aiModelSaveData() throws Exception {
		log.info("데이터시작");
		String filePath = "src/main/resources/static/py/aiModelSave/aiModelSave.py";

		ProcessBuilder pb = new ProcessBuilder().command("python", filePath);
		Process p = pb.start();
		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
		StringBuilder buffer = new StringBuilder();
		String line = null;
		while ((line = in.readLine()) != null) {
			buffer.append(line);
		}
		int exitCode = p.waitFor();

		in.close();
		String aa = buffer.toString();
		log.info(aa);
		return aa;

	}
}
