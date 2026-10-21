// Generate operands from 1 through 20 and choose one supported arithmetic operator.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = (firstNumber / secondNumber).toFixed(2);
    break;
  default:
    throw new Error(`Unsupported operator: ${operator}`);
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
