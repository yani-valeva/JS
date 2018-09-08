function multiplicationTable(number) {
    let output = '<table border="1">\n';

    output += '<tr>';
    output += `<th>x</th>`;
    for (let j = 1; j <= number; j++) {
        output += `<th>${j}</th>`;
    }
    output+= '</tr>\n';

    for (let i = 1; i <= number; i++) {
        output += `<tr><th>${i}</th>`;
        let helpNumber = 0;
        for (let j = 0; j < number; j++) {
            helpNumber += i;
            output += `<td>${helpNumber}</td>`
        }

        output += '</tr>\n';
    }

    output += '</table>';
    console.log(output);
}

multiplicationTable(3);