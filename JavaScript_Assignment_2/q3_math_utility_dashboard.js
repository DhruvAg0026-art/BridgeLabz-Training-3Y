// Set the number used by the calculator dashboard.
const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display the calculated values together in a readable summary.
console.log(`Math Utility Dashboard
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x^3): ${cubedValue.toFixed(2)}
Random number (10-50): ${randomNumber}`);
