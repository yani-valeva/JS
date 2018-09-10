'use strict';
function create(sentences) {
    let mainDiv = document.getElementById('content');

    for (let i = 0; i < sentences.length; i++) {
        let currentDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = sentences[i];
        paragraph.style.display = 'none';
        currentDiv.appendChild(paragraph);
        mainDiv.appendChild(currentDiv);
    }

    let allDivs = document.getElementsByTagName('div');

    for (let i = 1; i < allDivs.length; i++) {
        allDivs[i].addEventListener('click', function () {
            allDivs[i].children[0].style.display = 'inline';
        });
    }
}
