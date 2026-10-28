"use strict";

// Supply a row count as the first command-line argument (for example: node q6_pyramid_pattern.js 7).
const rawLimit = process.argv[2];
const parsedLimit = rawLimit === undefined ? 5 : Number(rawLimit);
const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

if (rawLimit !== undefined && limit !== parsedLimit) {
  console.log(`Invalid row limit "${rawLimit}"; using the default of 5.`);
}

console.log(`=== Pyramid Pattern (${limit} rows) ===`);
for (let row = 1; row <= limit; row += 1) {
  let line = "";
  for (let column = 1; column <= row; column += 1) {
    line += column === 1 ? "*" : " *";
  }
  console.log(line);
}

console.log("\n=== var Re-use Observation ===");
for (var varRow = 1; varRow <= Math.min(limit, 4); varRow += 1) {
  var varLine = "";
  for (var varColumn = 1; varColumn <= varRow; varColumn += 1) {
    varLine += varColumn === 1 ? "*" : " *";
  }
  console.log(varLine);
}
console.log(`After the loops, varRow=${varRow} and varColumn=${varColumn}; var is function-scoped.`);
// With `let`, each loop binding is block-scoped. Replacing it with `var` makes
// the counters reusable in the surrounding function/module scope.

try {
  // Strict mode rejects an undeclared loop counter instead of creating a global.
  Function('"use strict"; for (undeclaredIndex = 0; undeclaredIndex < 1; undeclaredIndex += 1) {}')();
} catch (error) {
  console.log(`Strict-mode undeclared counter: ${error.name}: ${error.message}`);
}

console.log("Debug tip: break on the outer loop and step through row/column updates.");
