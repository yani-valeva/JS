'use strict';
function getRectanglesOrdered(matrix) {
    let rectangles = [];

    for(let i = 0; i < matrix.length; i++) {
        let currentRect = {
            width: matrix[i][0],
            height:matrix[i][1],
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(nextRect) {
                let diff = nextRect.area() - this.area();
                return diff !== 0 ? diff : nextRect.width - this.width; 
            }
        }

        rectangles.push(currentRect);
    }

    return rectangles.sort((a, b) => a.compareTo(b));
}

// console.log(getRectanglesOrdered([[10,5],[5,12]]));
console.log(getRectanglesOrdered([[10,5], [3,20], [5,12]]));