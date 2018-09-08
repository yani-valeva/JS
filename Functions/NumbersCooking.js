function numbersCooking(array) {
    let startingPoint = parseInt(array[0]);

    for (let i = 1; i < array.length; i++) {
        switch (array[i]) {
            case 'chop':
                startingPoint /= 2;
                console.log(startingPoint);
                break;
            case 'dice':
                startingPoint = Math.sqrt(startingPoint);
                console.log(startingPoint);
                break;
            case 'spice':
                startingPoint++;
                console.log(startingPoint);
                break;
            case 'bake':
                startingPoint *= 3;
                console.log(startingPoint);
                break;
            case 'fillet':
                startingPoint -= startingPoint * 0.2;
                console.log(startingPoint);
                break;
        }
    }
}

numbersCooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);