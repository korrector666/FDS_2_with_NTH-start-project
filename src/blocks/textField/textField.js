/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
const cl = function (obj) {
	console.log(obj);
}

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('.textField__downArrow'),
		arrowsOld = document.getElementsByClassName('_textField__downArrow'),
		dropInputs = document.querySelectorAll('.textField__overlay'),
		droppedInputs = document.querySelectorAll('.textField--showDrop'),
		maskFields = document.querySelectorAll('[data-date=maskDate]') ;

	let cleanLetters = function(text) {
		let tempStr = '' ,
			dateTemp;

		for (let char of text.toLowerCase()) {
			if (isNaN(+char) == false) {
				if (tempStr.length == 2 || tempStr.length == 5) {
					tempStr += '.'
				}
				if(tempStr.length >9) {
					break;
				}

				tempStr += char;
			} 
		}

		dateTemp = tempStr.split('.');
		if (+dateTemp[0] >32 ) {
			dateTemp[0] = '31';
		}
		if (+dateTemp[1] >13 ) {
			dateTemp[1] ='12';
		}

		cl(dateTemp);

		let isLeap = year => new Date(year, 1, 29).getDate() === 29;

		switch(dateTemp[1]) {
			case '02':  // if (x === 'value1')
				if (dateTemp[2] !== undefined) {
					if (dateTemp[2].length ==4) {
						if (isLeap(+dateTemp[2]) == false) {
							if (+dateTemp[0] >29 ) {
								dateTemp[0] = 28 ;
							}

						} else {
							if (+dateTemp[0] >30 ) {
								dateTemp[0] = 29 ;
							}
						}
					}
				}
				break;
			case '04':  // if (x === 'value2')
			case '06':  // if (x === 'value2')
			case '09':  // if (x === 'value2')
			case '11':  // if (x === 'value2')
				if (+dateTemp[0] >31 ) {
					dateTemp[0] = 30;
					cl('here');
				}
				cl(+dateTemp[0] >31);
				cl(+dateTemp[0]);
				break;
			default:
				break
		}
	
		tempStr = dateTemp.join('.');

		return tempStr;		

	}

	maskFields.forEach( (e) => {
		e.addEventListener('input', function(event) {
			let dateText =  e.value; 
			e.value =  cleanLetters(dateText);

		}) 
	})	

	// обработка значений при изменении кнопок
	
	function _summ(_values, summ, _input, valueNames) {
		_input.value=''; 
		
		_values.forEach(function (e,index) {
			if (valueNames !== undefined ) {
				if (+e.textContent !==0) {
					if (index == 0) {
						_input.value += `${+e.textContent} ${valueNames[index].textContent}, `
					} else if (index == 1) {
						_input.value += `${+e.textContent} ${valueNames[index].textContent}... `

					}
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
	// init state for drop downs


	droppedInputs.forEach(e => {
		let _input = e.querySelector('.textField__input');
		_input.classList.add('_textField__input--cutBorderBottom');
		e.classList.add('_textField--autoHeght')
	
	})
	

	// навашиваем обработчик на дропы
	dropInputs.forEach (function (elem) {
		let btnPlus = elem.querySelectorAll('[data-plus]'),
			btnMinus = elem.querySelectorAll('[data-minus]'),
			btnCancel = elem.querySelector('.btn--cancel'),
			btnSubmit = elem.querySelectorAll('.btn')[1],
			_input = elem.closest('.textField').querySelector('input'),
			_values = elem.closest('.textField').querySelectorAll('.textField__value'),
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
					(btnCancel.closest('.textField__overlayItems').classList.add('_textField__overlayItems--left'));
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
							value = +prev.textContent,
							summ = 0;

						_prev.textContent = ++value;
						if (value >0) {
							_prev.previousElementSibling.classList.remove('_textField__Btn--disabled')
						}

						summ = _summ(_values, 0, _input, _spans);

						if (summ > 0 && btnCancel ) {
							btnCancel.style.display = 'inline-block';
							((btnCancel.closest('.textField__overlayItems').classList.remove('_textField__overlayItems--left')));
						}

					}
				})

				btnMinus.forEach( (item)=>{
					if (_target == item) {
						let _next = item.nextElementSibling,
							value = +next.textContent,
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
							(btnCancel.closest('.textField__overlayItems').classList.add('_textField__overlayItems--left'));
						}		
					}
				})

				if (_target == btnCancel) {
					_values.forEach( (e) => {
						e.innerHTML="0";
						summ = _summ(_values, 0, _input, _spans);
					}) 
					btnCancel.style.display = 'none';
					(btnCancel.closest('.textField__overlayItems').classList.add('_textField__overlayItems--left'));

					btnMinus.forEach( (item)=>{
						item.classList.add('_textField__Btn--disabled')
					});
				}
				if (_target == btnSubmit) {
					
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
				_state= _parent.querySelector('.textField__info--state'),
				_nextSibling = elem.nextElementSibling;
			
				cl(_state.textContent);

			if(elem !== arrows[i] && _state.textContent !== 'expanded') {
				_parent.classList.remove('_textField--showDrop');
				_nextSibling.classList.remove('_textField__input--cutBorderBottom');
			}
		}
	}
	
	

})



