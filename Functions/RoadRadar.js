function roadRadar(array) {
    let speed = array[0];
    let area = array[1];

    switch (area){
        case 'motorway':
            getSpeedDiff(speed, 130);
            break;
        case 'interstate':
            getSpeedDiff(speed, 90);
            break;
        case 'city':
            getSpeedDiff(speed, 50);
            break;
        case 'residential':
            getSpeedDiff(speed, 20);
            break;
    }

    function getSpeedDiff(currentSpeed, speedLimit) {
        let speedDifference = currentSpeed - speedLimit;

        if (speedDifference > 40) {
            console.log('reckless driving');
        } else if (speedDifference > 20) {
            console.log('excessive speeding');
        } else if (speedDifference > 0) {
            console.log('speeding');
        }
    }
}

roadRadar([200, 'motorway']);