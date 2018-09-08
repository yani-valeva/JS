'use strict';
function getScoreInHTML(str) {
    let arr = JSON.parse(str);
    let result = '<table>\n\t<tr><th>name</th><th>score</th></tr>\n';

    for (let obj of arr) {
        result += `    <tr><td>${escaping(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }

    result += '</table>';

    console.log(result);

    function escaping(el) {
         return el.replace(new RegExp('&', 'g'), '&amp;')
            .replace(new RegExp('<', 'g'), '&lt;')
            .replace(new RegExp('>', 'g'), '&gt;')
            .replace(new RegExp('"', 'g'), '&quot;')
             .replace(new RegExp('\'', 'g'), '&#39;');
    }
}

// getScoreInHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
getScoreInHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');