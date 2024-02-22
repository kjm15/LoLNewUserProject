package com.project.projectFinal.jghController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/trollCheck")
@Slf4j
public class RestPythonBuilder {

	@PostMapping("/sendDataToPy")
	public Map<String, String> sendDataToPy(@RequestBody Map<String, Object> myMap, Model model) throws Exception {

		log.info("===myMap : {}", myMap);

		String filePath = "src/main/resources/static/py/jgh/aiTrollCheck.py";
		JSONObject json = new JSONObject(myMap); // 맵에서 받은 데이터를 json화 시킴
		String.valueOf(json); // 스트링으로 형변환
		ProcessBuilder pb = new ProcessBuilder().command("python", filePath, String.valueOf(json));

		Process p = pb.start();
		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
		StringBuilder buffer = new StringBuilder();
		String line = null;
		while ((line = in.readLine()) != null) {
			buffer.append(line);
		}
		int exitCode = p.waitFor();

		log.info("Value is: " + buffer.toString());
		in.close();

		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> map = mapper.readValue(buffer.toString(), Map.class);

		return map;
	}

	@PostMapping("/getDb")
	public Map<String, String> getDb(String[] args,String tier, Model model) throws Exception {
	
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
