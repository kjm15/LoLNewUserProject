package com.project.projectFinal.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@ServerEndpoint(value = "/chatt")
public class WebSocketChattService {

	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());

	@OnMessage // 메세지 수신시
	public void onMessage(String msg, Session session) throws Exception {
		System.out.println("receive message : " + msg);
		for (Session s : clients) {
			System.out.println("send data : " + msg);
			s.getBasicRemote().sendText(msg);

		}
	}

	@OnOpen // 클라이언트 접속시
	public void onOpen(Session s) {
		log.info("open session : {}",s.toString());
		if (!clients.contains(s)) {
			clients.add(s);
			log.info("session open : {}",s);
		} else {
			log.info("기존 연결된 세션 있음");
		}
	}

	@OnClose // 클라이언트 접속해제
	public void onClose(Session s) {
		log.info("session close : {}",s);
		clients.remove(s);
	}

}