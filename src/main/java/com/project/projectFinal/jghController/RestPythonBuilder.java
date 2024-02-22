package com.project.projectFinal.jghController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
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
	public Map<String, String> sendDataToPy(String matchId, Model model) throws Exception {
		Map<String, String> resultMap = new HashMap<>();
		List<Map<String, String>> aList = matchListService.sendDataToPy(matchId);
//		aMap.get("tier")
		log.info("===myMap : {}", aList);
		
		for (Map<String, String> aMap : aList) {
			String participantId = aMap.get("participantId");
			String filePath = "src/main/resources/static/py/jgh/aiTrollCheck.py";

			ProcessBuilder pb = new ProcessBuilder().command("python", filePath, "GOLD", aMap.get("teamPosition"),
					aMap.get("kda"), aMap.get("totalDamageDealtToChampions"), aMap.get("goldEarned") // ,
					);
			Process p = pb.start();
			BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
			StringBuilder buffer = new StringBuilder();
			String line = null;
			while ((line = in.readLine()) != null) {
				buffer.append(line);
			}
			int exitCode = p.waitFor();

			log.info("Value is: " + buffer.toString());
			
			
			resultMap.put(matchId+participantId, buffer.toString());
			in.close();
		}
	
		return resultMap;
	}

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
		System.out.println("Value is: " + buffer.toString());
//        System.out.println("Process exit value:"+exitCode);        
		in.close();
		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> map = mapper.readValue(buffer.toString(), Map.class);

		return map;
	}

}
