package com.project.projectFinal.config;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.AsyncHandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class AdminInterceptor implements AsyncHandlerInterceptor {


	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws IOException {
		log.info("AdminInterceptor실행");
		HttpSession session = request.getSession();

		String userId = (String) session.getAttribute("userId");
		
		if (userId == null) {

			response.sendRedirect("/new");
			return false;
		}
		String adminLevel = (String) session.getAttribute("adminLevel");

		log.info("====={}",adminLevel);

		if (adminLevel.equals("a")) {
			log.info("중간관리자 입장");
			return true;
		}
	
		return false;
	}

}
