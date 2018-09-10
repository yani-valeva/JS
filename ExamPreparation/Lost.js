'use strict';
function getMessage(keyword, text) {
    let boardRegex = new RegExp(`${keyword}(.*)${keyword}`, 'g');
    let northRegex = /(north|east)[^,0-9]*(\d{2}).*?,.*?(\d{6})/gi;
    let [matchMessage, message] = boardRegex.exec(text);
    text = text.split(matchMessage).join('');
    let north = '';
    let east = '';
    let matches;

    while (matches = northRegex.exec(text)) {
        if (matches[1].toLowerCase() === 'north') {
            north = '' + matches[2] + '.' + matches[3];
        } else {
            east = '' + matches[2] + '.' + matches[3];
        }
    }

    console.log(`${north} N`);
    console.log(`${east} E`);
    console.log(`Message: ${message}`);
}

// getMessage('<>', "o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b");
// getMessage('4ds', 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532');
getMessage('encrKey/', 'east eastnorth east29north 43,456789\nnorth one east 40,000000 encrKey/To live is the rarest thing in the world. Most people exist, that is allencrKey/');
// getMessage('keyword', ' keyword  let them eat cake!keywordNORTHEASTNORTH again42,north234567,dsae345East	23,\n432568');