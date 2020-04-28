"use strict";
/* global document window */

// const ready = require('../../js/utils/documentReady.js');
const pickmeup = require('../../js/utils/pickmeup.js');

// ready(function(){
//   
// });



 window.addEventListener('DOMContentLoaded', function () {
	
	

	let calendars = document.querySelectorAll('.calendar');
	
	// cl(calendars);
	calendars.forEach( function(elem) {

		pickmeup('.calendar__inner', {
			flat : true,
			mode : 'range',
			date: ['19.08.2019','23.08.2019'],
			prev: '<div class="calendar__prevBtn"></div>',
			next: '<div class="calendar__nextBtn"></div>'
		});


		let clearBtn = elem.querySelectorAll('.btn')[0],
			submitBtn = elem.querySelectorAll('.btn')[1];
	

		clearBtn.addEventListener('click', function () {
			pickmeup('.calendar__inner').clear();
		});

		submitBtn.addEventListener('click', function () {
			let dates = pickmeup('.calendar__inner').get_date('d-m-Y');

			elem.setAttribute('data-startDate', dates[0]); 
			elem.setAttribute('data-endDate', dates[1]); 
			
			elem.classList.add('calendar--hide');

			return pickmeup('.calendar__inner').get_date();
		});
		

	});
		

 }); 

