/* global document window */

// const ready = require('../../js/utils/documentReady.js');
window.addEventListener('DOMContentLoaded', function () {

	let radioButton = document.querySelectorAll('.radioButton__inner input[type=radio]');
		
	radioButton.forEach(function (elem, i, all) {
		let span = elem.nextElementSibling.querySelector('.radioButton__span');

		span.classList.remove('radioButton__span--darkText');

		if (elem.checked == true) {
			all.forEach( function(item) {
				item.nextElementSibling.querySelector('.radioButton__span').classList.remove('radioButton__span--darkText');
			});
			span.classList.add('radioButton__span--darkText');
		}


		elem.addEventListener('click', function() {
			let span = elem.nextElementSibling.querySelector('.radioButton__span');

			if (elem.checked == true) {
				all.forEach( function(item) {
					item.nextElementSibling.querySelector('.radioButton__span').classList.remove('radioButton__span--darkText');
				});
				span.classList.add('radioButton__span--darkText');
			}
			});
	});
	
});