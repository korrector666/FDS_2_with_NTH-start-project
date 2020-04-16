/* global document window console */

// const pickmeup = require('../../js/utils/pickmeup.js');



const _months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

let findMonth = function (_date){
		return `${_date.slice(0, _date.indexOf('.'))}  ${_months[+_date.slice(_date.indexOf('.')+1, _date.indexOf('.', _date.indexOf('.')+1))-1]}`;
}

window.addEventListener('DOMContentLoaded', function () {

	let _dateStart = document.querySelectorAll('[data-startdate]');
		// arrows = document.querySelectorAll('._dateDrop__downArrow')

	_dateStart.forEach( (e) =>{
		if (e.matches('[data-enddate]')) {
			e.querySelector('input').value = `${findMonth(e.dataset.startdate).toLowerCase()} - ${findMonth(e.dataset.enddate).toLowerCase()}`;
		}

	});

});