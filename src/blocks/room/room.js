/* global document window  */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

//  const cl = function (obj) {console.log(obj);} 

 window.addEventListener('DOMContentLoaded', function () {
	let roomSliders =document.querySelectorAll('.room__slider');

	roomSliders.forEach( elem => {
		let dots = elem.querySelector('.room__dots'),
			dot = dots.querySelectorAll('.room__dot');
		dot[0].classList.add('room__dot--active');

	});
 }); 

