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

const properties = Object.keys(openingHours)
console.log(properties);
let openStr = `We are open on ${properties.length} days: ` 
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}
console.log(openStr);

const tryNewOrders = ["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"])

console.log(ordersSet);
ordersSet.add("Garlic bread");
ordersSet.delete("Garlic bread");
const ordersUnique = [...new Set(tryNewOrders)];
console.log(ordersUnique);
//Null coalecing operator
// Not yet introduced in ECMASCRIPT, but stage 3
//const correctGuests = restaurant.numberOfGuests ?? 10;
//console.log(correctGuests);
