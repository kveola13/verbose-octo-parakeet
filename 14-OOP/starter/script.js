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

const PersonCl = class {};

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const morty = new PersonClass("Morty", 1997);
morty.calcAge();
morty.greet();

const account = {
  owner: "Ola",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
};

console.log(account.latest);
