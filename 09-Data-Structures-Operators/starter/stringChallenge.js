document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const button = document.querySelector("button");
button.innerHTML = "Press";
const text = document.querySelector("textarea");
text.rows = 10;
text.cols = 50;
text.value =
  "underscore_case\n\tfirst_name\nSome_variable\n\tcalculate_AGE\ndelayed_departure";
function convertToCamelCase() {
  let textArray = text.value.toLowerCase().split("\n");
  let newArray = [];
  for (const [index, name] of textArray.entries()) {
    const [before, after] = name.trim().split("_");
    const output = `${before}${after.replace(
      after[0],
      after[0].toUpperCase()
    )}`;
    newArray.push(`${output.padEnd(25)}${"✅".repeat(index + 1)}\n`);
  }
  text.value = newArray;
}

button.addEventListener("click", convertToCamelCase);
