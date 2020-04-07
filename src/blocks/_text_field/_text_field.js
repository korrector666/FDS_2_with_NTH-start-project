/* global document window console */

const ready = require('../../js/utils/documentReady.js');

ready(function() {
	// let arrows = document.querySelector('_text_field__downArrow');
	
	this.addEventListener('click', () =>{
		this.closest('._text_field__input').innerHTML = "test"
	});

	

	}
)


