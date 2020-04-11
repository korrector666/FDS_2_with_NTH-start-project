/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const cl = function (obj) {
	console.log(obj);
}
window.addEventListener('DOMContentLoaded', function () {

	let radioButton = document.querySelectorAll('input[type=radio]');
		
	radioButton.forEach(function (elem,i,_all) {
		let _span = elem.nextElementSibling.querySelector('._radioButton__span');
	
		_span.classList.remove('_radioButton__span--darkText')

		if (elem.checked == true) {
			_all.forEach( function(item) {
				item.nextElementSibling.querySelector('._radioButton__span').classList.remove('_radioButton__span--darkText');
			});
			_span.classList.add('_radioButton__span--darkText')
		}


		elem.addEventListener('click', function(e) {
			let _span = elem.nextElementSibling.querySelector('._radioButton__span');

			if (elem.checked == true) {
				_all.forEach( function(item) {
					item.nextElementSibling.querySelector('._radioButton__span').classList.remove('_radioButton__span--darkText');
				});
				_span.classList.add('_radioButton__span--darkText')
			}
			});
	})
	
});