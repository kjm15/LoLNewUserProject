/**
 * 
 */
$(function() {

	champImgAll();

});

$(document).on('click', '.selectChampline>div', function() {
	$(this).addClass('lineClick');
	$(this).siblings().removeClass('lineClick');
});

$('#champSearch').on('keyup', function() {
	let searchChamp = $('#champSearch').val();

	$.ajax({
		type: "post",
		url: "/champSearch",
		data: { "champSearch": searchChamp },
		success: function(res) {

			var champContainer = $('.champs');

			champContainer.empty();

			for (let i = 0; i < res.length; i++) {
				var imgSrc = 'https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + res[i].champion_name + '.png';

				var imgElement = $('<img>').addClass('championImg').attr('src', imgSrc);

				champContainer.append($('<div>').addClass('champImgItem').append($('<div>').addClass('cimgs').append(imgElement)).append($('<span>').addClass('champName').append(res[i].champion_name_kr)));

			}
		}
	});
});

function champImgAll() {
	$.ajax({
		type: "get",
		url: "/champListAll",
		dataType: "json",
		success: function(res) {
			var champContainer = $('.champs');

			// 이전에 추가된 이미지 엘리먼트들을 초기화
			champContainer.empty();

			for (let i = 0; i < res.length; i++) {
				// let champName = '카운터 챔피언 정보 넣어볼 예정'
				let champName = res[i].champion_name_kr
				let Name = res[i].champion_name
				var imgSrc = 'https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + res[i].champion_name + '.png';

				// 이미지 엘리먼트 동적으로 생성
				var imgElement = $('<img>').addClass('championImg').attr('src', imgSrc).attr('id', Name);

				// 생성된 이미지 엘리먼트를 컨테이너에 추가
				champContainer.append($('<div>').addClass('champImgItem').append($('<span>').addClass('tooltiptext tooltip-top').append(champName))
					.append($('<div>').addClass('cimgs').append(imgElement)).append($('<span>').addClass('champName').append(res[i].champion_name_kr)));

			}
		}
	});

}
$('#champAll').on('click', function() {
	champImgAll();

});


function champLine(lineSelect) {
	$.ajax({
		type: "post",
		url: "/champLineSelect",
		data: { "line": lineSelect },
		success: function(res) {
			var champContainer = $('.champs');

			champContainer.empty();

			for (let i = 0; i < res.length; i++) {
				let champName = res[i].champion_name_kr
				let Name = res[i].champion_name
				var imgSrc = 'https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/' + res[i].champion_name + '.png';
				 var imgElement = $('<img>')
                    .addClass('championImg')
                    .attr('src', imgSrc)
                    .attr('id', Name)
                    .click(function () {
                        openModal(imgSrc); // 클릭 시 모달 열기
                    });
				 // 챔피언 이미지 아이템 생성
                var champImgItem = $('<div>').addClass('champImgItem')
                    .append($('<span>').addClass('tooltiptext tooltip-top').append(champName))
                    .append($('<div>').addClass('cimgs').append(imgElement))
                    .append($('<span>').addClass('champName').append(res[i].champion_name_kr));

                // 생성한 아이템을 컨테이너에 추가
                champContainer.append(champImgItem);
			}

		}
	});
}



// 모달 열기 함수
function openModal(imgSrc) {
	var modalContainer = $('#myModal');
//	var modalContent = $('.modal-content');

	// 이미지 및 챔피언 이름을 모달 내부에 추가
//	modalContent.empty().append($('<img>').attr('src', imgSrc));

	// 모달 열기
	modalContainer.css('display', 'flex');
}

// 모달 닫기 함수
function closeModal() {
	$('#myModal').css('display', 'none');
}

// 모달 외부를 클릭하면 모달이 닫히도록 함
$(document).on('click', function(event) {
	var modal = $('#myModal');
	if (event.target == modal[0]) {
		closeModal();
	}
});