/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const cl = function (obj) {
	console.log(obj);
}

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('._text_field__downArrow'),
		arrowsOld = document.getElementsByClassName('_text_field__downArrow'),
		dropInputs = document.querySelectorAll('._text_field__overlay');


	// навашиваем обработчик на дропы
	dropInputs.forEach (function (elem) {
		let btnPlus = elem.querySelectorAll('[data-plus]'),
			btnMinus = elem.querySelectorAll('[data-minus]'),
			btnCancel = elem.querySelector('.btn--cancel'),
			_input = elem.closest('._text_field').querySelector('input'),
			_values = elem.closest('._text_field').querySelectorAll('._text_field__value'),
			summ = _summ(_values, 0, _input);

			//  itit of original state
			if (summ > 0) {
				btnCancel.style.display = 'inline-block';
			}

			if (summ == 0 && btnCancel) {
				btnCancel.style.display = 'none';
				(btnCancel.closest('._text_field__overlayItems').classList.add('_text_field__overlayItems--left'));
			}	

			btnMinus.forEach( (item)=>{
					let _next = item.nextElementSibling,
						value = +_next.textContent;

					if (value == 0) {
						item.classList.add('_text_field__Btn--disabled')
					}
			});
			// следим за всеми дропами, если на них кликаю проверяем на какую кнопку
		elem.addEventListener('click', function (e) {
			let _target = e.target;
			
				btnPlus.forEach((item,i) =>{
					if (_target == item) {
						let _prev = item.previousElementSibling,
							value = +_prev.textContent,
							summ = 0;

						_prev.textContent = ++value;
						if (value >0) {
							_prev.previousElementSibling.classList.remove('_text_field__Btn--disabled')
						}

						summ = _summ(_values, 0, _input);
						if (summ > 0) {
							btnCancel.style.display = 'inline-block';
							((btnCancel.closest('._text_field__overlayItems').classList.remove('_text_field__overlayItems--left')));
						}

					}
				})

				btnMinus.forEach( (item,i)=>{
					if (_target == item) {
						let _next = item.nextElementSibling,
							value = +_next.textContent,
							summ = _summ(_values, 0, _input);
		
						if (value >0 ) {
							_next.textContent = +--value;
						}

						if (value == 0) {
							item.classList.add('_text_field__Btn--disabled')
						}

						summ = _summ(_values, 0, _input);

						if (summ == 0) {
							btnCancel.style.display = 'none';
						}		
			
					}
				})


		})
	})

	arrows.forEach(function (elem,i) {
		let _parent = elem.parentElement,
			_nextSibling = elem.nextElementSibling;
		// cl(_parent.classList);
		elem.addEventListener('click', function() {
			_clear(i)
			_parent.classList.toggle('_text_field--showDrop');
			_nextSibling.classList.toggle('_text_field__input--cutBorderBottom');
		});
	})
	//  скрытие всех открытых вкладок
	function _clear(i) {
		for (let elem of arrowsOld){
			const _parent = elem.parentElement,
				_nextSibling = elem.nextElementSibling;

			if(elem !== arrows[i]) {
				_parent.classList.remove('_text_field--showDrop');
				_nextSibling.classList.remove('_text_field__input--cutBorderBottom');
			}
		}
	}
	
	
})

	// обработка значений при изменении кнопок

function _summ(_values, summ, _input) {
	_values.forEach(function (e) {
		summ += +e.textContent;
	});
	if (summ !== 0) {
		_input.value = summ + ' гостей';
	}
	else {
		_input.value = '';
	}
	return summ;
}

