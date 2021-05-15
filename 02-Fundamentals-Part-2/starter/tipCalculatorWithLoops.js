let calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

function average(array) {
  let total = 0;
  array.forEach((number) => {
    total += number;
  });
  return total / array.length;
}

let bills = [22, 298, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

bills.forEach((bill) => {
  let tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
});

console.log(tips);
console.log(totals);
console.log(
  `Average totals: ${average(totals)} average tips: ${average(tips)}`
);
