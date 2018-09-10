'use strict';
function createBook(selector, titleName, authorName, isbn) {
    let bookGenerator = (function() {
        let id = 1;

       return function(selector, titleName, authorName, isbn) {
           let outerDiv = $(selector);
           let div = $(`<div id="book${id}" style="border: none"></div>`);
           $(`<p class="title">${titleName}</p>`).appendTo(div);
           $(`<p class="author">${authorName}</p>`).appendTo(div);
           $(`<p class="isbn">${isbn}</p>`).appendTo(div);
           let selectBtn =  $('<button>Select</button>');
           selectBtn.appendTo(div);
           let deselectBtn = $('<button>Deselect</button>');
           deselectBtn.appendTo(div);
           div.appendTo(outerDiv);
            id++;

            selectBtn.on('click', function() {
                div.css('border', '2px solid blue');
            });

            deselectBtn.on('click', function() {
                div.css('border', 'none');
            });         
       }
    }());

    bookGenerator(selector, titleName, authorName, isbn);
};
