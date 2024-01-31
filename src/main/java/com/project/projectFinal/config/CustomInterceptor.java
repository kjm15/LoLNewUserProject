package com.project.projectFinal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.AsyncHandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.project.projectFinal.dao.MemberDao;
import com.project.projectFinal.dto.MemberDto;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SessionInterceptor implements AsyncHandlerInterceptor {
	@Autowired
	MemberDao memberDao;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// http://localhost/member/login?id=aaa&pw=1111
		HttpSession session = request.getSession();

		if (session.getAttribute("userId") != null) {

			String userId = (String) session.getAttribute("userId");

			MemberDto adiminLevel = memberDao.checkAdmin(userId);
				
			if (adiminLevel.getAdiminLevel() == 999) {
				log.info("총괄관리자 로그인");

				response.sendRedirect("/admin"); // login.jsp
				return false; // 컨트롤러 핸들러 진행 중단

			}
		} else {
			return true; // 핸들러 진행(컨트롤러 진입)
		}
		return true; // 핸들러 진행(컨트롤러 진입)
	}

//	@Override
//	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
//			ModelAndView modelAndView) throws Exception {
//		// TODO Auto-generated method stub
//		System.out.println("view직전 호출");
//	}
}
