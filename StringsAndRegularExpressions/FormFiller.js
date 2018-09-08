'use strict';
function userData(name, email, phone, arr) {
    let usernamePlaceholder = /<![A-Za-z]+!>/g;
    let emailPlaceHolder = /<@[A-Za-z]+@>/g;
    let phonePlaceholder = /<\+[A-Za-z]+\+>/g;
    let text = '';

    for (let element of arr) {
        text += element.replace(new RegExp(usernamePlaceholder, 'g'), name)
            .replace(new RegExp(emailPlaceHolder, 'g'), email)
            .replace(new RegExp(phonePlaceholder, 'g'), phone) + '\n';
    }

    console.log(text);
}

userData('Pesho', 'pesho@softuni.bg', '90-60-90', ['Hello, <!username!>!', 'Welcome to your Personal profile.', 'Here you can modify your profile freely.', 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)', 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)', 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);