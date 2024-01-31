package com.project.projectFinal.service;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.config.CTXProvider;
import com.project.projectFinal.dto.DuoMsgDto;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ServerEndpoint(value = "/jgh")
@Controller
@NoArgsConstructor
public class WebSocketChattService {

	private ChatService cServ = CTXProvider.ctx.getBean(ChatService.class);
	
	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());

	@OnMessage // 메세지 수신시
	public void onMessage(String msg, Session session) throws Exception {
		
		//msg >> hashmap으로 변환시켜주는 구문
		ObjectMapper mapper = new ObjectMapper();
		HashMap<String, String> map = new HashMap<String, String>();
		DuoMsgDto msgDto = new DuoMsgDto();
		map = mapper.readValue(msg, new TypeReference<HashMap<String, String>>() {});	
		String msg1 = msg;
		//변환완료후 서비스로 이동
		cServ.moveService(map);
		
		log.info("======work : {}",map.get("work"));
		
		//전체한테 보내기
		synchronized (clients) { //강제 동기화시킴
			for (Session s : clients) {
				s.getBasicRemote().sendText(msg1);

			}
		}
	}

	@OnOpen // 클라이언트 접속시
	public void onOpen(Session s) {

		if (!clients.contains(s)) {
			clients.add(s);
			log.info("session open : " + s);
		} else {
			log.info("이미 연결된 session 임!!!");
		}
	}

	@OnClose // 클라이언트 접속해제
	public void onClose(Session s) {
		log.info("session close : " + s);
		clients.remove(s);
	}

}