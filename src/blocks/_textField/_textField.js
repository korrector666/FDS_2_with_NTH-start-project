/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
// const cl = function (obj) {
// 	console.log(obj);
// }

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('._textField__downArrow'),
		arrowsOld = document.getElementsByClassName('_textField__downArrow'),
		dropInputs = document.querySelectorAll('._textField__overlay');


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
			_input = elem.closest('._textField').querySelector('input'),
			_values = elem.closest('._textField').querySelectorAll('._textField__value'),
			_placeHolder = _input.placeholder, 
			_spans = elem.querySelectorAll('span'),
			summ = 0;
			
			// если нет пласхолдера убираем ссылку на спан			
			if (_placeHolder !== '' ) {
				_spans = undefined;

			} 
			//  вызываем суммирование значений для инициализации
			summ = _summ(_values, summ, _input, _spans) ;

			//  itit of original state
			//  проверяем наличие кнопки отмена
			if (btnCancel) {
				if (summ > 0) {
					btnCancel.style.display = 'inline-block';
				}
//  если кнопка отмены есть  и сумма 0 делаем выравнивание по левому краю
				if (summ == 0 && btnCancel) {
					btnCancel.style.display = 'none';
					(btnCancel.closest('._textField__overlayItems').classList.add('_textField__overlayItems--left'));
				}	
			}	
//  проверяем  значение  в поле, если 0 то блокируем кнопку -
			btnMinus.forEach( (item)=>{
					let _next = item.nextElementSibling,
						value = _next.textContent;
					
					if (value == 0) {
						item.classList.add('_textField__Btn--disabled')
						{_next.textContent = '0'}
					}
			});
			// следим за всеми дропами, если на них кликаю проверяем на какую кнопку
		elem.addEventListener('click', function (e) {
			let _target = e.target;
			
				btnPlus.forEach((item) =>{
					if (_target == item) {
						let _prev = item.previousElementSibling,
							value = +_prev.textContent,
							summ = 0;

						_prev.textContent = ++value;
						if (value >0) {
							_prev.previousElementSibling.classList.remove('_textField__Btn--disabled')
						}

						summ = _summ(_values, 0, _input, _spans);

						if (summ > 0 && btnCancel ) {
							btnCancel.style.display = 'inline-block';
							((btnCancel.closest('._textField__overlayItems').classList.remove('_textField__overlayItems--left')));
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
							item.classList.add('_textField__Btn--disabled')
						}

						summ = _summ(_values, 0, _input, _spans);

						if (summ == 0 && btnCancel ) {
							btnCancel.style.display = 'none';
							(btnCancel.closest('._textField__overlayItems').classList.add('_textField__overlayItems--left'));
						}		
					}
				})

				if (_target == btnCancel) {
					_values.forEach( (e) => {
						e.innerHTML="0";
						summ = _summ(_values, 0, _input, _spans);
					}) 
					btnCancel.style.display = 'none';
					(btnCancel.closest('._textField__overlayItems').classList.add('_textField__overlayItems--left'));

					btnMinus.forEach( (item)=>{
						item.classList.add('_textField__Btn--disabled')
					});
				}

				if (_target == btnSubmit) {
					// cl(this.parentElement)
					this.parentElement.classList.remove('_textField--showDrop');
					this.parentElement.querySelector('input').classList.remove('_textField__input--cutBorderBottom')
				}


		})
	})

	arrows.forEach(function (elem,i) {
		let _parent = elem.parentElement,
			_nextSibling = elem.nextElementSibling;
		// cl(_parent.classList);
		elem.addEventListener('click', function() {
			_clear(i)
			_parent.classList.toggle('_textField--showDrop');
			_nextSibling.classList.toggle('_textField__input--cutBorderBottom');
		});
	})

	//  скрытие всех открытых вкладок
	function _clear(i) {
		for (let elem of arrowsOld){
			const _parent = elem.parentElement,
				_nextSibling = elem.nextElementSibling;

			if(elem !== arrows[i]) {
				_parent.classList.remove('_textField--showDrop');
				_nextSibling.classList.remove('_textField__input--cutBorderBottom');
			}
		}
	}
	
	

})



