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
	private int apiCount = 0;
	String[] ApikeyList = { "RGAPI-f94a4128-cb3b-4303-b92b-0016fa59b5a8", "RGAPI-3a9db266-dbba-4ead-9ec5-93b90d528991",
			"RGAPI-175e99fa-a692-4cbb-acfb-9410f712f370"};
	private String api_key = null; // 리스트 돌아가면서 들어갈 예정

	public String getpuuId(RiotApiDto apiDto) {
		apiCount = apiDto.getMatchCnt();
		String apiKeyTeam = ApikeyList[Integer.valueOf(apiCount) % ApikeyList.length];
		api_key = apiKeyTeam;
		System.out.println("getMatchCnt= "+apiDto.getMatchCnt()+" 이번에사용할 api key="+api_key);
		String url = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + apiDto.getGameName() + "/"
				+ apiDto.getTagLine() + "?api_key=" + api_key;

		WebClient webClient = WebClient.builder().baseUrl(url).build();
		
		RiotApiDto response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve()
				.bodyToMono(RiotApiDto.class).block();

		return response.getPuuid();
	}

	public List<String> MatchList(RiotApiDto apiDto) {
		int Matchcnt = apiCount * 3;
		String count = Integer.toString(Matchcnt);

		String url = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" + apiDto.getPuuid()
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
}