// Sample purchase amount; replace it with the amount to evaluate.
const originalTotal = 7250;
let discountPercentage;

if (originalTotal >= 10000) {
  discountPercentage = 25;
} else if (originalTotal >= 5000) {
  discountPercentage = 15;
} else if (originalTotal >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

const finalPrice = Math.round(originalTotal * (1 - discountPercentage / 100));

console.log(`Original total: ${Math.round(originalTotal)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price: ${finalPrice}`);
