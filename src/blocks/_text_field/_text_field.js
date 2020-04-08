/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const cl = function (obj) {
	console.log(obj);
}

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('._text_field__downArrow'),
		btnsMinus = document.querySelectorAll('[data-minus]'),
		btnsPlus = document.querySelectorAll('[data-plus]');
	
	// обработка значений при изменении кнопок
	


	//  обработка кнопки + 
	btnsPlus.forEach (function (elem) {
		let _prev = elem.previousElementSibling;
		elem.addEventListener('click', function() {
			let value = +_prev.textContent; 
			_prev.textContent = ++value;
			if (value >0) {
				_prev.previousElementSibling.classList.remove('_text_field__Btn--disabled')
			}

		})
	});
	//  обработка кнопки -
	btnsMinus.forEach (function (elem) {
		let _next = elem.nextElementSibling;
		elem.addEventListener('click', function() {
			let value = +_next.textContent; 
			if (value >0 ) {
				_next.textContent = +--value;
				if (value == 0) {
					this.classList.add('_text_field__Btn--disabled')}
			}
			

		})
	});
	
	// вывод/скрытие меню при нажаии на стрелку	
	arrows.forEach(function (elem) {
		let _parent = elem.parentElement,
			_nextSibling = elem.nextElementSibling;
		elem.addEventListener('click', function(e) {
			_parent.classList.toggle('_text_field--showDrop');
			_nextSibling.classList.toggle('_text_field__input--cutBorderBottom');
		});
	})

})


