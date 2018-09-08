function  getTag(array) {
    let result = '<img src="' + array[0] + '" alt="' + array[1] + '">';

    console.log(result);
}

getTag(['smiley.gif', 'Smiley Face']);