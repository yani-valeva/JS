'use strict';
function attachGradientEvents() {
    let box = document.getElementById('gradient-box');
    box.addEventListener('mousemove', move);
    box.addEventListener('mouseout', left);
    let result = document.getElementById('result');
    let percentage;

    function move(event) {
        percentage = Math.trunc((event.offsetX / event.target.clientWidth) * 100);
        result.textContent = percentage.toString() + '%';
    }

    function left() {
        result.textContent = '';
    }
}
