"use strict";

function outer() {
  console.log("outer count before assignment:", count);
  var count = 5;

  function inner() {
    // `var count` is hoisted within inner, shadowing outer count from entry.
    console.log("inner function count before assignment:", count);
    var count = 10;
    console.log("inner function count after assignment:", count);
  }

  // Pause here to inspect outer's count and the call stack before inner runs.
  debugger;
  inner();
  console.log("outer count after inner returns:", count);
}

console.log("=== Function Declaration (Separate Hoisting Contexts) ===");
outer();

function outerWithArrow() {
  var count = 5;

  const innerArrow = () => {
    // No local count is declared, so the arrow closes over outer's count.
    console.log("inner arrow sees outer count:", count);
  };

  innerArrow();
}

console.log("\n=== Arrow Function Closure ===");
outerWithArrow();

// Expected function output starts with undefined twice: each `var` declaration
// is initialized to undefined in its own function context before assignment.
// The arrow has no separate `this` or `arguments`; its variable lookup is lexical.
// At the breakpoint, the call stack is outer -> module; after stepping into
// inner, it becomes inner -> outer -> module.
