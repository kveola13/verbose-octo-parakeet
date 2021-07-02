"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ola = new Person("Ola", 1992);
console.log(ola);
const jens = new Person("Jens", 2017);
const john = new Person("John", 1920);
console.log(jens, john);

console.log(ola instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

ola.calcAge();
