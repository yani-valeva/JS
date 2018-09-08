function solveQuadraticEquation(a, b, c) {
    let discriminant =  (b * b) - (4 * a * c);

    if(discriminant > 0){
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let max = Math.max(x1, x2);
        let min = Math.min(x1, x2);
        console.log(min, max);
    } else if (discriminant < 0){
        console.log('No');
    } else {
        let x1 = -b / (2 * a);
        console.log(x1);
    }
}

solveQuadraticEquation(5, 2, 1);