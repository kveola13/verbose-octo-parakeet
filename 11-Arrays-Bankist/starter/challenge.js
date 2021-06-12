"use strict";

function checkDogs(dogsJulia, dogsKate) {
  let shallowCopy = dogsJulia.slice(1, -2);
  let combined = shallowCopy.concat(dogsKate);
  combined.forEach(function (dog, index) {
    const adult = dog >= 3;
    adult
      ? console.log(
          `Dog number ${index + 1} is an adult and is ${dog} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy`);
  });
}

let dogsJuliaOne = [3, 5, 2, 12, 7];
let dogsKateOne = [4, 1, 15, 8, 3];
let dogsJuliaTwo = [9, 16, 6, 8, 3];
let dogsKateTwo = [10, 5, 6, 1, 4];
checkDogs(dogsJuliaOne, dogsKateOne);
checkDogs(dogsJuliaTwo, dogsKateTwo);
