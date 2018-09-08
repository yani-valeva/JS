function getDistance(array) {
    let firstSpeed = array[0];
    let  secondSpeed = array[1];
    let time = array[2];
    let firstDistance = firstSpeed * (time/3600);
    let secondDistance = secondSpeed * (time/3600);
    let distance = Math.abs(firstDistance - secondDistance);
    console.log(distance * 1000);
}

getDistance([11, 10, 120]);