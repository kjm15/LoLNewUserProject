package com.project.projectFinal.kjmcontroller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectFinal.dao.NoteDao;
import com.project.projectFinal.dto.NoteDto;
import com.project.projectFinal.service.NoteService;

@RestController
public class RestNoteController {
	@Autowired
	NoteService noteService;
	
	   @GetMapping("/Note/{sendId}")
	   public ArrayList<NoteDto> getNoteBysendId(@PathVariable("sendId") String sendId) {
	      return noteService.selectNoteById(sendId);
	   }
}
