"use strict";
class Car {
  speed;
  make;
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car {
  _charge;
  constructor(speed, make, charge) {
    super(speed, make);
    this._charge = charge;
  }
  chargeTo(charge) {
    this._charge = charge;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this._charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this._charge}`
    );
    return this;
  }
}

const testCar = new EV(120, "Rivian", 23);

console.log(testCar);
testCar
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeTo(50)
  .accelerate();
