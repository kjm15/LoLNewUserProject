package com.project.projectFinal.config;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SpringSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// (변경된)자바 스프링 공식 예제 : 빼고 싶은 주소 넣는법
//		http.authorizeHttpRequests((authz) -> authz.anyRequest().authenticated()).httpBasic(withDefaults());

		http.csrf().disable().cors().disable()
				.formLogin(login -> login.loginPage("/kdg") // 처음 시작 화면 고정
				.loginProcessingUrl("/member/login") // 로그인 submit 받을 url
//				.usernameParameter("userId") // 들고갈 아이디
//				.passwordParameter("userPw") // 들고갈 비밀번호
				.defaultSuccessUrl("/new", true) // 로그인 성공시 리다이렉트 주소

				).logout(withDefaults()); // 로그아웃은 기본설정으로 (/logout으로 인증해제)



		return http.build();
	}

	// 정적 리소스 주소는 시큐리티에서 제외
	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().requestMatchers("/js/**","/css/**","/kdg/**","/member/**","/new/**");

	}

	@Bean
	public PasswordEncoder passwordEncoder() {// 간단하게 비밀번호 암호화
		return new BCryptPasswordEncoder();
	}

}