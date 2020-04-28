/* global document window  */


const noUiSlider = require('nouislider');

window.addEventListener('DOMContentLoaded', function () {
	let slidersBar = document.querySelectorAll('.rangeSlider__inner'); 

	slidersBar.forEach( function (e) {
		noUiSlider.create(e, {
			range: {
				'min': 0,
				'max': 15900
			},
			start: [5000, 10000],
			connect: true,
			step: 1
		});

		e.noUiSlider.on('update', function (values) {
			let value = e.parentElement.querySelector('.rangeSlider__info--state'),
				formatter = new Intl.NumberFormat("ru", {
					style: "currency",
					currency: "RUB",
					minimumFractionDigits:0

				});

			value.innerHTML = ` ${formatter.format(Math.round(values[0]))} - ${formatter.format(Math.round(values[1]))}`;
			
		});

	});

});


