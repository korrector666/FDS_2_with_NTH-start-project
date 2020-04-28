/* global document window console */

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
			prev: '<div class="_calendar__prevBtn"></div>',
			next: '<div class="_calendar__nextBtn"></div>'
		});


		let _clearBtn = elem.querySelectorAll('.btn')[0],
			_submitBtn = elem.querySelectorAll('.btn')[1];
	

		_clearBtn.addEventListener('click', function () {
			pickmeup('.calendar__inner').clear();
		})

		_submitBtn.addEventListener('click', function () {
			let dates = pickmeup('.calendar__inner').get_date('d-m-Y');

			elem.setAttribute('data-startDate', dates[0]); 
			elem.setAttribute('data-endDate', dates[1]); 
			
			elem.classList.add('_calendar--hide');

			return pickmeup('.calendar__inner').get_date();
		})
		

	})
		

 }); 
