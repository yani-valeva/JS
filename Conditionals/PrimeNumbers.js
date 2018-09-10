'use strict';
function getLastPrimeNum(num) {
    let arrPrimes = [];
    let isPrime;

    for (let i = 2; i <= num; i += 1) {
       isPrime = true;
       for (let j = 2; j <= Math.sqrt(i); j += 1) {
           if (i % j === 0) {
               isPrime = false;
               break;
           }  
       }

       if (isPrime) {
           arrPrimes.push(i);
       }   
    }

    if (arrPrimes.length > 0) {
        console.log(arrPrimes.slice(-1)[0]);
    } else {
        console.log("There isn't prime elements!")
    }
}

getLastPrimeNum(26);