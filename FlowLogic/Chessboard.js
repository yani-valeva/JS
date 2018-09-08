function Chessboard(number) {
    let output = '<div class="chessboard">\n';
    let color = 'black';
    for (let i = 1; i <= number; i++) {
        output += '  <div>\n';
        color = (i % 2 === 0) ? 'white' : 'black';
        for (let j = 1; j <= number; j++) {
            output += `    <span class="${color}"></span>\n`;
            color = (color === 'black') ? 'white' : 'black';
        }
        output += '  </div>\n';
    }
    output += '</div>';
    console.log(output);
}

Chessboard(2);