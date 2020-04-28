/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
window.addEventListener('DOMContentLoaded', function () {

	let checkItem = document.querySelectorAll('.expCheckBoxList__inner');
		
	checkItem.forEach(function (elem) {
		let _parent = elem.parentElement,
			arrowsUp =  _parent.querySelector('.expCheckBoxList__upArrow'),
			arrowsDown =  _parent.querySelector('.expCheckBoxList__downArrow');

		if (_parent.dataset.expanded == 'true') {
			arrowsDown.style.display='none';
			arrowsUp.style.display='block';
		} else if (_parent.dataset.expanded == 'false'){
			arrowsDown.style.display='block';
			arrowsUp.style.display='none';
		}

		elem.addEventListener('click', function(e) {

			if (e.target == arrowsDown) {
				_parent.classList.add('_expCheckBoxList--showDrop');
				_parent.dataset.expanded=true;
				arrowsDown.style.display='none';
				arrowsUp.style.display='block';
			}
			if (e.target == arrowsUp) {
				_parent.classList.remove('_expCheckBoxList--showDrop');
				arrowsDown.style.display='block';
				arrowsUp.style.display='none';
				_parent.dataset.expanded=false;
			}

		});
	})
	
})
