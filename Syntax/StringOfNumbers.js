function getNumbersAsString(word) {
    let result = '';
    for (let i = 1; i <= parseInt(word); i++) {
        let obj = result[i];
        result += i;
    }
    
    console.log(result);
}

getNumbersAsString(11);