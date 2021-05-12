"use strict";
let hasDriversLicense = false
const passTest = true

if(passTest) hasDriversLicense = true

console.log(`Person ${hasDriversLicense ? "can" : "can't"} drive`);

/* const private = 534;
const interface = "Audio"; */

const calculateAge = test => 1337 - test

const personAge = (age, firstName) => {
    const birthYear = 2021 - age
    const retirement = 65 - age
    return `${firstName} is born in ${birthYear}, retires in ${retirement} years, which is ${birthYear + 65}`
}

console.log(personAge(28))