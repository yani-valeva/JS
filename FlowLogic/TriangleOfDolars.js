function getTriangle(number) {
    let line = '';
    for (let row = 0; row < number; row++) {
        line = '';
        for (let col = 0; col <= row; col++) {
            line += '$';
        }

        console.log(line);
    }
}

getTriangle(5);