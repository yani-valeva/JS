'use strict';
function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let time = 0;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let temporary = 0;

    startBtn.on('click', start);
    stopBtn.on('click', function () {
        clearInterval(time);
        startBtn.on('click', start);
    });

    function step() {
        seconds.text(Number(seconds.text()) + 1);
        if (seconds.text() > 59) {
            temporary = seconds.text();
            seconds.text(('0' + (seconds.text() % 60)).slice(-2));
            minutes.text(('0' + ((temporary / 60) + Number(minutes.text()))).slice(-2));
        }

        if (Number(minutes.text()) > 59) {
            temporary = Number(minutes.text());
            minutes.text(('0' + (temporary % 60)).slice(-2));
            hours.text(('0' + ((temporary / 60) + Number(hours.text()))).slice(-2));
        }
        
        seconds.text(('0' + seconds.text()).slice(-2));
    }

    function start() {
        time = setInterval(step, 1000);
        startBtn.off('click');
    }
}
