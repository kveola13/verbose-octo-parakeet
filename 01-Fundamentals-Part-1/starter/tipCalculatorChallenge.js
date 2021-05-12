const tip = 15
const bigTip = 20

let bills = [275, 40, 430]

bills.forEach(bill => {
    let billIsInRange = 50 <= bill <= 300
    
    console.log(`Bill: ${bill}, tip is ${billIsInRange ? (bill / 100) * tip : (bill/100) * bigTip}
The total value: ${billIsInRange ? bill + (bill / 100) * tip : bill + (bill / 100) * bigTip}`);
});
