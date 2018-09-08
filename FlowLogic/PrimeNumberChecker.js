function checkPrimeNumber(number) {
    if (number < 2) {
        return false;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

checkPrimeNumber(81);