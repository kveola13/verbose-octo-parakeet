"use strict";

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i+1} by player: ${player}`);
}

let average = 0
for (const odd of Object.values(game.odds)) {
    average += odd;
}
console.log(`Average: ${(average /= Object.values(game.odds).length).toFixed(2)}`);

for (const [team, odd] of Object.entries(game.odds)) {
    console.log(`Odd of ${game[team] === undefined ? "draw" : game[team] + " winning"}: ${odd}`);
}