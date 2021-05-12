let syndicate = {
    name: "Syndicate",
    scores: [
        96, 108, 89
    ]
}
let nilfgaard = {
    name: "Nilfgaard",
    scores: [
        88, 91, 110
    ]
}
let northernRealms = {
    name: "Northern Realms",
    scores: [
        97, 112, 101
    ]
}
let scoiaTael = {
    name: "Scoia'tael",
    scores:[
        109, 95, 123
    ] 
}
let monsters = {
    name: "Monsters",
    scores: [
        97, 112, 101
    ]
}
let skellige = {
    name: "Skellige",
    scores:[
        109, 95, 106
    ]
}
const minimumAverageScore = 100

function calculateAverageScoreAndPrint(firstTeam, secondTeam){

    let firstAverage = firstTeam.scores.reduce(sum) / firstTeam.scores.length
    let secondAverage = secondTeam.scores.reduce(sum) / secondTeam.scores.length

    console.log(`${firstTeam.name} average: ${firstAverage.toFixed(2)}\n${secondTeam.name} average: ${secondAverage.toFixed(2)}`);
    if(firstAverage != secondAverage)
    {
        if(firstAverage >= minimumAverageScore && secondAverage >= minimumAverageScore){
            console.log(`Winner is ${firstAverage > secondAverage ? firstTeam.name : secondTeam.name}`);
        }
        else if (firstAverage >= minimumAverageScore && secondAverage < minimumAverageScore){
            console.log(`Winner is ${firstTeam.name}`);
        } 
        else if(firstAverage < minimumAverageScore && secondAverage >= minimumAverageScore) {
            console.log(`Winner is ${secondTeam.name}`);
        }
        else {
            console.log("No team has the score needed");
        }
    } 
    else 
    {
        console.log("Draw!");
    }
}

function sum(total, number){
    return total + number
}

calculateAverageScoreAndPrint(syndicate, nilfgaard)
calculateAverageScoreAndPrint(northernRealms, scoiaTael)
calculateAverageScoreAndPrint(monsters, skellige)
