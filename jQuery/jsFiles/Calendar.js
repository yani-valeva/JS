'use strict';
function calendar(arr) {
    let outerDiv = $('#content');
    let table = $('<table>');
    let title = $('<caption>');
    title.appendTo(table);
    let tableBody = $('<tbody>');
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let daysName = $('<tr>');

    for (let i = 1; i <= daysOfWeek.length; i++) {
        if (i === daysOfWeek.length) {
            let firstRowData = $('<td>');
            firstRowData.html(daysOfWeek[0]);
            firstRowData.appendTo(daysName);
            firstRowData.css("font-weight", "Bold");
            break;
        }

        let firstRowData = $('<td>');
        firstRowData.html(daysOfWeek[i]);
        firstRowData.appendTo(daysName);
        firstRowData.css("font-weight", "Bold");
    }

    daysName.appendTo(tableBody);
    

    let currentDate = new Date(+arr[2], +arr[1] - 1, +arr[0]);
    title.text(`${months[+arr[1] - 1]} ${arr[2]}`);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let firstDayOfMonth = new Date(year, month, 1);
    let lastDayOfMonth = new Date(year, month + 1, 0);
    let counter = 1;
    let dayOfWeek = firstDayOfMonth.getDay();
    
    if(dayOfWeek === 0) {
        dayOfWeek = 7;
    }

    console.log(currentDate.getDate());
    for (let i = 0; i < 4; i++) {
        let week = $('<tr>');
        for (let j = 1; j <= 7; j++) {
            let dayData = $('<td>');

            if (counter > 1) {
                dayData.text(`${counter}`);
                addClass(counter, currentDate.getDate(), dayData);
                counter++;
            }

            if (i === 0 && j === dayOfWeek) {
                dayData.text(`${counter}`);
                addClass(counter, currentDate.getDate(), dayData);
                counter++;
            }

            dayData.appendTo(week);
        }

        week.appendTo(tableBody);     
    }

    while (counter <= lastDayOfMonth.getDate()) {
        let week = $('<tr>');
        for (let i = 1; i <= 7; i++) {
            let dayData = $('<td>');
            if (counter <= lastDayOfMonth.getDate()) {
                dayData.text(`${counter}`);
                addClass(counter, currentDate.getDate(), dayData);
            }   
            counter++;
            dayData.appendTo(week);
        }

        week.appendTo(tableBody);
    }
    
    tableBody.appendTo(table);
    table.appendTo(outerDiv);

    function addClass(count, today, col) {
        if (count === today) {
            col.addClass('today');
        }
    }
}
