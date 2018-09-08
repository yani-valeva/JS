function getTotalValue(array) {
    let sum = array[0];
    let interestRate = array[1] / 100;
    let period = 12 /array[2];
    let years = array[3];
    let totalValue = sum * Math.pow(1 + interestRate / period, period * years);
    console.log(totalValue.toFixed(2));
}

getTotalValue([100000, 5, 12, 25]);