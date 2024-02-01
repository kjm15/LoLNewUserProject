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

        http
		        .authorizeHttpRequests((authz) -> authz
		            .anyRequest().authenticated()
		        )
		        .httpBasic(withDefaults());
		   
        			
        http      .formLogin(login -> login
                        .loginPage("/new")	// [A] 커스텀 로그인 페이지 지정
                        .loginProcessingUrl("/login")	// [B] submit 받을 url
                        .usernameParameter("userId")	// [C] submit할 아이디
                        .passwordParameter("userPw")	// [D] submit할 비밀번호
                        .defaultSuccessUrl("/new", true)
                        
                        .permitAll()
                )
                .logout(withDefaults());	// 로그아웃은 기본설정으로 (/logout으로 인증해제)

        return http.build();
    }
    @Bean
 	public PasswordEncoder passwordEncoder() {//간단하게 비밀번호 암호화
 		return new BCryptPasswordEncoder(); 
 	}

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/new", "/jgh/**")
        		.requestMatchers("resoures/**");
    }

 
}