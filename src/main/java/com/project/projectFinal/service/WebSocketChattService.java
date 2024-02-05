package com.project.projectFinal.service;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.projectFinal.config.CTXProvider;
import com.project.projectFinal.config.WebSocketConfig;
import com.project.projectFinal.dto.DuoMsgDto;

import jakarta.servlet.http.HttpSession;
import jakarta.websocket.EndpointConfig;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ServerEndpoint(value = "/jgh", configurator = WebSocketConfig.class)
@Controller
@NoArgsConstructor
public class WebSocketChattService {

	private ChatService cServ = CTXProvider.ctx.getBean(ChatService.class);

	private HttpSession hSession;
	// 웹소켓 세션을 저장 : 웹소켓 전용
	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());
	// 해당 세션에 로그인한 유저아이디를 맵으로 저장.
	private static Map<Session, String> users = Collections.synchronizedMap(new HashMap<Session, String>());

	@OnMessage // 메세지 수신시
	public void onMessage(String msg, Session session) throws Exception {

		// msg >> hashmap으로 변환시켜주는 구문
		ObjectMapper mapper = new ObjectMapper();
		HashMap<String, String> map = new HashMap<String, String>();
		DuoMsgDto msgDto = new DuoMsgDto();
		map = mapper.readValue(msg, new TypeReference<HashMap<String, String>>() {
		});
		String msg1 = msg;
		// db에 저장할 구문
		cServ.moveService(map);

		log.info("======work : {}", map.get("work"));

		// 각 부분별로 나누어주기
		if (map.get("work").equals("sendMsg")) {

			String rCnt = map.get("rCnt");

			DuoMsgDto mDto = cServ.chattInfo(rCnt);

			log.info("==={}", mDto);
//			for (Map<Session, String> a : )  // 해당 인원에게만
			users.forEach((key, value) -> {
				if (value.equals(mDto.getGuestId()) || value.equals(mDto.getHostId())) {
					try {
						log.info("==={}", mDto);
						key.getBasicRemote().sendText(msg1);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			});

		}

//		synchronized (clients) { // 강제 동기화시킴
//			for (Session s : clients) { // 전체메세지
//				s.getBasicRemote().sendText(msg1);
//
//			}
//		}
	}

	@OnOpen // 클라이언트 접속시
	public void onOpen(Session s, EndpointConfig config) {

		this.hSession = (HttpSession) config.getUserProperties().get("hSession");

//		log.info("httpsession ===== {}" ,this.hSession.getAttribute("userId"));
		String userId = (String) this.hSession.getAttribute("userId");

		if (!clients.contains(s)) {
//			clients.add(s);
			users.put(s, userId);
			log.info("웹소켓 사용 시작 아이디 : " + userId);
			log.info("session open : " + s);
		} else {
			log.info("이미 연결된 session!");
		}
	}

	@OnClose // 클라이언트 접속해제
	public void onClose(Session s) {

		log.info("웹소켓 사용종료 아이디 : " + users.get(s));
		log.info("session close : " + s);
		clients.remove(s);
		users.remove(s);
	}

}