"use strict";

console.log("=== Original Sequence (with the TDZ error caught) ===");

try {
  console.log("score before assignment:", score);
  announce();
  var score = 50;
  function announce() {
    console.log("Game started");
  }
  startGame();
  let status = "ready";
  function startGame() {
    console.log(status);
  }
} catch (error) {
  console.log(`Sequence stopped: ${error.name}: ${error.message}`);
}

// `var score` is hoisted and initialized to undefined; its assignment stays
// at the original line. Function declarations are initialized before execution.
// `let status` is hoisted but remains in the temporal dead zone until initialized,
// so startGame's read throws even though startGame itself is hoisted.

console.log("\n=== Corrected Sequence ===");
const correctedScore = 50;
const correctedStatus = "ready";

function announceCorrected() {
  console.log("Game started");
}

function startGameCorrected() {
  console.log(correctedStatus);
}

console.log("score:", correctedScore);
announceCorrected();
startGameCorrected();

console.log("\n=== Arrow Function Comparison ===");
// Arrow functions are expressions, not hoisted function declarations.
// They must be initialized before they are called.
const announceWithArrow = () => console.log("Game started (arrow)");
const startGameWithArrow = () => console.log(correctedStatus);

announceWithArrow();
startGameWithArrow();
