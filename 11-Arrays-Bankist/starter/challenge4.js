"use strict";

const data = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["Michael"],
  },
];

data.map((dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(data);
const dogEatsTooLittle = (dog) => dog.curFood < dog.recommendedFood;
const ownersEatTooMuch = data
  .filter((dog) => !dogEatsTooLittle(dog))
  .flatMap((dog) => dog.owners)
  .join(" and ");
const sarahDog = data.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog eats ${dogEatsTooLittle(sarahDog) ? "too little" : "too much"}`
);

data.forEach((data) => {
  console.log(
    `${data.owners.join(" and ")}'s dog eats ${
      dogEatsTooLittle(data) ? "too little" : "too much"
    }`
  );
});

console.log(ownersEatTooMuch);

console.log(data.some((dog) => dog.curFood === dog.recommendedFood));

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(data.some(checkEatingOkay));

console.log(data.filter(checkEatingOkay));

const sortedData = data
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedData);
