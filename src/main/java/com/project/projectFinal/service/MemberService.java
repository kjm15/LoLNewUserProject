package com.project.projectFinal.service;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.projectFinal.customEx.CustomException;
import com.project.projectFinal.dao.MemberDao;
import com.project.projectFinal.dto.KakaoDto;
import com.project.projectFinal.dto.MemberDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Service
@Slf4j
public class MemberService {

	@Autowired
	MemberDao memberDao;
	private final PasswordEncoder passwordEncoder;

	public boolean login(MemberDto memberDto) throws CustomException, BadRequestException {
		MemberDto mDto = memberDao.login(memberDto);
//		log.info("=={}",mDto);
		if (passwordEncoder.matches(memberDto.getUserPw(),mDto.getUserPw())) {
			return true;
		}else {
			return false;
		}
		
	}

	@Transactional
	public MemberDto join(MemberDto memberDto) {

		// encodedPassword : 암호화된 비밀번호를 만들어 담음
		MemberDto mDto = MemberDto.passwordEnconderDto(memberDto, passwordEncoder);

		log.info("===", mDto);

		if (memberDao.find(mDto) == 1) {
			throw new CustomException("아이디가 중복되었습니다.");
		}
		if (memberDao.join(mDto) == 1) {

			if (memberDto.getUserId().equals("") || memberDto.getUserPw().equals("")) {

				throw new CustomException("아이디 혹은 비밀번호가 공백입니다.");
			}

		}

		return mDto;
//		return null;
	}

	@Transactional
	public void payDbSave(KakaoDto paymentDto) {

		int result1 = memberDao.payDbSave(paymentDto);

		int result2 = memberDao.updatePoint(paymentDto);

		if (result1 == 0) {
			throw new CustomException("paymentT 결제 db에러");
		} else if (result2 == 0) {
			throw new CustomException("memberT 포인트 db에러");
		}

	}

	public MemberDto main(MemberDto memberDto) {

		return memberDao.main(memberDto);

	}

	public MemberDto joinIdCheck(MemberDto memberDto) { // 회원가입 시 아이디 중복채크
		return memberDao.joinIdCheck(memberDto);

	}

	public void logoutNow(String userId) {
		memberDao.logoutNow(userId);

	}

}
