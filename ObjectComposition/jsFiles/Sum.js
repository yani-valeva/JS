'use strict';
function getResult() {
    let number1, number2, result;

    function init(selector1, selector2, resultSelector) {
        number1 = $(selector1);
        number2 = $(selector2);
        result = $(resultSelector);
    }

    function add() {
        result.val(Number(number1.val()) + Number(number2.val()));
    }

    function subtract() {
        result.val(Number(number1.val()) - Number(number2.val()));
    }

    return { init, add, subtract };
}

let obj = getResult();

$('#sumButton').on('click', function () {
    obj['init']('#num1', '#num2', '#result');
    obj['add']();
});

$('#subtractButton').on('click', function () {
    obj['init']('#num1', '#num2', '#result');
    obj['subtract']();
});
