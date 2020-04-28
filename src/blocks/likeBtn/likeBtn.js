/* global document window */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

window.addEventListener('DOMContentLoaded', function () {

	let likeBtn = document.querySelectorAll('.likeBtn');
		
	likeBtn.forEach(function (elem) {
		let span = elem.querySelector('.likeBtn__span');
		

		if (+span.textContent > 10) {
			span.classList.add('likeBtn__span--purple');
			elem.classList.add('likeBtn--purple');
		} else {
			span.classList.remove('likeBtn__span--purple');
			elem.classList.remove('likeBtn--purple');

		}


	});
	
});