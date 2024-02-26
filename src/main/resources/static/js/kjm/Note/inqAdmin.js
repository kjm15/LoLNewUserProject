//$(document).ready(function() {
//	$('#allSend').ready(function() {
//		event.preventDefault(); // 폼 기본동작 방지
//
//		let n_title = $('#n_title').val();
//		let n_message = $('#n_message').val();
//
//		$.ajax({
//			type: 'POST',
//			url: '/sendToAllMembers', 
//			data: { 'n_message': n_message,
//					'n_title' : n_title
//			},
//			success: function(res) {
//				console.log(res)
//				alert('메시지를 전송했습니다.');
//			},
//			error: function(xhr, status, error) {
//				alert('메시지 전송에 실패했습니다. 에러: ' + error);
//			}
//		});
//	})
//})

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Sequelize 연결 설정
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

// Member 모델 정의
const Member = sequelize.define('Member', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
    role: {
    type: DataTypes.STRING,
    allowNull: false
  }
  // 다른 회원 정보 컬럼들...
});

// NoteTable 모델 정의
const NoteTable = sequelize.define('NoteTable', {
  recv_userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  send_userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  n_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  n_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  n_message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  read_check: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 회원 전체에게 메시지 보내기
app.post('/sendMessageToAllMembers', async (req, res) => {
    const { n_title, n_message } = req.body;

    try {
        // 모든 회원 가져오기
        const userMembers = await Member.findAll({ where: { role: 'user' } });

        // 각 회원에게 메시지 보내기
       
			userMembers.forEach(async (member) => {
            await NoteTable.create({
                recv_userId: member.userId,
                send_userId: 'admin', // 보내는 회원 ID (예시: 'admin')
                n_date: new Date(),
                n_title: n_title,
                n_message: n_message,
                read_check: 0 // 읽음 여부 (예시: 0 - 안 읽음)
            });
        });

        res.status(200).send('모든 회원에게 메시지를 전송했습니다.');
    } catch (error) {
        console.error('메시지 전송에 실패했습니다:', error);
        res.status(500).send('메시지 전송에 실패했습니다.');
    }
});

// 서버 시작
app.listen(port, async () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);

    // 데이터베이스 연결
    try {
        await sequelize.authenticate();
        console.log('데이터베이스 연결 성공');
    } catch (error) {
        console.error('데이터베이스 연결 실패:', error);
    }
});