function getConeAreaAndVolume(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;
    let s = Math.sqrt((radius * radius) + (height * height));
    let area = (Math.PI * radius * s) + (Math.PI * radius * radius);
    console.log('volume = ' + volume);
    console.log('area = ' + area);
}

getConeAreaAndVolume(3.3, 7.8);