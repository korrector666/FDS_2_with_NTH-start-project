/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

 const cl = function (obj) {console.log(obj);} 

 window.addEventListener('DOMContentLoaded', function () {
	let roomSliders =document.querySelectorAll('._room__slider');

	roomSliders.forEach( elem => {
		let dots = elem.querySelector('._room__dots'),
			dot = dots.querySelectorAll('._room__dot');
		dot[0].classList.add('_room__dot--active');

	})
	
	
		   
 }); 

