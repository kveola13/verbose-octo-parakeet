let syndicate = {
    name: "Syndicate",
    scores: [
        44, 23, 71
    ]
}
let nilfgaard = {
    name: "Nilfgaard",
    scores: [
        65, 54, 49
    ]
}
let northernRealms = {
    name: "Northern Realms",
    scores: [
        85, 54, 41
    ]
}
let scoiaTael = {
    name: "Scoia'tael",
    scores:[
        23, 34, 27
    ] 
}


let teamScoreCalculation = scores => {
    let total = 0;
    scores.forEach(score => {
        total += score
    });
    return total / scores.length
}

function selectWinner(firstTeam, secondTeam){
    let firstTeamScoreAverage = teamScoreCalculation(firstTeam.scores)
    let secondTeamScoreAverage = teamScoreCalculation(secondTeam.scores)

    if(firstTeamScoreAverage >= secondTeamScoreAverage * 2){
        return`Match between ${firstTeam.name} and ${secondTeam.name}: ${firstTeam.name} wins.`;
    }
    else if (secondTeamScoreAverage >= firstTeamScoreAverage * 2) {
        return `Match between ${firstTeam.name} and ${secondTeam.name}: ${secondTeam.name} wins.`;
    }
    else{
        return `Match between ${firstTeam.name} and ${secondTeam.name}: No team wins.`
    }
}

console.log(
    `${selectWinner(syndicate, nilfgaard)}\n${selectWinner(northernRealms, scoiaTael)}`
);