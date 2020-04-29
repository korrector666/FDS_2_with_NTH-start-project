/* global document window  */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
window.addEventListener('DOMContentLoaded', function () {

	let checkItem = document.querySelectorAll('.expCheckBoxList__inner');
		
	checkItem.forEach(function (elem) {
		let parentOfexpCheckBox = elem.parentElement,
			arrowsUp =  parentOfexpCheckBox.querySelector('.expCheckBoxList__upArrow'),
			arrowsDown =  parentOfexpCheckBox.querySelector('.expCheckBoxList__downArrow');

		if (parentOfexpCheckBox.dataset.expanded == 'true') {
			arrowsDown.style.display='none';
			arrowsUp.style.display='block';
		} else if (parentOfexpCheckBox.dataset.expanded == 'false'){
			arrowsDown.style.display='block';
			arrowsUp.style.display='none';
		}

		elem.addEventListener('click', function(e) {

			if (e.target == arrowsDown) {
				parentOfexpCheckBox.classList.add('expCheckBoxList--showDrop');
				parentOfexpCheckBox.dataset.expanded=true;
				arrowsDown.style.display='none';
				arrowsUp.style.display='block';
			}
			
			if (e.target == arrowsUp) {
				parentOfexpCheckBox.classList.remove('expCheckBoxList--showDrop');
				arrowsDown.style.display='block';
				arrowsUp.style.display='none';
				parentOfexpCheckBox.dataset.expanded=false;
			}

		});
	});
	
});
