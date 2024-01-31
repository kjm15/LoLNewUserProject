package com.project.projectFinal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // java config ---> 레거시 pro에서는 xml로 한다.
public class WebConfig implements WebMvcConfigurer {
	@Autowired
	SessionInterceptor interceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(interceptor)
				// 컨트롤러에서 처리할 수 없는 매핑url까지 인터셉터
				.addPathPatterns("/**") // "/board/list/1"
				.excludePathPatterns("/", "/js/**", "/css/**", "/img/**", "/new/**")

				// 서버기동시 BasicController에서 자동으로 /error 요청함
				// ,단 컨트롤러에 명시하지않아도 됨
				.excludePathPatterns("/favicon.ico", "/error")
				.excludePathPatterns("/new", "/jgh", "/jhl", "/kyt", "/kdg", "/kjm", "/stm");

	}
}
