/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const pickmeup = require('../../js/utils/pickmeup.js');

// ready(function(){
//   
// });

const cl = function (obj) {
	console.log(obj);
}

 window.addEventListener('DOMContentLoaded', function () {
	pickmeup('._calendar__inner', {
		flat : true,
		mode : 'range',
		date: '19.08.2019 , 23.08.2019',
		prev: '<div class="_calendar__prevBtn"></div>',
		next: '<div class="_calendar__nextBtn"></div>'
	});

	let calendars = document.querySelectorAll('.pmu-days');
	
	// cl(calendars);

	calendars.forEach( function(elem) {
		
		// cl(elem);
	
		elem.addEventListener('click' , function(e) {

			let selectedDays = elem.querySelectorAll('.pmu-selected'); 
			// cl(selectedDays);
		
	
			if (typeof (selectedDays) != undefined) {
				selectedDays[0].classList.add('_calendar__startDay')
			}
		})

	})
		

 }); 

