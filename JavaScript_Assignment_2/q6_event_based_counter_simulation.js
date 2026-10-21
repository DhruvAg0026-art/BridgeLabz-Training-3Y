// Shared counter state updated by simulated click handlers.
let count = 0;

function increment() {
  count += 1;

  // The nested function closes over and reads the updated outer count.
  function logCurrentCount() {
    console.log(`Counter: ${count}`);
  }

  logCurrentCount();
}

function decrement() {
  count -= 1;

  // This nested function demonstrates access to the same outer count.
  function logCurrentCount() {
    console.log(`Counter: ${count}`);
  }

  logCurrentCount();
}

// Simulate clicks by calling the functions.
increment();
increment();
decrement();
