package com.project.projectFinal.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.project.projectFinal.dto.NoteDto;

@Mapper
public interface NoteDao {

	ArrayList<NoteDto> NoteInfo();

	int sendNote(NoteDto noteDto);

	void DeleteNote(int num);

	NoteDto detailNote(NoteDto noteDto);

}