/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
{
let dateCombos = document.querySelectorAll('.dateCombo__text') ;

	dateCombos.forEach( dateCombo => {
		let calendar = dateCombo.querySelector('.calendar'), 
			dropDowns = dateCombo.querySelector('.dateDrop__downArrow'); 

			if (!calendar.classList.contains('calendar--hide')) {
				calendar.classList.add('calendar--hide');
				// pickmeup('.calendar__inner')

			}



	});

}
// pickmeup('.date').clear();
//  window.addEventListener('DOMContentLoaded', function () {}); 

