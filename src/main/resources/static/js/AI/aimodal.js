/**
 * 
 */

///////////////////////////////모달/////////////////////////////////////

const modal_wrap = document.querySelector('.modal_wrap')
const modal_background = document.querySelector('.modal_background')

function close() {

	modal_wrap.classList.remove('show-modal');
	modal_background.classList.remove('show-modal');
}
function open() {

	$('.wrap').show();
	$('#flagcollapse').show();
	modal_wrap.classList.add('show-modal')
	modal_background.classList.add('show-modal')
}

window.addEventListener('click', (e) => {
	//	console.log(e.target)

	e.target === modal_background ? close() : false
	if (e.target.className === 'btn btn-secondary dropdown-toggle show') {

		close()
	}

})