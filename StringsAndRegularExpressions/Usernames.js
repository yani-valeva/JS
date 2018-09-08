'use strict';
function getUsernames(arr) {
    let username = '';
    let usernames = [];

    for (let element of arr) {
        let info = element.split('@');
        let domain = info[1];
        username = info[0] + '.' + domain.charAt(0);
        let index = domain.indexOf('.');

        while (true) {

            if (index < 0) {
                break;
            }

            username += domain.charAt(index + 1);
            index = domain.indexOf('.', index + 1);
        }

        usernames.push(username);
    }

    console.log(usernames.join(', '));
}

getUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);