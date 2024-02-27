//모달 열기

const modal1 = document.getElementById("modal1")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")

const GoInq = document.getElementById("GoInq")
const inqMain = document.getElementById("inqMain")
const inqMain2 = document.getElementById("inqMain2")
const inqMain3 = document.getElementById("inqMain3")
const myinq = document.getElementById("myinq")
const myinq2 = document.getElementById("myinq2")
const myinq3 = document.getElementById("myinq3")
const sendinq = document.getElementById("sendinq")
const sendinq2 = document.getElementById("sendinq2")
const sendinq3 = document.getElementById("sendinq3")


	$('#GoGoGo').click(function(){
		console.log("실행")
		inqMaininfo()
		modal2.style.display = "none"
		modal3.style.display = "none"
		modal1.style.display = "flex"
		
	})

$('#inqMain').on("click", function() {
	console.log("실행1")
	inqMaininfo()
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"

})
$('#inqMain2').on("click", function() {
	inqMaininfo()
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"

})
$('#inqMain3').on("click", function() {
	inqMaininfo()
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"

})
$('#myinq').on("click", function() {
	console.log("실행2")

	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"

})
$('#myinq2').on("click", function() {
	console.log("실행2")

	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"

})
$('#myinq3').on("click", function() {
	console.log("실행2")

	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"

})
$('#sendinq').on("click", function() {
	console.log("실행3")

	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"

})
$('#sendinq2').on("click", function() {
	console.log("실행3")

	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"

})
$('#sendinq3').on("click", function() {
	console.log("실행3")

	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"

})

//닫기버튼
const closeBtn = modal1.querySelector(".modal-close-area")
const closeBtn2 = modal2.querySelector(".modal-close-area")
const closeBtn3 = modal3.querySelector(".modal-close-area")
const closeBtn4 = modal4.querySelector(".modal-close-area")
closeBtn.addEventListener("click", e => {
	modal1.style.display = "none"
})

closeBtn2.addEventListener("click", e => {
	modal2.style.display = "none"
})

closeBtn3.addEventListener("click", e => {
	modal3.style.display = "none"
})
closeBtn4.addEventListener("click", e => {
	modal4.style.display = "none"
})

//내 문의내역

function inqMaininfo() {



	$.ajax({

		type: 'post',
		url: '/inqMainInfo',

		
		success: function(res) {
			console.log(res)
			let str = ''
			for (let i in res) {
				str += `<tr class="inqlist">
                        <td class="n_num" style="display : none;">${res[i].n_num}</td>
                        <td class="n_title">${res[i].n_title}</td>
                        <td class="n_date">${res[i].n_date}</td>
                        <td class="status">${res[i].status}</td>
                        <td class="send_userId" style="display : none;">${res[i].send_userId}</td>
                        <td class="n_message" style="display : none;">${res[i].n_message}</td>
                    </tr>`;
			}
			document.getElementById("inqbody").innerHTML = str
		}
	})
}

//문의내역 자세히 보기
//const modal4 = document.getElementById("modal4")
const modal1_wrap = document.getElementById("modal1_wrap")
modal1_wrap.addEventListener("click", e => {
	//클릭 여러번 해도 한번만 나옴. 계속 덮어쓰기 되기 때문
	modal4.style.display = "flex"
//	modal1.style.display = "none"
//	modal2.style.display = "none"
//	modal3.style.display = "none"
	//테이블의 tr행이 몇번째 행인지 알게 해주는 구문
	const rowIndex = e.target.closest("tr").rowIndex;
	var table = document.getElementById("modal1_wrap")
	var tr = table.getElementsByTagName("tr");
	let n_title = tr[rowIndex].getElementsByTagName("td")[1].textContent
	let n_message = tr[rowIndex].getElementsByTagName("td")[5].textContent

//	console.log(n_title)

	document.querySelector("#title").innerText = n_title
	document.querySelector("#message").innerText = n_message
	document.querySelector("#date").innerText = n_date

})
//function inqMaininfo() {
//        $.ajax({
//            type: 'post',
//            url: '/inqMainInfo', // 서버에서 데이터를 처리하는 엔드포인트 URL
//            success: function(res) {
//                console.log(res);
//                let str = '';
//                for (let i in res) {
//                    str += `<tr class="inqlist">
//                        <td class="n_num">${res[i].n_num}</td>
//                        <td class="n_title">${res[i].n_title}</td>
//                        <td class="n_date">${res[i].n_date}</td>
//                    </tr>`;
//                }
//                $('#inqbody').html(str); // 데이터를 테이블에 삽입
//            },
//            error: function(xhr, status, error) {
//                console.error(error);
//            }
//        });
//    }