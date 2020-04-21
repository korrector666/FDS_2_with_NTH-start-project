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
		date: ['19.08.2019','23.08.2019'],
		prev: '<div class="_calendar__prevBtn"></div>',
		next: '<div class="_calendar__nextBtn"></div>'
	});

	let calendars = document.querySelectorAll('._calendar');
	
	// cl(calendars);
	calendars.forEach( function(elem) {
		let _clearBtn = elem.querySelectorAll('.btn')[0],
			_submitBtn = elem.querySelectorAll('.btn')[1];
	

		_clearBtn.addEventListener('click', function () {
			pickmeup('._calendar__inner').clear();
		})

		_submitBtn.addEventListener('click', function () {
			let dates = pickmeup('._calendar__inner').get_date('d-m-Y');
			elem.setAttribute('data-startDate', dates[0]); 
			elem.setAttribute('data-endDate', dates[1]); 
			return pickmeup('._calendar__inner').get_date();
		})
		

	})
		

 }); 

