"use strict";

const poll = {
  question: "What is your favorite programming language",
  options: ["0: Javascript", "1: Python", "2: Java", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt("Answer:\n"));
    if (
      typeof answer === "number" &&
      answer <= this.answers.length &&
      answer >= 0
    ) {
      this.answers[answer]++;
    }
    console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (typeof type === "array") {
      console.log(this.answers);
    }
    if (typeof type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".answer")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
