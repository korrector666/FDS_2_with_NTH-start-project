/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const noUiSlider = require('nouislider');


// ready(function(){
//   
// });

window.addEventListener('DOMContentLoaded', function () {
	let slidersBar = document.querySelectorAll('._rangeSlider__inner'); 

	slidersBar.forEach( function (e) {
		noUiSlider.create(e, {
			range: {
				'min': 0,
				'max': 20000
			},
			start: [5000, 10000],
			connect: true,
			step: 1
		});

		e.noUiSlider.on('update', function (values) {
			let _value = e.parentElement.querySelector('._rangeSlider__info--state');
			_value.innerHTML = ` ${Math.round(values[0])}₽ - ${Math.round(values[1])}₽`;
			
		})

	});



});


