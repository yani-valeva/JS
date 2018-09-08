'use strict';
function getHTMLTable(str) {
    let arr = JSON.parse(str);
    let result = '<table>\n\t<tr>';
    let objKeys = Object.keys(arr[0]);

    for (let key of objKeys) {
        result += `<th>${key}</th>`;
    }

    result += '</tr>\n';

    for (let obj of arr) {
        result += '\t<tr>';
        for (let i in objKeys) {
            result += `<td>${escaping(obj[objKeys[i]] + '')}</td>`;
        }

        result += '</tr>\n';
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

getHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// getHTMLTable('[{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');