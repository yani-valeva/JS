function getDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    console.log(distance);
}

getDistance(2.34, 15.66, -13.55, -2.9985);