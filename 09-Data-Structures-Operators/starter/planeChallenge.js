"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  let [type, from, to, time] = flight.split(";");
  console.log(
    `${type.startsWith("_Delayed") ? "🔴" : ""}${type
      .replace("_", " ")
      .replace("_", " ")} from ${from.substring(0, 2).toUpperCase()} to ${to
      .substring(0, 2)
      .toUpperCase()} (${time.replace(":", "h")})`.padStart(45, " ")
  );
}
