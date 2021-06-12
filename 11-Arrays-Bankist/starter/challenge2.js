let testDataOne = [5, 2, 4, 1, 15, 8, 3];
let testDataTwo = [16, 6, 10, 5, 6, 1, 4];

const calcDogToHumanYears = function (dogYears) {
  return dogYears.map((arr) => {
    if (arr <= 2) return arr * 2;
    else return 16 + arr * 4;
  });
};

let humanAges = calcDogToHumanYears(testDataOne);
const testtest = humanAges.filter((year) => {
  return year >= 18;
});
console.log(humanAges);
console.log(testtest);
let averageHumanAge =
  testtest.reduce((accumulator, age) => accumulator + age, 0) / testtest.length;
console.log(averageHumanAge.toFixed(2));
