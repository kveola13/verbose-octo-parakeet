"use strict";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({ starter = 1, main = 0, time = "20:00", address }) {
    console.log(
      `Order: ${this.starterMenu[starter]} and ${this.mainMenu[main]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(`Ordered: ${ingredient1}, ${ingredient2}, ${ingredient3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours: {
    [days[3]]: {
      open: 12,
      close: 22,
    },
    [days[4]]: {
      open: 11,
      close: 23,
    },
    [days[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  main: 2,
  starter: 2,
});
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starter: 2,
});

const array = [2, 3, 4];
const a = array[0];
const b = array[1];
const c = array[2];

const [x, y, z] = array;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [q, , [w, e]] = nested;
console.log(q, w, e);

const [p = 1, o = 1, u = 1] = [8, 9];
console.log(p, o, u);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let v = 111;
let n = 999;
const obj = { v: 23, n: 7, c: 14 };
({ v, n } = obj);
console.log(v, n);

const {
  [days[4]]: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray);
const newArray = [1, 2, ...array];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join arrays
const menuStartersAndMains = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(menuStartersAndMains);

const string = "Ola";
const letters = [...string];
console.log(letters);
/* 
const ingredients = [
  prompt("Creating pasta...\nIngredient 1? "),
  prompt("\nIngredient 2? "),
  prompt("\nIngredient 3? "),
];
console.log(ingredients); */

//restaurant.orderPasta(...ingredients);

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe Maccihaveli",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

const thirdArray = [1, 2, ...[3, 4]];
console.log(thirdArray);

const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
};
const addEm = [23, 5, 7];
console.log(add(...addEm));

restaurant.orderPizza("Mushrooms", "Onions", "Olives", "Spinach");
restaurant.orderPizza("Mushrooms");

console.log(3 || "Ola");
console.log("" || "Ola");
console.log(true || 0);
console.log(undefined || null);

//Does not work if number of guests is 0
restaurant.numberOfGuests = 0;
const firstGuests = restaurant.numberOfGuests ? restaurant.numberOfGuests : 10;
console.log(firstGuests);

const secondGuests = restaurant.numberOfGuests || 10;
console.log(secondGuests);

//String is not evaluated, because short-circuting
console.log(0 && "Ola");
//The entire operation is run, and the string is printed
console.log(7 && "Ola");
console.log("Hello" && 23 && null && "Ola");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Spinach");
}
restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach");

const newNewMenu = [...restaurantCopy.starterMenu, ...restaurantCopy.mainMenu];

for (const item of newNewMenu) {
  console.log(item);
}

for (const [index, element] of newNewMenu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

if (restaurantCopy.openingHours && restaurantCopy.openingHours.monday) {
  console.log(restaurantCopy.openingHours.monday.open);
}

//Gives error
//console.log(restaurantCopy.openingHours.monday.open);
//does not give error
console.log(restaurantCopy.openingHours?.monday?.open);

for (const day of days) {
  const openingHour = restaurantCopy.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${openingHour}`);
}

console.log(restaurantCopy.order?.(0, 1) ?? "Method does not exist");
console.log(restaurantCopy.orderRisotto?.(0, 1) ?? "Method does not exist");

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

const tryNewOrders = ["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"];
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
ordersSet.add("Garlic bread");
ordersSet.delete("Garlic bread");
const ordersUnique = [...new Set(tryNewOrders)];
console.log(ordersUnique);
//Null coalecing operator
// Not yet introduced in ECMASCRIPT, but stage 3
//const correctGuests = restaurant.numberOfGuests ?? 10;
//console.log(correctGuests);

const restaurantMap = new Map();
restaurantMap.set("name", "Classico Italiano");
restaurantMap.set(1, "Firenze, Italy");
restaurantMap.set(2, "Lisbon, Portugal");

console.log(restaurantMap.set(3, "Paris, France"));
restaurantMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(restaurantMap.get("name"));
console.log(restaurantMap.get(true));
console.log(restaurantMap.get(1));
const time = 8;

restaurantMap.get(
  time > restaurantMap.get("open") && time < restaurantMap.get("close")
);

console.log(restaurantMap.has("categories"));
restaurantMap.delete(2);
restaurantMap.set([1, 2], "Test");
restaurantMap.set(document.querySelector("h1"), "Heading");
console.log(restaurantMap);
console.log(restaurantMap.size);
restaurantMap.clear();

console.log(restaurantMap.get([1, 2]));

const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 2],
  [true, "Correct answer"],
  [false, "Wrong answer"],
]);
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}
//const answer = Number(prompt("Your answer:\n"));
//console.log(question.get(answer === question.get("correct")));

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  return seat.slice(-1) === "B" || seat.slice(-1) === "E";
};

console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("23C"));
console.log(checkMiddleSeat("3E"));

console.log(airline.toLowerCase(), airline.toUpperCase());
const passenger = "oLa";
console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());
const email = "olakveli@gmail.com";
const loginEmail = "oLAkvElI@GmAiL.COm \n";
const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);
console.log(email === correctEmail);

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23";
console.log(announcement);
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airbus"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife" || baggage.includes("gun"))) {
    console.log("No fly list");
  } else {
    console.log("Fly list");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log("a+very+nice+string".split("+"));
console.log("Ola Fredrik Ansnes Kveli".split(" "));
const [firstName, , , lastName] = "Ola Fredrik Ansnes Kveli".split(" ");
console.log(firstName, lastName);
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  let nameArray = name.toLowerCase().split(" ");
  let newNameArray = [];
  for (const n of nameArray) {
    //newNameArray.push(n[0].toUpperCase() + n.slice(1));
    newNameArray.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newNameArray.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("ola fredrik ansnes kveli");

const newMessage = "Go to gate 23";
console.log(newMessage.padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(12631263671236));
console.log(maskCreditCard("672131239812"));

const message2 = "Bad weather, all departures delayed\n".repeat(5);
console.log(message2);

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"Plane ".repeat(n)}`);
};
planesInLine(5);
