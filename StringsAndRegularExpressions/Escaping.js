'use strict';
function escaping(arr) {
   let result = '<ul>\n';
    for (let el of arr) {
    el = el.replace(new RegExp('&', 'g'), '&amp;')
        .replace(new RegExp('<', 'g'), '&lt;')
        .replace(new RegExp('>', 'g'), '&gt;')
        .replace(new RegExp('"', 'g'), '&quot;');
    result += `  <li>${el}</li>\n`;
}

result += '</ul>';
console.log(result);
}

escaping(['<b>unescaped text</b>', 'normal text']);
// escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);