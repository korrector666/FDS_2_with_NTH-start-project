/* global document window  */

// const ready = require('../../js/utils/documentReady.js');

window.addEventListener('DOMContentLoaded', function () {

	let radioButtons = document.querySelectorAll('.stars');

	radioButtons.forEach(function( element) {
		let starsIn = element.querySelectorAll('input'),
			checkedStarNumber;

		starsIn.forEach( function(e,i) {
			if (e.checked == true) {
				checkedStarNumber = i;
			}
		})

		starsIn.forEach( function(e,i) {
			if (i <=checkedStarNumber) {
				e.parentElement.classList.add('_stars__label--checked')
			} else {
				e.parentElement.classList.remove('_stars__label--checked')
			}
		})

		element.addEventListener('click', function (tar) {

			starsIn.forEach( (e,i, _all) => {
				if( tar.target == e) {
					checkedStarNumber = i;
					_all.forEach( function(e,i) {
						if (i <=checkedStarNumber) {
							e.parentElement.classList.add('_stars__label--checked')
						} else {
							e.parentElement.classList.remove('_stars__label--checked')
					}
						
					}) 
				}
			})

		})





		
	});
		
	
});