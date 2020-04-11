/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
window.addEventListener('DOMContentLoaded', function () {

	let arrows = document.querySelectorAll('._expCheckBoxList__downArrow');
		
	arrows.forEach(function (elem) {
		let _parent = elem.parentElement.parentElement;
		elem.addEventListener('click', function() {
			_parent.classList.toggle('_expCheckBoxList--showDrop');
		});
	})
	
})
