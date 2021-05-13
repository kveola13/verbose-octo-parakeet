let calcTip = bill => {
    return bill >= 50 && bill <= 300 ? (bill/100) * 15 : (bill/100) * 20
}

let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]