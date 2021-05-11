let bilbo = {
  weight: 78,
  height: 1.69,
};
let frodo = {
  weight: 95,
  height: 1.88,
};

function calculateBodyMassIndex(weight, height) {
  return weight / (height * height);
}

let bilboBmi = calculateBodyMassIndex(bilbo.weight, bilbo.height).toFixed(2);
let frodoBmi = calculateBodyMassIndex(frodo.weight, frodo.height).toFixed(2);
console.log(`Biblo bmi: ${bilboBmi}\nFrodo bmi: ${frodoBmi}`);

let bilboHigherBmiThanFrodo = bilboBmi > frodoBmi;
console.log(
  `Bilbo has ${bilboHigherBmiThanFrodo ? "higher" : "lower"} bmi than Frodo`
);
