function getDayNumber(input) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(days.indexOf(input) > -1 ? days.indexOf(input) + 1 : 'error')
}

getDayNumber('day');