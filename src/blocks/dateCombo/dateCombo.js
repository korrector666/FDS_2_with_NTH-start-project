/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
 window.addEventListener('DOMContentLoaded', function () {
	{
		let dateCombos = document.querySelectorAll('.dateCombo__text') ;

			dateCombos.forEach( dateCombo => {
				let calendar = dateCombo.querySelector('.calendar'), 
					dropDowns = dateCombo.querySelectorAll('.dateDrop__downArrow'); 

					if (!calendar.classList.contains('calendar--hide')) {
						calendar.classList.add('calendar--hide');
					}

				dropDowns.forEach(elemet => {
					elemet.addEventListener('click', () => {
						calendar.classList.toggle('calendar--hide');
					});
				});

				dateCombo.addEventListener('click', event => {
					let calendatSubmitBtn = dateCombo.querySelectorAll('button')[1];

					if (event.target == calendatSubmitBtn ) {
						let startDate = calendar.getAttribute('data-startDate'),
							endDate = calendar.getAttribute('data-endDate'), 
							enterDropBox = dateCombo.querySelector('[data-startDate]').querySelector('input') ,
							outDropBox = dateCombo.querySelector('[data-endDate]').querySelector('input') ; 

						
						enterDropBox.value = startDate;
						outDropBox.value = endDate;

					}

				});
			});

	}
// pickmeup('.date').clear();
}); 

