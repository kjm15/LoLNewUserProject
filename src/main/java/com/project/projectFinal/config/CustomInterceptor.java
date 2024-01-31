package com.project.projectFinal.config;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.AsyncHandlerInterceptor;

import com.project.projectFinal.CustomAnnotation.MySecured;
import com.project.projectFinal.CustomAnnotation.Role;
import com.project.projectFinal.dto.MemberDto;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CustomInterceptor implements AsyncHandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws IOException {
		HttpSession session = request.getSession();

		if (session == null) {// 로그인을 하지 않은 상태

			response.sendRedirect("/new");
			return false;
		}

		String userId = (String) session.getAttribute("userId");
		if (userId == null) { // 로그인 했는지 확인

			response.sendRedirect("/new");
			return false;
		} else if ("jgh".equals(userId)) {
			log.info("관리자 입장");
			return true;

		}
		response.sendRedirect("/new");
		return true;
	}

}
