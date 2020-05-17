"use strict";
/* global document window */

// const ready = require('../../js/utils/documentReady.js');
const pickmeup = require('../../js/utils/pickmeup.js');

// ready(function(){
//   
// });



 window.addEventListener('DOMContentLoaded', function () {
	
	

	let calendars = document.querySelectorAll('.calendar'),
		numberOfCalendars = 1;

	
	

	calendars.forEach( function(elem, index) {
		let calendarNumber = 'calendar__inner' + index;


		elem.querySelector('.calendar__inner').classList.add(calendarNumber);

		pickmeup('.' + calendarNumber, {
			flat : true,
			mode : 'range',
			prev: '<div class="calendar__prevBtn"></div>',
			next: '<div class="calendar__nextBtn"></div>',
			format : 'd.m.Y',
			calendars : numberOfCalendars,
		});
		
		let clearBtn = elem.querySelectorAll('.btn')[0],
			submitBtn = elem.querySelectorAll('.btn')[1],
			startDate = elem.getAttribute('data-startDate'), 
			endDate = elem.getAttribute('data-endDate'),
			initiDate = []; 


		if (startDate != null) {
			initiDate.push(startDate);
		}

		if (endDate != null) {
			initiDate.push(endDate);
		}

		if (initiDate.length >= 1) {
			pickmeup('.' + calendarNumber).set_date(initiDate);
	
		}



	

		clearBtn.addEventListener('click', function (e) {
			
			e.preventDefault();
			pickmeup('.' + calendarNumber).clear();
		});

		submitBtn.addEventListener('click', function (e) {
			let dates = pickmeup('.' + calendarNumber).get_date('d.m.Y');
				

			e.preventDefault();

			elem.setAttribute('data-startDate', dates[0]); 
			elem.setAttribute('data-endDate', dates[1]); 
			elem.classList.add('calendar--hide');
		});
		

	});
		

 }); 

