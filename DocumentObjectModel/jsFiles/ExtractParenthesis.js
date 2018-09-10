'use strict';
function extractText() {
    let element = document.getElementById('content');
    let text = element.textContent;
    let regex = /\((.+?)\)/g;
    let matches,
        result = [];

    while (matches = regex.exec(text)) {
       result.push(matches[1]);
   }

   return result.join('; ')
}
