const country = "Norway";
const continent = "Europe";
let population = 5.4;
const isIsland = false;
let language = "Norwegian";
let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
let numberOfNeighbors = 3;
let countryMeetsCriteria =
  language.toLowerCase() === "english" && population < 50 && !isIsland;

console.log(
  `Is island? ${isIsland} country: ${country}, continent: ${continent}, population: ${population} million\nBasic operators:\n Halved population: ${
    population / 2
  } million, population plus one: ${
    population + 1
  }\n Does ${country} have a higher population than Finland? ${
    population > 6
  }\n Does ${country} have a smaller population than the average country, which is 33 million people? ${
    population < 33
  }\n ${country}'s population is ${33 - population} below average.\n ${
    "9" - "5"
  }\n ${"19" - "13" + "17"}\n ${"19" - "13" + 17}\n ${"123" < 57}\n ${
    5 + 6 + "4" + 9 - 4 - 2
  }`
);
if (numberOfNeighbors == 1) {
  console.log("Only one border.");
} else if (numberOfNeighbors > 1) {
  console.log("More than one border.");
} else {
  console.log("No borders");
}
if (countryMeetsCriteria) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet the criteria...`);
}
switch (language.toLowerCase()) {
  case "chinese":
    console.log("Number 1 language in the world");
    break;
  case "mandarin":
    console.log("Number 1 language in the world");
    break;
  case "spanish":
    console.log("Number 2 language in the world");
    break;
  case "english":
    console.log("Number 3 language in the world");
    break;
  case "hindi":
    console.log("Number 4 language in the world");
    break;
  case "arabic":
    console.log("Number 5 language in the world");
    break;
  default:
    console.log("Language is not in the top 5");
    break;
}
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
