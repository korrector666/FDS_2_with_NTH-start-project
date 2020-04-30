/* global document window console */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

 //const cl = function (obj) {console.log(obj);} 

 window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.colorBox__inner').forEach( item => {
		
		let boxElement = (item.parentElement.querySelector('.colorBox__text')),
			backgroungColor = window.getComputedStyle(item, null).backgroundColor;
		backgroungColor = backgroungColor.slice(0, backgroungColor.length - 1).split(','); 	

		backgroungColor.forEach( (item, i, array) => {

			if (!isNaN(+item)  ) {
				array[i] = +item ; 
			} else if (!isNaN(+item.slice(4, item.length))) { 
				array[i] = +item.slice(4, item.length);
			} else { 
				array[i] = +item.slice(5, item.length);
			} 

		});

		boxElement.insertAdjacentHTML('beforeend', (rgb2hex(backgroungColor[0],backgroungColor[1],backgroungColor[2]).toUpperCase()));
		
	});

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	
	function rgb2hex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
 }); 

