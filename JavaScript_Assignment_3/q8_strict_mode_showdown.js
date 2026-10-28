// This file intentionally starts in sloppy mode to demonstrate the requested
// behavior without strict mode. Strict behavior is tested in isolated functions.

function sloppyDemo(a, a) {
  total = 10;
  console.log(`Sloppy duplicate parameters: a=${a} (the last argument wins)`);
  console.log(`Sloppy implicit global before delete: ${globalThis.total}`);
  const deleted = delete total;
  console.log(`Sloppy delete total returned ${deleted}; global total is now ${globalThis.total}`);
}

console.log("=== Without Strict Mode ===");
sloppyDemo(5, 10);

console.log("\n=== With Strict Mode ===");
try {
  // Duplicate parameter names are an early SyntaxError in strict mode.
  Function('"use strict"; function strictDuplicate(a, a) {}')();
} catch (error) {
  console.log(`Duplicate parameters: ${error.name}: ${error.message}`);
}

try {
  Function('"use strict"; strictTotal = 10;')();
} catch (error) {
  console.log(`Undeclared assignment: ${error.name}: ${error.message}`);
}

try {
  Function('"use strict"; let total = 10; delete total;')();
} catch (error) {
  console.log(`Deleting an identifier: ${error.name}: ${error.message}`);
}

function correctDemo(first, second) {
  "use strict";
  let total = first + second;
  console.log(`Correct strict version: first=${first}, second=${second}, total=${total}`);
}

console.log("\n=== Correct ES6 Version ===");
correctDemo(5, 10);

// Strict mode forbids duplicate formal parameters, accidental globals, and
// deleting lexical bindings. Use unique parameters and declare local variables.
