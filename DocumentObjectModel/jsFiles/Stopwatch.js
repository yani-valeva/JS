'use strict';
window.onload = function() { 
    stopwatch(); 
};

function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let timer = document.getElementById('time');
    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);
    let seconds,
        interval,
        totalMinutes,
        totalSeconds,
        time;

    function start() {
        timer.textContent = '00:00';
        startBtn.disabled = true;
        stopBtn.disabled  = false;
        seconds = 1;
        interval = setInterval(function () {
            time = '';
            totalMinutes = Math.floor(seconds / 60);
            totalSeconds = seconds % 60;
            totalMinutes < 10 ? time += '0' + totalMinutes + ':' : time += totalMinutes + ':';
            totalSeconds < 10 ? time += '0' + totalSeconds : time += totalSeconds;
            timer.textContent = time;
            seconds++;
        }, 1000);
    }

    function stop() {
        clearInterval(interval);
        stopBtn.disabled = true;
        startBtn.disabled = false;
    }
}
