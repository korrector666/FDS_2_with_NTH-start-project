/* global document window */

// const pickmeup = require('../../js/utils/pickmeup.js');



const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

let findMonth = function (date){
		return `${date.slice(0, date.indexOf('.'))}  ${months[+date.slice(date.indexOf('.')+1, date.indexOf('.', date.indexOf('.')+1))-1]}`;
};

window.addEventListener('DOMContentLoaded', function () {

	let dateStart = document.querySelectorAll('[data-startdate]');
		// arrows = document.querySelectorAll('.dateDrop__downArrow')

	dateStart.forEach( (e) => {
		if (e.matches('[data-enddate]')) {
			e.querySelector('input').value = `${findMonth(e.dataset.startdate).toLowerCase()} - ${findMonth(e.dataset.enddate).toLowerCase()}`;
		}

	});

});