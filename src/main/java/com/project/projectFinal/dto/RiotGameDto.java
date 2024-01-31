package com.project.projectFinal.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RiotGameDto {
private ArrayList<Map<String, RiotGameDto>> Mlist;
private int championId; // 챔피언 고유 넘버
private int teamId; //팀 아이디
private int assists; // 어시스트
private String riotIdGameName; //플레이어 아이디
private int deaths; // 데스
private boolean firstBloodKill; // 퍼스트 블러드
private String championName; //챔피언 이름
private String riotIdTagline;//챔피언 태그 
private int gameEndTimestamp; //게임 끝난 시간
private int gameStartTimestamp;//게임 시작 시간
private String kda; //kda
private int kills; // 킬
private String lane;
private List<Integer> legendaryItemUsed; // 지움
private String matchId;
private int queueId;
private int totalAllyJungleMinionsKilled;
private int totalDamageDealtToChampions;
private int totalDamageTaken;
private int totalEnemyJungleMinionsKilled;
private int totalMinionsKilled;
private int wardsKilled;
private int wardsPlaced;
private boolean win;
private int dragon;
}
