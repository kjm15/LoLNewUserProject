package com.project.projectFinal.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.dto.MsgDto;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ServerEndpoint(value = "/jgh")
@Service
public class WebSocketChattService {

	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());

	@OnMessage // 메세지 수신시
	public void onMessage(String msg, Session session) throws Exception {

		for (Session s : clients) {
//			log.info("send data : " + msg);
			s.getBasicRemote().sendText(msg);

		}
	}

	@OnOpen // 클라이언트 접속시
	public void onOpen(Session s) {
//		log.info("open session : " + s.toString());
		if (!clients.contains(s)) {
			clients.add(s);
//			log.info("session open : " + s);
		} else {
			log.info("이미 연결된 session 임!!!");
		}
	}

	@OnClose // 클라이언트 접속해제
	public void onClose(Session s) {
//		log.info("session close : " + s);
		clients.remove(s);
	}

}