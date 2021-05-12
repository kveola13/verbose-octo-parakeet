let bilbo = {
  weight: 78,
  height: 1.69,
};
let frodo = {
  weight: 95,
  height: 1.88,
};
let aragorn = {
  weight: 92,
  height: 1.95,
};
let legolas = {
  weight: 85,
  height: 1.76,
};

function calculateBodyMassIndex(weight, height) {
  return weight / height ** 2;
}

let bilboBmi = calculateBodyMassIndex(bilbo.weight, bilbo.height).toFixed(2);
let frodoBmi = calculateBodyMassIndex(frodo.weight, frodo.height).toFixed(2);
let aragornBmi = calculateBodyMassIndex(aragorn.weight, aragorn.height).toFixed(2);
let legolasBmi = calculateBodyMassIndex(legolas.weight, legolas.height).toFixed(2);

console.log(
  `Biblo bmi: ${bilboBmi}\nFrodo bmi: ${frodoBmi}\naragorn bmi: ${aragornBmi}\nLegolas bmi:${legolasBmi}`
);

let bilboHigherBmiThanFrodo = bilboBmi > frodoBmi;
console.log(
  `Bilbo has ${bilboHigherBmiThanFrodo ? "higher" : "lower"} bmi than Frodo`
);
