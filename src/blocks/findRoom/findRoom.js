/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });


 window.addEventListener('DOMContentLoaded', function () {
	let findRoomForm = document.querySelector('.findRoom__form');


	findRoomForm.addEventListener('submit' , function(e) {
		e.preventDefault();



		let dateDrops = findRoomForm.querySelectorAll('.findRoom__form input'),
			errorMessage = 'Заполните поля :',
			hasError = false;
			guestsQuantity = findRoomForm.querySelector('.textField__input'); 

		// console.log(dateDrops);

		dateDrops.forEach( (elem) => {
			if ( elem.value == '') {
				if (hasError) {
					errorMessage += ' ,';	
				}

				errorMessage += ` ${elem.parentNode.querySelector('label').textContent}`;
				hasError = true;
			}
		});

		if (hasError) {
			alert(errorMessage);
		}

		if (!hasError) {
			findRoomForm.parentNode.parentNode.style.display = 'none';
		}
	});

 }); 

