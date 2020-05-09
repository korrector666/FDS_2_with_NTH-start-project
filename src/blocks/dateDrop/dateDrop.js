/* global document window */

// const pickmeup = require('../../js/utils/pickmeup.js');



const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

let findMonth = function (date){
		return `${date.slice(0, date.indexOf('.'))}  ${months[+date.slice(date.indexOf('.')+1, date.indexOf('.', date.indexOf('.')+1))-1]}`;
};

window.addEventListener('DOMContentLoaded', function () {
{
	let dateDropFiltered = document.querySelectorAll('.dateDrop--mid-size');
		// arrows = document.querySelectorAll('.dateDrop__downArrow')

		dateDropFiltered.forEach( (e) => {

			e.querySelector('input').value = `${findMonth(e.dataset.startdate).toLowerCase()} - ${findMonth(e.dataset.enddate).toLowerCase()}`;

	});
}

});