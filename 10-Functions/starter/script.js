"use strict";

const bookings = [];

const createBooking = function (
  flightNumber,
  numberOfPassengers = 1,
  price = 199 * numberOfPassengers
) {
  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);

const flight = "LH234";
const ola = {
  name: "Ola Fredrik",
  passport: 45687489513,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 45687489513) {
    console.log("Checked in");
  } else {
    console.log("Error in passport");
  }
};

checkIn(flight, ola);
console.log(flight);
console.log(ola);
const newPassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(ola);
console.log(ola);
checkIn(flight, ola);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer("JavaScript is fun!", upperFirstWord);
transformer("JavaScript is fun!", oneWord);
const highFive = function () {
  console.log("✋");
};
document.body.addEventListener("click", highFive);
["Geralt", "Triss", "Yennefer"].forEach(highFive);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Ola");
greetHey("Fry");
greet("Hello")("Ola");
const greetArrow = (greet) => (name) => console.log(`${greet} ${name}`);
greetArrow("Hi")("Ola");

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

lufthansa.book(239, "Ola Kveli");
lufthansa.book(666, "John Ham");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Emyr Emeries");
console.log(eurowings);

book.call(lufthansa, 239, "Leo Bonhart");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Leo Bonhart");
console.log(swiss);

const flightData = [583, "Ciri Nova"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Yennefer Vengeberg");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Ola Kveli");
bookEW23("Triss Merigold");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //console.log(this);
  this.planes++;
  console.log(`Planes increased: ` + this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const runOnce = function () {
  console.log("Run once");
};
runOnce();

(function () {
  console.log("This will ACTUALLY run only once");
})();

(() => console.log("This will only run once as well"))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`Passengers updated! ${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
//console.dir(booker);
let letter;

const constant = function () {
  const variable = 23;
  letter = function () {
    console.log(variable * 2);
  };
};

const hotel = function () {
  const bravo = 777;
  letter = function () {
    console.log(bravo * 2);
  };
};

constant();
letter();
hotel();
letter();

const boardPassengers = function (number, waitTime) {
  const perGroup = number / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${number} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);
  console.log(`Will start boarding in ${waitTime} seconds`);
};

setTimeout(function () {
  console.log("TIMER");
}, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
