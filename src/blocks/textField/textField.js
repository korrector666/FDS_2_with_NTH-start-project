/* global document window console */

// const ready = require('../../js/utils/documentReady.js');
// const cl = function (obj) {
// 	console.log(obj);
// };

window.addEventListener('DOMContentLoaded', function () {
	
	let arrows = document.querySelectorAll('.textField__downArrow'),
		arrowsOld = document.getElementsByClassName('textField__downArrow'),
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
				}
				break;
			default:
				break;
		}
	
		tempStr = dateTemp.join('.');

		return tempStr;		

	};

	maskFields.forEach( (e) => {
		e.addEventListener('input', function() {
			let dateText =  e.value; 
			e.value =  cleanLetters(dateText);

		}); 
	});	

	// обработка значений при изменении кнопок
	
	function summOfInputs(values, summ, input, valueNames) {
		let localSumm = summ ,
			babyNumber = ' младенцев';

		input.value=''; 
		
		values.forEach(function (e,index) {
			let inputValue = +e.textContent;

			if (valueNames !== undefined ) {
				if (inputValue !==0) {
					if (index == 0) {
						input.value += `${inputValue} ${valueNames[index].textContent}, `;
					} else if (index == 1) {
						input.value += `${inputValue} ${valueNames[index].textContent}... `;
					}
				}
			} else {
				if (index == 2 && inputValue > 0) {
					if (inputValue == 1) {
						babyNumber = ' младенец'
					} else if (inputValue >=2 && inputValue <= 4) {
						babyNumber = ' младенца';
					} 
					input.value +=` ${inputValue} ${babyNumber}`;
				} else {
					localSumm += inputValue;

					if (localSumm !== 0) {
						let guest = ' гостя';
	
						if (+localSumm == 1) {
							guest = ' гость'; 
						} else if (+localSumm >= 5) {
							guest = ' гостей';
						} 
	
						input.value = localSumm + guest;
					}
					else {
						input.value = '';
					}
	
				}
			}
		});

		if (input.value =='' && valueNames !== undefined) {
			input.value = 'ничего не выбрано';
		}
		return localSumm;
	}
	// init state for drop downs


	droppedInputs.forEach(e => {
		let input = e.querySelector('.textField__input');

		input.classList.add('textField__input--cutBorderBottom');
		e.classList.add('textField--autoHeght');
	
	});
	

	// навашиваем обработчик на дропы
	dropInputs.forEach (function (elem) {
		let btnPlus = elem.querySelectorAll('[data-plus]'),
			btnMinus = elem.querySelectorAll('[data-minus]'),
			btnCancel = elem.querySelector('.btn--cancel'),
			btnSubmit = elem.querySelectorAll('.btn')[1],
			input = elem.closest('.textField').querySelector('input'),
			values = elem.closest('.textField').querySelectorAll('.textField__value'),
			placeHolder = input.placeholder, 
			spans = elem.querySelectorAll('span'),
			summ = 0;
			// если нет пласхолдера убираем ссылку на спан			
			if (placeHolder !== '' ) {
				spans = undefined;
			} 
			//  вызываем суммирование значений для инициализации
			summ = summOfInputs(values, summ, input, spans) ;

//  itit of original state
//  проверяем наличие кнопки отмена
			if (btnCancel) {
				if (summ > 0) {
					btnCancel.style.display = 'inline-block';
				}
//  если кнопка отмены есть  и сумма 0 делаем выравнивание по левому краю
				if (summ == 0 && btnCancel) {
					btnCancel.style.display = 'none';
					(btnCancel.closest('.textField__overlayItems').classList.add('textField__overlayItems--left'));
				}	
			}	
//  проверяем  значение  в поле, если 0 то блокируем кнопку -
			btnMinus.forEach( (item) => {
					let next = item.nextElementSibling,
						value = next.textContent;
					
					if (value == 0) {
						item.classList.add('textField__Btn--disabled');
						next.textContent = '0';
					}
			});
// следим за всеми дропами, если на них кликаю проверяем на какую кнопку
		elem.addEventListener('click', function (e) {
			let target = e.target;

				e.preventDefault();

				btnPlus.forEach((item) => {
					if (target == item) {
						let prev = item.previousElementSibling,
							value = +prev.textContent,
							summ = 0;

						prev.textContent = ++value;
						if (value >0) {
							prev.previousElementSibling.classList.remove('textField__Btn--disabled');
						}

						summ = summOfInputs(values, 0, input, spans);

						if (summ > 0 && btnCancel ) {
							btnCancel.style.display = 'inline-block';
							((btnCancel.closest('.textField__overlayItems').classList.remove('textField__overlayItems--left')));
						}

					}
				});

				btnMinus.forEach( (item) => {
					if (target == item) {
						let next = item.nextElementSibling,
							value = +next.textContent,
							summ = summOfInputs(values, 0, input);
		
						if (value >0 ) {
							next.textContent = +--value;
						}

						if (value == 0) {
							item.classList.add('textField__Btn--disabled');
						}

						summ = summOfInputs(values, 0, input, spans);

						if (summ == 0 && btnCancel ) {
							btnCancel.style.display = 'none';
							(btnCancel.closest('.textField__overlayItems').classList.add('textField__overlayItems--left'));
						}		
					}
				});

				if (target == btnCancel) {
					values.forEach( (e) => {
						e.innerHTML="0";
						summ = summOfInputs(values, 0, input, spans);
					}); 

					btnCancel.style.display = 'none';
					(btnCancel.closest('.textField__overlayItems').classList.add('textField__overlayItems--left'));

					btnMinus.forEach( (item) => {
						item.classList.add('textField__Btn--disabled');
					});
				}

				if (target == btnSubmit) {
					this.parentElement.classList.remove('textField--showDrop');
					this.parentElement.querySelector('input').classList.remove('textField__input--cutBorderBottom');

				}


		});
	});

	arrows.forEach(function (elem,i) {
		let parent = elem.parentElement,
			nextSibling = elem.nextElementSibling;

		elem.addEventListener('click', function() {
			closeOpenedDrops(i);
			parent.classList.toggle('textField--showDrop');
			nextSibling.classList.toggle('textField__input--cutBorderBottom');
		});
	});

//  скрытие всех открытых вкладок
	function closeOpenedDrops(i) {
		for (let elem of arrowsOld){
			let parent = elem.parentElement,
				nextSibling = elem.nextElementSibling;

			if (elem !== arrows[i] && !parent.classList.contains('textField--dontHide') ) {
				parent.classList.remove('textField--showDrop');
				nextSibling.classList.remove('textField__input--cutBorderBottom');
			}
		}
	}
	
	

});



