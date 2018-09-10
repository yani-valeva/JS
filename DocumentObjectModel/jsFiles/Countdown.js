'use strict';
window.onload = function() {
    countdown(600);
};

function countdown(totalSeconds) {
    let sec = totalSeconds;
    let rect = document.getElementById('time');
    setInterval(decrement, 1000);
    let minutes = Math.floor(sec / 60);
    let seconds =  sec % 60;
    rect.value = '' + minutes + ':';
    rect.value += seconds <= 9 ? '0' + seconds : seconds;

    function decrement() {
        sec--;
        minutes = Math.floor(sec / 60);
        seconds =  sec % 60;
        rect.value = '' + minutes + ':';
        rect.value += seconds <= 9 ? '0' + seconds : seconds;

    }
}
