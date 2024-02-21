//모달 열기

const modal1 = document.getElementById("modal1")
const inqMain = document.getElementById("inqMain")
inqMain.addEventListener("click", e => {
	modal1.style.display = "flex"

})

//모달 닫기
const closeBtn = modal1.querySelector(".modal1-close-area")
closeBtn.addEventListener("click", e => {
	modal1.style.display = "none"
})