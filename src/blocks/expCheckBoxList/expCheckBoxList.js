/* global document window  */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
window.addEventListener('DOMContentLoaded', function () {

	let checkItem = document.querySelectorAll('.expCheckBoxList__inner');
		
	checkItem.forEach(function (elem) {
		let parent = elem.parentElement,
			arrowsUp =  parent.querySelector('.expCheckBoxList__upArrow'),
			arrowsDown =  parent.querySelector('.expCheckBoxList__downArrow');

		if (parent.dataset.expanded == 'true') {
			arrowsDown.style.display='none';
			arrowsUp.style.display='block';
		} else if (parent.dataset.expanded == 'false'){
			arrowsDown.style.display='block';
			arrowsUp.style.display='none';
		}

		elem.addEventListener('click', function(e) {

			if (e.target == arrowsDown) {
				parent.classList.add('expCheckBoxList--showDrop');
				parent.dataset.expanded=true;
				arrowsDown.style.display='none';
				arrowsUp.style.display='block';
			}
			if (e.target == arrowsUp) {
				parent.classList.remove('expCheckBoxList--showDrop');
				arrowsDown.style.display='block';
				arrowsUp.style.display='none';
				parent.dataset.expanded=false;
			}

		});
	})
	
})
