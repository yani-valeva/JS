function validityChecker(array) {
    x1 = array[0];
    y1 = array[1];
    x2 = array[2];
    y2 = array[3];
    distance1 = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    distance2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    isValidD1 = Number.isInteger(distance1);
    isValidD2 = Number.isInteger(distance2);
    isValidD3 = Number.isInteger(distance3);

    console.log(isValidD1 === true ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(isValidD2 === true ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(isValidD3 === true ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker([2, 1, 1, 1]);
