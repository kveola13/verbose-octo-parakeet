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

const playersOne = [...game.players[0]];
const playersTwo = [...game.players[1]];

const [players1, players2] = game.players;

const goalKeeperTeamOne = [playersOne[0]];
const fieldPlayersTeamOne = [...playersOne];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...game.players[0], ...game.players[1]];
const playersOneFinal = [...playersOne, "Thiago", "Coutinho", "Persisic"];

const allPlayersCorrect = [...players1, ...players2];

const teamOneOdds = [game.odds.team1];
const teamTwoOdds = [game.odds.team2];
const drawOdds = [game.odds.x];

const {
  odds: { team1, x: draw, team2 },
} = game;

function printGoals(...playerNames) {
  console.log(`${playerNames.length} goals were scored`);
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

game.odds.team1 < game.odds.team2 &&
  console.log("Team 1 is more likely to win");
game.odds.team1 > game.odds.team2 &&
  console.log("Team 2 is more likely to win");
