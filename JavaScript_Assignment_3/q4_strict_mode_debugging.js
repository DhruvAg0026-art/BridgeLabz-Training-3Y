"use strict";

function showMessageWithBug() {
  // Strict mode throws because greeting has no declaration in any visible scope.
  greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessageWithBug();
} catch (error) {
  console.log(`Expected strict-mode error: ${error.name}: ${error.message}`);
}

function showMessage() {
  let greeting = "Welcome";
  // Add greeting to the VS Code Watch panel and pause here to inspect its local value.
  debugger;
  console.log(greeting);
}

showMessage();

// The declaration makes greeting local to showMessage instead of implicitly
// creating a global binding. The call stack at the breakpoint contains
// showMessage, called from this module's top-level frame.
