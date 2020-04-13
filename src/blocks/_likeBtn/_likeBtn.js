/* global document window */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

window.addEventListener('DOMContentLoaded', function () {

	let likeBtn = document.querySelectorAll('._likeBtn');
		
	likeBtn.forEach(function (elem) {
		let _span = elem.querySelector('._likeBtn__span');
		

		if (+_span.textContent > 10) {
			_span.classList.add('_likeBtn__span--purple')
			elem.classList.add('_likeBtn--purple')
		} else {
			_span.classList.remove('_likeBtn__span--purple')
			elem.classList.remove('_likeBtn--purple')

		}


	})
	
});