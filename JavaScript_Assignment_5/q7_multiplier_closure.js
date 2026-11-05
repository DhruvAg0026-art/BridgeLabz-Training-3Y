"use strict";

function makeMultiplier(multiplier) {
  return function (number) {
    // The returned function closes over `multiplier` from makeMultiplier.
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);

console.log("Triple of 5:", triple(5));
console.log(
  "The inner function remembers the multiplier value after makeMultiplier returns."
);
