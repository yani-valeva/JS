function getNextDay(year, month, day) {
    let currentDay = new Date(year, month - 1, day);
    currentDay.setDate(currentDay.getDate()+1);
    currentDay = currentDay.getFullYear() + '-' + (currentDay.getMonth() + 1) + '-' + currentDay.getDate();
    console.log(currentDay);
}

getNextDay(2016, 9, 30);
