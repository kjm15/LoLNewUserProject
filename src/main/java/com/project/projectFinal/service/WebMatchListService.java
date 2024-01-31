package com.project.projectFinal.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.project.projectFinal.dto.RiotApiDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class WebMatchListService {
	private String api_key = "RGAPI-f94a4128-cb3b-4303-b92b-0016fa59b5a8";

	public String getpuuId(String gameName, String tagLine) {
		String url = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + gameName + "/" + tagLine
				+ "?api_key=" + api_key;

		WebClient webClient = WebClient.builder().baseUrl(url).build();

		RiotApiDto response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve()
				.bodyToMono(RiotApiDto.class).block();

		return response.getPuuid();
	}

	public List<String> MatchList(String puuid) {
		String count = "3"; // 인트쓰면 인식 못 함 (문자열로 써야함)

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid
				+ "/ids?start=0&count=" + count + "&api_key=" + api_key;

		WebClient webClient = WebClient.builder().baseUrl(url).build();

		List<String> response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(List.class)
				.block();

		return response;
	}


	public Map gamedate(String matchList) {

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/" + matchList + "?api_key=" + api_key;
		WebClient webClient = WebClient.builder().baseUrl(url).build();

		Map response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(Map.class).block();

		return response;

	}
//	public List<String> newMatchList(String count, StmUserListDto userListDto) {
//		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" + userListDto.getPuuid()
//				+ "/ids?start=0&count=" + count + "&api_key=" + api_key;
//
//		WebClient webClient = WebClient.builder().baseUrl(url).build();
//		
//		List<String> response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(List.class)
//				.block();
//		userListDto.setMatchId(response);
//		return response;
//		
//	}
//
//	public Map newGamedate(String matchList,StmUserListDto userListDto) {
//		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/" + matchList + "?api_key=" + api_key;
//		WebClient webClient = WebClient.builder().baseUrl(url).build();
//		
//		Map response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(Map.class).block();
//		
//		Map response1 = (Map) response.get("info");
//		List response2 =  (List) response1.get("participants");
//		for(int i = 0; i<response2.size();  i++) {
//			Map response3 =  (Map) response2.get(i);
//			response3.get("riotIdGameName");
//			
//		
//		}
//		
//		
//		return response;
//	
//	}

}