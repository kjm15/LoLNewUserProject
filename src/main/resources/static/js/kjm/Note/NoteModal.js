///모달//
const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {

	e.target === modal_background ? close() : false

})

$('.modal_close').on("click", function() {
	close()
})