"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
let sorted = false;

// Data
const account1 = {
  owner: "Ola Kveli",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${movement}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const user = "Ola Fredrik Ansnes Kveli";

const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserNames(accounts);
const printBalance = function (account) {
  account.balance = account.movements.reduce(
    (accumulator, movement) => (accumulator += movement)
  );
  labelBalance.textContent = `${account.balance}€`;
};

const displaySummary = function (account) {
  const income = account.movements
    .filter((movement) => movement > 0)
    .reduce((accumulator, movement) => accumulator + movement);
  const outcome = account.movements
    .filter((movement) => movement <= 0)
    .reduce((accumulator, movement) => accumulator + movement);
  const interest = account.movements
    .filter((movement) => movement > 0)
    .map((movement) => (movement * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((accumulator, movement) => accumulator + movement);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const updateUI = function (account) {
  displayMovements(account.movements);
  printBalance(account);
  displaySummary(account);
};

let currentAccount;
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    (account) => account.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (account) => account.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = inputLoanAmount.value;

  if (
    amount > 0 &&
    currentAccount.movements.some((movement) => movement >= amount * 0.1)
  ) {
    currentAccount.movements.push(Number(amount));
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (account) => account.userName === currentAccount.userName
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

btnSort.addEventListener("click", function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(letters.join(" - "));

/* for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i+1}: Deposited ${movement}`);
  else console.log(`Movement ${i+1}: Withdrew ${Math.abs(movement)}`);
} */

movements.forEach(function (movement, index, array) {
  if (movement > 0) console.log(`Movement ${index + 1}: Deposited ${movement}`);
  else console.log(`Movement ${index + 1}: Withdrew ${Math.abs(movement)}`);
});

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

const eurToUsd = 1.1;
const conversionsUSD = movements.map(function (movements) {
  return (movements * eurToUsd).toFixed(2);
});

const conversionsUSDArrow = movements.map((movements) =>
  (movements * eurToUsd).toFixed(2)
);

console.log(movements);
console.log(conversionsUSD);

const conversionsUSDFor = [];

for (const movement of movements) {
  conversionsUSDFor.push((movement * eurToUsd).toFixed(2));
}
console.log(conversionsUSDFor);

const movementDescriptions = movements.map((movement, index) => {
  if (movement > 0) return `Movement ${index + 1}: Deposited ${movement}`;
  else return `Movement ${index + 1}: Withdrew ${Math.abs(movement)}`;
});

console.log(movementDescriptions);

const deposits = movements.filter((movement) => movement > 0);
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter((withdrawal) => withdrawal <= 0);
console.log(withdrawals);

const balance = movements.reduce(
  (accumulator, current) => (accumulator += current)
);

console.log(balance);

const max = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) return accumulator;
  else return movement;
}, movements[0]);
console.log(max);

const totalDepositsInUSD = movements
  .filter((movement) => movement > 0)
  .map((movement) => movement * 1.1)
  .reduce((accumulator, movement) => accumulator + movement);
console.log(totalDepositsInUSD.toFixed(0));

console.log(movements.find((movement) => movement < 0));

console.log(movements.includes(-130));

console.log(movements.some((movement) => movement === -130));
const anyDeposit = movements.some((movement) => movement > 0);
console.log(anyDeposit);

console.log(movements.every((movement) => movement > 0));
console.log(account4.movements.every((movement) => movement > 0));

const deposit = (movement) => movement > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const testArray = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(testArray.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((account) => account.movements);
console.log(accountMovements);
const flatMovements = accountMovements.flat();
console.log(flatMovements);
const overallBalance = flatMovements.reduce(
  (accumulator, movement) => accumulator + movement
);
console.log(overallBalance);

const chained = accounts
  .flatMap((account) => account.movements)
  .reduce((accumulator, movement) => accumulator + movement);
console.log(chained);

const owners = ["Jonas", "Ulrich", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

console.log(movements);
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    else return 0;
  })
);

console.log(
  movements.sort((a, b) => {
    a - b;
  })
);

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(27, 1, 9);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (movement) => Number(movement.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});

const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement > 0)
  .reduce((sum, cur) => sum + cur);
console.log(bankDepositSum);
const numDeposits1000 = accounts
  .flatMap((account) => account.movements)
  .reduce((count, current) => (current >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

const sumBalance = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (sum, current) => {
      current > 0 ? (sum.deposits += current) : (sum.withdrawals += current);
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sumBalance);
const { deposits2, withdrawals2 } = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (sum, current) => {
      sum[current > 0 ? "deposits2" : "withdrawals2"] += current;
      return sum;
    },
    { deposits2: 0, withdrawals2: 0 }
  );
console.log(deposits2, withdrawals2);

const convertTitleCase = function (title) {
  const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
