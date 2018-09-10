'use strict';
function wikiParser(selector) {
    let paragraph = $(selector);
    let text = paragraph.html();
    let header3 = /(===)(.*?)(===)/g;
    let header2 = /(==)(.*?)(==)/g;
    let header1 = /(=)(.*?)(=)/g;
    let bold = /(''')(.*?)(''')/g;
    let italic = /('')(.*?)('')/g;
    let linkPipe = /(\[\[)([^\[\]]+)\|([^\[\]]+)(\]\])/g;
    let link = /(\[\[)([^\|\[\]]+)(\]\])/g;

    text = text.replace(header3, (match, gr1, gr2, gr3) => `<h3>${gr2}</h3>`)
    .replace(header2, (match, gr1, gr2, gr3) => `<h2>${gr2}</h2>`)
    .replace(header1, (match, gr1, gr2, gr3) => `<h1>${gr2}</h1>`)
    .replace(bold, (match, gr1, gr2, gr3) => `<b>${gr2}</b>`)
    .replace(italic, (match, gr1, gr2, gr3) => `<i>${gr2}</i>`)
    .replace(linkPipe, (match, gr1, gr2, gr3, gr4) => `<a href="/wiki/${gr2}">${gr3}</a>`)
    .replace(link, (match, gr1, gr2, gr3) => `<a href="/wiki/${gr2}">${gr2}</a>`);
    paragraph.html(text);
}
