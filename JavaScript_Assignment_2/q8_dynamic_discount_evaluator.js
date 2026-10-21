// Sample shopping cart with category-based discounts.
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

// First apply each item's category discount, and retain the result for reporting.
const discountedCart = [];
for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  discountedCart.push({
    item: product.item,
    originalPrice: product.price,
    discountRate,
    discountedPrice: product.price * (1 - discountRate),
  });
}

const originalCartTotal = cart.reduce(
  (total, product) => total + product.price,
  0,
);
const subtotalAfterCategoryDiscounts = discountedCart.reduce(
  (total, product) => total + product.discountedPrice,
  0,
);
const overallDiscountRate = originalCartTotal > 50000 ? 0.05 : 0;
const finalTotal =
  subtotalAfterCategoryDiscounts * (1 - overallDiscountRate);

console.table(
  discountedCart.map((product) => ({
    item: product.item,
    originalPrice: product.originalPrice.toFixed(2),
    categoryDiscount: `${product.discountRate * 100}%`,
    discountedPrice: product.discountedPrice.toFixed(2),
  })),
);
console.log(`Cart total before discounts: ${originalCartTotal.toFixed(2)}`);
console.log(
  `Extra overall discount: ${overallDiscountRate * 100}%`,
);
console.log(`Final cart total: ${finalTotal.toFixed(2)}`);
