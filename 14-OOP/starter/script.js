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
  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
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
  set latest(amount) {
    return this.movements.push(amount);
  },
};

console.log(account.latest);

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
};

const rick = Object.create(PersonProto);
rick.name = "Rick";
rick.birthYear = "1936";
rick.calcAge();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jerry = new Student("Jerry", 2020, "Computer Science");
console.log(jerry);
jerry.introduce();

class NewStudent {}

class NewStudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

class Account {
  locale = navigator.language;
  _movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Ola", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.pin);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
