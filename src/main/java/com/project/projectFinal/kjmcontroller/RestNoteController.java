package com.project.projectFinal.kjmcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dto.MemberDto;
import com.project.projectFinal.dto.NoteDto;
import com.project.projectFinal.service.NoteService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class RestNoteController {
	@Autowired
	NoteService noteService;
	

	   
	   @PostMapping("/mailsend")
	   public int mailsend(NoteDto noteDto,HttpSession session,MemberDto memberDto) {
		   String userId = (String) session.getAttribute("userId");
		   memberDto.setUserId(userId);
		   log.info("========noteDto입니다.={}",noteDto);
		   return noteService.mailsend(noteDto);
	   }
	   	
}
