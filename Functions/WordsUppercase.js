function uppercaseWords(input) {
    console.log(input.split(/\W+/).filter(w => w !== '').join(', ').toUpperCase());
}

uppercaseWords('Hi, how are you?');