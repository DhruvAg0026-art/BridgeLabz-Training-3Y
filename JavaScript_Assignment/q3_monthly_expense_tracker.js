// Monthly expenses for five spending categories, in currency units.
const expenses = {
  food: 8000,
  travel: 2500,
  rent: 15000,
  bills: 3200,
  leisure: 1800,
};

let total = 0;
for (const categoryExpense of Object.values(expenses)) {
  total += categoryExpense;
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
const tax = total * taxRate;
const finalAmount = total + tax;

console.log(`Total expenses: ${total.toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ${finalAmount.toFixed(2)}`);
