package com.project.projectFinal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration 
public class WebConfig implements WebMvcConfigurer {
	@Autowired
	CustomInterceptor interceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(interceptor).addPathPatterns("/admin");
//				.excludePathPatterns("/", "/js/**", "/css/**", "/img/**", "/new/**")
//				.excludePathPatterns("/favicon.ico", "/error")
//				.excludePathPatterns("/new", "/jgh", "/jhl", "/kyt", "/kdg", "/kjm", "/stm");

	}

}
