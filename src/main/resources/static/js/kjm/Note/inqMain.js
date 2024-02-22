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

$('#GoInq').on("click",function(){
	console.log("실행")
	
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"
	
})
$('#inqMain').on("click",function(){
	console.log("실행1")
	
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"
	
})
$('#inqMain2').on("click",function(){
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"
	
})
$('#inqMain3').on("click",function(){
	modal2.style.display = "none"
	modal3.style.display = "none"
	modal1.style.display = "flex"
	
})
$('#myinq').on("click",function(){
	console.log("실행2")
	
	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"
	
})
$('#myinq2').on("click",function(){
	console.log("실행2")
	
	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"
	
})
$('#myinq3').on("click",function(){
	console.log("실행2")
	
	modal1.style.display = "none"
	modal3.style.display = "none"
	modal2.style.display = "flex"
	
})
$('#sendinq').on("click",function(){
	console.log("실행3")
	
	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"
	
})
$('#sendinq2').on("click",function(){
	console.log("실행3")
	
	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"
	
})
$('#sendinq3').on("click",function(){
	console.log("실행3")
	
	modal1.style.display = "none"
	modal2.style.display = "none"
	modal3.style.display = "flex"
	
})



const closeBtn = modal1.querySelector(".modal-close-area")
const closeBtn2 = modal2.querySelector(".modal-close-area")
const closeBtn3 = modal3.querySelector(".modal-close-area")
closeBtn.addEventListener("click", e => {
	modal1.style.display = "none"
})

closeBtn2.addEventListener("click", e => {
	modal2.style.display = "none"
})

closeBtn3.addEventListener("click", e => {
	modal3.style.display = "none"
})
