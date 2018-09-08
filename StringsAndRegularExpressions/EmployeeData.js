'use strict';
function employeeData(arr) {
    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9-]+([ A-Za-z0-9-]+)*)$/;
    let data;

    for (let element of arr) {
        data = regex.exec(element);

        if(data) {
            console.log(`Name: ${data[1]}\nPosition: ${data[3]}\nSalary: ${data[2]}`);
        }
    }
}

// employeeData(['Isacc - 1000 - CEO', 'Peter - 500 - Employee', 'Peter - 500 - Employee']);
employeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);
