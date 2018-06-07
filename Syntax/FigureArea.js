function getArea(width1, height1, width2, height2) {
    let minWidth = Math.min(width1, width2);
    let minHeight = Math.min(height1, height2);
    let area =(width1 * height1) + (width2 * height2) - (minWidth * minHeight);
    console.log(area);
}

getArea(13, 2, 5, 8);