'use strict';
function getEmployeeInfo(arr) {
    let result = '<table>\n';

    for (let element of arr) {
        let obj = JSON.parse(element);

        result += `\t<tr>\n\t\t<td>${escaping(obj.name)}</td>\n\t\t<td>${escaping(obj.position)}</td>\n\t\t<td>${escaping(obj.salary.toString())}</td>\n\t<tr>\n`;
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

getEmployeeInfo([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
    `{"name":"Teo","position":"Lecturer","salary":1000}`,
    `{"name":"Georgi","position":"Lecturer","salary":1000}`
]);