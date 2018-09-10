'use strict';
function getTrapezoidArea(arr) {
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    let h = Number(arr[2]);
    let area = ((a + b) * h) / 2;
    console.log(area.toFixed(7));
}

getTrapezoidArea(['15', '16', '9']);