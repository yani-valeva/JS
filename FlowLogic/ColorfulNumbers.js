function getColorFulNumbers(number) {
    let output = '<ul>\n';
    let currentColor = '';
    for (let i = 1; i <= number; i++) {
        if(i % 2 === 0){
            currentColor = 'blue';
        } else {
            currentColor = 'green';
        }
        output += `  <li><span style=\'color:${currentColor}\'>${i}</span></li>\n`;
    }

    output += '</ul>';
    console.log(output);
}

getColorFulNumbers(10);