"use strict";
let firstName = "Ola";

function calculateAge(year) {
  const age = 2021 - year;
  function printAge() {
    const output = `You are ${age} born in ${year}`;
    console.log(output);
  }
  if (year >= 1981 && year <= 1996) {
    const string = `You are a millenial, ${firstName}`;
    console.log(string);
    function add(a, b) {
      return a + b;
    }
  }
  printAge();
  return age;
}

calculateAge(1992);

console.log(me);
/*
Does not work
console.log(job);
Does not work either
console.log(year);
*/

var me = "Ola";
let job = "Consultant";
const year = 1992;

console.log(addDeclarative(1, 2));
/*
Does not work 
console.log(addExpressive(1, 2));
Does not work either
console.log(addArrow(1, 2));
*/
function addDeclarative(a, b) {
  return a + b;
}

const addExpressive = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numberOfProducts) deleteShoppingCart();

var numberOfProducts = 10;

function deleteShoppingCart() {
  console.log("All gone!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);
const newCalculateAge = function (year) {
  console.log(2021 - year);
  console.log(this);
};
newCalculateAge(1992);

const calculateAgeArrow = (year) => {
  console.log(2021 - year);
  console.log(this);
};
calculateAgeArrow(1992);

const ola = {
  firstName: "Ola",
  year: 1992,
  calculateAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
  greet: () => console.log(`My name is ${this.firstName}`),
};
ola.calculateAge();
//This method returns "Undefined" because the this-keyword doesn't get it's own this-object
ola.greet();

let age = 30;
let oldAge = age;
age = 31;

const newOla = {
  name: "Ola",
  age: 28,
};
const friend = newOla;
friend.age = 30;

//Here we copy the heap, not the stack, so the reference value is changed
console.log(newOla);
console.log(friend);

//Shallow copy
const olaCopy = Object.assign({}, newOla);
