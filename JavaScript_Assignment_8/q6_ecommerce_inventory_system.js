// Q6. E-Commerce Inventory System

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 20000, stock: 12 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 40 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 3 },
  { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 100 },
  { id: 6, name: "Pen Pack", category: "Stationery", price: 120, stock: 8 },
];

// 1. filter() -> stock 10 se kam
function getLowStockProducts(items, limit = 10) {
  return items.filter((p) => p.stock < limit);
}

// 2. sort() -> price ascending (original array ko change nahi karta)
function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

// 3. reduce() -> total inventory value = price * stock
function calculateTotalInventoryValue(items) {
  return items.reduce((total, p) => total + p.price * p.stock, 0);
}

// 4. reduce() + object grouping
function groupByCategory(items) {
  return items.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}

console.log("Low stock products:");
console.log(getLowStockProducts(products).map((p) => `${p.name} (stock: ${p.stock})`));

console.log("\nSorted by price:");
console.log(sortProductsByPrice(products).map((p) => `${p.name} - Rs.${p.price}`));

console.log("\nTotal inventory value: Rs.", calculateTotalInventoryValue(products));

console.log("\nGrouped by category:");
const grouped = groupByCategory(products);
for (const category in grouped) {
  console.log(`${category}:`, grouped[category].map((p) => p.name));
}
