function calculate(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number
    }
    let vat = sum * 0.2;
    console.log('sum = ' + sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + (sum + vat));
}

calculate([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);