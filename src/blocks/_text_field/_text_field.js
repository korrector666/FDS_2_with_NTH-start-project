/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const cl = function (obj) {
	console.log(obj);
}

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('._text_field__downArrow'),
		arrowsOld = document.getElementsByClassName('_text_field__downArrow'),
		dropInputs = document.querySelectorAll('._text_field__overlay');


	// обработка значений при изменении кнопок

	function _summ(_values, summ, _input, valueNames) {
		_input.value=''; 
		
		_values.forEach(function (e,index) {
			if (valueNames !== undefined ) {
				if (+e.textContent !==0) {
					_input.value += `${+e.textContent} ${valueNames[index].textContent} `
				}
			} else {
				summ += +e.textContent;
				if (summ !== 0) {
					_input.value = summ + ' гостей';
				}
				else {
					_input.value = '';
				}
			}
		});
		if (_input.value =='' && valueNames !== undefined) {
			_input.value = 'ничего не выбрано'
		}
		return summ;
	}

	// навашиваем обработчик на дропы
	dropInputs.forEach (function (elem) {
		let btnPlus = elem.querySelectorAll('[data-plus]'),
			btnMinus = elem.querySelectorAll('[data-minus]'),
			btnCancel = elem.querySelector('.btn--cancel'),
			btnSubmit = elem.querySelectorAll('.btn')[1],
			_input = elem.closest('._text_field').querySelector('input'),
			_values = elem.closest('._text_field').querySelectorAll('._text_field__value'),
			_placeHolder = _input.placeholder, 
			_spans = elem.querySelectorAll('span'),
			summ = 0;
			
			
			if (_placeHolder !== '' ) {
				_spans = undefined;

			} 
			
			cl(btnSubmit);
			summ = _summ(_values, summ, _input, _spans) ;

			//  itit of original state
			if (btnCancel) {
				if (summ > 0) {
					btnCancel.style.display = 'inline-block';
				}

				if (summ == 0 && btnCancel) {
					btnCancel.style.display = 'none';
					(btnCancel.closest('._text_field__overlayItems').classList.add('_text_field__overlayItems--left'));
				}	
			}	

			btnMinus.forEach( (item)=>{
					let _next = item.nextElementSibling,
						value = _next.textContent;
					
					if (value == 0) {
						item.classList.add('_text_field__Btn--disabled')
						{_next.textContent = '0'}
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

						summ = _summ(_values, 0, _input, _spans);

						if (summ > 0 && btnCancel ) {
							btnCancel.style.display = 'inline-block';
							((btnCancel.closest('._text_field__overlayItems').classList.remove('_text_field__overlayItems--left')));
						}

					}
				})

				btnMinus.forEach( (item)=>{
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

						summ = _summ(_values, 0, _input, _spans);

						if (summ == 0 && btnCancel ) {
							btnCancel.style.display = 'none';
							(btnCancel.closest('._text_field__overlayItems').classList.add('_text_field__overlayItems--left'));
						}		
					}
				})

				if (_target == btnCancel) {
					_values.forEach( (e) => {
						e.innerHTML="0";
						summ = _summ(_values, 0, _input, _spans);
					}) 
				}

				if (_target == btnSubmit) {
					cl(this.parentElement)
					this.parentElement.classList.remove('_text_field--showDrop');
					this.parentElement.querySelector('input').classList.remove('_text_field__input--cutBorderBottom')
				}


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



