'use strict';
function getPatientsInfo(name, age, weight, height) {
    let bmi = Math.round(weight / (height/100 * height/100));
    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }
    

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    };

    if (bmi >= 30) {
        person['recommendation'] = 'admission required';
    }

    return person;
}

console.log(getPatientsInfo('Peter', 29, 75, 182));
// getPatientsInfo('Honey Boo Bo', 9, 57, 137);