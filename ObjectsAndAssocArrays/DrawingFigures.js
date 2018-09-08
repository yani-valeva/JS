'use strict';
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//draw rectangle

// ctx.fillRect(50, 50, 40, 80);
// ctx.fillRect(50, 90, 40, 80);
// ctx.fillRect(50, 140, 80, 40);
// ctx.fillRect(150, 50, 40, 80);
// ctx.fillRect(150, 90, 40, 80);
// ctx.fillRect(150, 140, 80, 40);
// ctx.fillRect(150, 50, 80, 40);
// ctx.fillRect(200, 50, 40, 80);
// ctx.fillRect(200, 90, 40, 90);

//draw chessboard

// for (let row = 0; row < 8; row += 1) {
//     for (let col = 0; col < 8; col += 1) {
//         if ((row + col) % 2 === 0) {
//             let x = 200 + col * 50;
//             let y = 200 + row * 50;
//             ctx.fillRect(x, y, 50, 50);
//         }
//     }
// }

//draw triangle

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(50, 1800);
// ctx.lineTo(1800, 50);
// ctx.lineTo(1800, 1900);
// ctx.closePath();
// ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 30;
// ctx.stroke();

//draw smile :)

// ctx.strokeStyle = 'red';
// ctx.lineWidth = 30;
// ctx.beginPath();
// ctx.arc(2500, 1000, 500, 0, Math.PI*2, true);
// ctx.moveTo(2900, 1000);
// ctx.arc(2300, 1000, 90, 0, Math.PI*2, true);
// ctx.moveTo(3300, 1000);
// ctx.arc(2700, 1000, 90, 0, Math.PI*2, true);
// ctx.fillStyle = 'yellow';
// ctx.fill();
// ctx.moveTo(2900, 2000);
// ctx.arc(2500, 1200, 190, 0, Math.PI, false);
// ctx.fillStyle = 'yellow';
// ctx.stroke();

//draw image

let image = new Image();
image.src = 'Resources/we.jpg';
image.addEventListener('load', () => ctx.drawImage(image, 3500, 0));

//draw button

// ctx.fillStyle = 'orange';
// ctx.fillRect(30, 30, 200, 40);
// ctx.fillStyle = 'red';
// ctx.font = "90px, monospace";
// ctx.textAlign = 'center';
// ctx.textBaseline = 'middle';
// ctx.fillText("I <3 you!", 130, 50);

//button Draw

// let myBtn = document.getElementById('drawBtn');
// myBtn.addEventListener('click', function () {
//     alert('Hello!');
// });