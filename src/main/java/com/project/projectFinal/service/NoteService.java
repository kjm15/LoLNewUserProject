package com.project.projectFinal.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectFinal.dao.NoteDao;
import com.project.projectFinal.dto.NoteDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoteService {
	@Autowired NoteDao noteDao;
	
	public ArrayList<NoteDto> NoteInfo() {
		
		ArrayList<NoteDto> maillist =  noteDao.NoteInfo();
		return maillist;
	}

	public void sendNote(NoteDto noteDto) {
		noteDao.sendNote(noteDto);
		
	}

	public void DeleteNote(int num) {
		noteDao.DeleteNote(num);
	}

	public NoteDto detailNote(NoteDto noteDto) {
		NoteDto dlist = noteDao.detailNote(noteDto);
		return dlist;
	}
	
}
