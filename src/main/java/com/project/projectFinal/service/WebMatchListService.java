package com.project.projectFinal.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.project.projectFinal.dto.PostDto;

@Service
public class WebMatchListService {
	private String api_key = "RGAPI-f94a4128-cb3b-4303-b92b-0016fa59b5a8";
	public String getpuuId(String gameName, String tagLine) {
		String url = "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + gameName + "/" + tagLine
				+ "?api_key=" + api_key;
		
		WebClient webClient = WebClient.builder().baseUrl(url).build();
		System.out.println("==========="+webClient);
		
		PostDto response = webClient.get().uri(uriBuilder -> uriBuilder.build()).retrieve().bodyToMono(PostDto.class)
				.block();
		System.out.println(response);
		
		return response.getPuuid();
	}
	
}