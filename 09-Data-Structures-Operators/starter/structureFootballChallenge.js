const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

const eventsArray = [...new Set(gameEvents.values())];
console.log(eventsArray);
const gameEventsCopy = gameEvents;
gameEventsCopy.delete(64);
console.log(gameEventsCopy);
console.log(
  `An event happened every ${(
    [...gameEvents.keys()].pop() / gameEvents.size
  ).toFixed(2)} minutes`
);

for (const [minute, event] of gameEvents) {
  console.log(`${minute <= 45 ? "First" : "Second"} half ${minute}: ${event}`);
}
