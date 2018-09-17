'use strict';
function getArticleGenerator(articles) {
    let innerDiv = $('#content');

    return function() {
        if (articles.length > 0) {
            let article = $('<article>');        
            let paragraph = $(`<p>${articles.shift()}</p>`);
            paragraph.appendTo(article); 
            article.appendTo(innerDiv);              
        }
    }
}
