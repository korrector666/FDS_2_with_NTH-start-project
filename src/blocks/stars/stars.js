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
				e.parentElement.classList.add('stars__label--checked');
			} else {
				e.parentElement.classList.remove('stars__label--checked');
			}
		});

		element.addEventListener('click', function (tar) {

			starsIn.forEach( (e,i, all) => {
				if( tar.target == e) {
					checkedStarNumber = i;
					all.forEach( function(e,i) {
						if (i <=checkedStarNumber) {
							e.parentElement.classList.add('stars__label--checked');
						} else {
							e.parentElement.classList.remove('stars__label--checked');
						}
					}); 
				}
			});

		});
		
	});
	
	
});