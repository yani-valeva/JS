'use strict';
function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let daysBox = document.getElementById('days');
    let hoursBox = document.getElementById('hours');
    let minutesBox = document.getElementById('minutes');
    let secondsBox = document.getElementById('seconds');
    let days,
        hours,
        minutes,
        seconds;

    daysBtn.addEventListener('click', function () {
        days = Number(daysBox.value);
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        hoursBox.value = hours;
        minutesBox.value = minutes;
        secondsBox.value = seconds;
    });

    hoursBtn.addEventListener('click', function (event) {
        hours = Number(hoursBox.value);
        days = hours / 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        daysBox.value = days;
        minutesBox.value = minutes;
        secondsBox.value = seconds;
    });

    minutesBtn.addEventListener('click', function (event) {
        minutes = Number(minutesBox.value);
        seconds = minutes * 60;
        hours = minutes / 60;
        days = hours / 24;
        daysBox.value = days;
        hoursBox.value = hours;
        secondsBox.value = seconds;
    });

    secondsBtn.addEventListener('click', function (event) {
        seconds = Number(secondsBox.value);
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        daysBox.value = days;
        hoursBox.value = hours;
        minutesBox.value = minutes;
    });

    function clearText(event) {
        event.target.value = '';
    }

    daysBox.addEventListener('click', clearText);
    hoursBox.addEventListener('click', clearText);
    minutesBox.addEventListener('click', clearText);
    secondsBox.addEventListener('click', clearText);
}

