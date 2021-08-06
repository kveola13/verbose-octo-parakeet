const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
//spendingLimits.jay = 200;
console.log(spendingLimits);

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  //const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  //budget.push({ value: -value, description, user: cleanUser });
};

const getLimit = (user) => spendingLimits?.[user] ?? 0;

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
console.log(newBudget3);

const checkBudget = function () {
  for (const element of budget) {
    if (element.value < -getLimit(element.user)) element.flag = "limit";
  }
};
checkBudget();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (let element of budget)
    output +=
      element.value <= -bigLimit ? `${element.description.slice(-2)} / ` : "";
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
logBigExpenses(100);
