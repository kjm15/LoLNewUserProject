package com.project.projectFinal.jghController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.ognl.ASTProject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.service.MatchListService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/ai")
@Slf4j
public class RestPythonBuilder {
//	
	@Autowired
	MatchListService matchListService;

	@PostMapping("/dataToAi")
	public List<Map<String, Object>> sendDataToPy(String matchId, Model model) throws Exception {

		return matchListService.sendDataToPy(matchId);

	}
	//데이터받기 급할떄
	@PostMapping("/getDb")
	public Map<String, String> getDb(String[] args, String tier, Model model) throws Exception {

		String filePath = "src/main/resources/static/py/jgh/trollcheckdb.py";
		ProcessBuilder pb = new ProcessBuilder().command("python", filePath, tier);
		Process p = pb.start();
		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
		StringBuilder buffer = new StringBuilder();
		String line = null;
		while ((line = in.readLine()) != null) {
			buffer.append(line);
		}
		int exitCode = p.waitFor();

//        System.out.println("Process exit value:"+exitCode);        
		in.close();
		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> map = mapper.readValue(buffer.toString(), Map.class);
		log.info("결과값 : {}", map);
		return map;
	}
	//솔로랭크
	@PostMapping("/trollcheck420")
	public Map<String, Object> trollcheck420(@RequestBody Map<String, Object> aMap, Model model) throws Exception {

//		log.info("===myMap : {}", aMap);
		String filePath = "src/main/resources/static/py/jgh/aiTrollCheck420.py";
		String matchId = (String) aMap.get("matchId");
		String participantId = String.valueOf(aMap.get("participantId"));	
		String key = matchId + participantId;
		String tier = "GOLD";
		String teamPosition = String.valueOf(aMap.get("teamPosition"));
		String gameDuration = String.valueOf(aMap.get("gameDuration"));
		String kda = String.valueOf(aMap.get("kda"));
		String totalDamageDealtToChampions = String.valueOf(aMap.get("totalDamageDealtToChampions"));
		String goldEarned = String.valueOf(aMap.get("goldEarned"));
		String championName = String.valueOf(aMap.get("championName"));
//			log.info(goldEarned);
//			String participantId = String.valueOf(aMap.get("participantId")) ;
//			String participantId = String.valueOf(aMap.get("participantId")) ;

		ProcessBuilder pb = new ProcessBuilder().command("python", filePath, 
				key, tier, teamPosition, gameDuration, kda,
				totalDamageDealtToChampions, goldEarned,championName // ,
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
		ObjectMapper objectMapper = new ObjectMapper();
		Map<String, Object> aiReultMap = objectMapper.readValue(buffer.toString(), Map.class);
		log.info("솔로랭크 결과값 : {}", aiReultMap);

		return aiReultMap;
	}
	//칼바람
	@PostMapping("/trollcheck450")
	public Map<String, Object> trollcheck450(@RequestBody Map<String, Object> aMap, Model model) throws Exception {

//		log.info("===myMap : {}", aMap);
		String filePath = "src/main/resources/static/py/jgh/aiTrollCheck450.py";
		String matchId = (String) aMap.get("matchId");
		String participantId = String.valueOf(aMap.get("participantId"));
		String key = matchId + participantId;
		String gameDuration = String.valueOf(aMap.get("gameDuration"));
		String kda = String.valueOf(aMap.get("kda"));
		String totalDamageDealtToChampions = String.valueOf(aMap.get("totalDamageDealtToChampions"));
		String goldEarned = String.valueOf(aMap.get("goldEarned"));
		String championName = String.valueOf(aMap.get("championName"));
//			log.info(goldEarned);
//			String participantId = String.valueOf(aMap.get("participantId")) ;
//			String participantId = String.valueOf(aMap.get("participantId")) ;

		ProcessBuilder pb = new ProcessBuilder().command("python", filePath,
				key, gameDuration, kda,	totalDamageDealtToChampions, goldEarned,championName // ,
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
//		log.info("결과값 : {}", buffer.toString());
		ObjectMapper objectMapper = new ObjectMapper();
		Map<String, Object> aiReultMap = objectMapper.readValue(buffer.toString(), Map.class);
		log.info("칼바람 결과값 : {}", aiReultMap);

		return aiReultMap;
	}
}
