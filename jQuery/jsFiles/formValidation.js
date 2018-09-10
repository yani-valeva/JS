'use strict';
function validate() {
    let usernameValidation = /^[A-Za-z0-9]{3,20}$/;
    let passValidation = /^[\w]{5,15}$/;
    let emailValidation = /\S+@\S*\.\S*/;
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let copmany = $('#company');
    let companyNum = $('#companyNumber');
    let submitBtn = $('#submit');
    let isMatched = true;
    let companyInformation = $('#companyInfo');
    let isChecked = false;
    let validDiv = $('#valid');

    submitBtn.on('click', function (event) {
        validateElement(usernameValidation, username);
        validateElement(emailValidation, email);
        validateElement(passValidation, password);
        validateElement(passValidation, confirmPass);

        if (password.val() !== confirmPass.val()) {
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
        }

        if (isChecked) {
            if (!(companyNum.val() >= 1000 && companyNum.val() <= 9999)) {
                isMatched = false;
                companyNum.css('border-color', 'red');
            }
        }

        if (isMatched) {
            validDiv.show();
        } else {
            validDiv.hide();
        }
        
        event.preventDefault();
    });

    copmany.on('change', function (e) {
        console.log(companyInformation);
        if ($(this).is(':checked')) {
            companyInformation.show();
            isChecked = true;
        } else {
            companyInformation.hide();
        }
    });

    function validateElement(regex, inputbox) {
        if (!regex.test(inputbox.val())) {
            isMatched = false;
            inputbox.css('border-color', 'red');
        }
    }
}
