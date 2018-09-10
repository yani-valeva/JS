'use strict';
function rectanle(arr) {
    let width = Number(arr[0]);
    let height = Number(arr[1]);
    let area = width * height;
    let perimeter = (2 * width) + (2 * height);

    console.log(`${area.toFixed(2)} ${perimeter.toFixed(2)}`);
}

rectanle([2, 4]);