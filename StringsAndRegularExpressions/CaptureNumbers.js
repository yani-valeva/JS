'use strict';
function captureNumbers(arr) {
    let regex = /\d+/g;
    console.log(arr.join(' ').match(regex).join(' '));
}

// captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
// captureNumbers(['123a456', '789b987', '654c321', '0']);
captureNumbers(['Let’s go11!!!11!', 'Okey!1!']);