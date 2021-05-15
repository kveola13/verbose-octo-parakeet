function printForecast(array) {
  for (let i = 0; i < array.length; i++) {
    //double space is needed for the particular symbol here, when using node to run the js code
    console.log(`${array[i]} ℃  in ${i + 1} days\n`);
  }
}

let firstTemperatures = [17, 21, 23];
let secondTemperatures = [12, 5, -5, 0, 4];

printForecast(firstTemperatures);
printForecast(secondTemperatures);
