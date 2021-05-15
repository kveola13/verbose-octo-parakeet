"use strict";

let syndicate = {
  name: "Syndicate",
  scores: [96, 108, 89],
};
let nilfgaard = {
  name: "Nilfgaard",
  scores: [88, 91, 110],
};
let northernRealms = {
  name: "Northern Realms",
  scores: [97, 112, 101],
};
let scoiaTael = {
  name: "Scoia'tael",
  scores: [109, 95, 123],
};
let monsters = {
  name: "Monsters",
  scores: [97, 112, 101],
};
let skellige = {
  name: "Skellige",
  scores: [109, 95, 106],
};

console.log("Testing");
console.warn("Testing...");
console.error("Testing!");
console.table([
  syndicate,
  skellige,
  nilfgaard,
  monsters,
  northernRealms,
  scoiaTael,
]);
