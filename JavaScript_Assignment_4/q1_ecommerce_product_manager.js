"use strict";

class Product {
  constructor(id, name, price, category) {
    if (!Number.isFinite(price) || price < 0) {
      throw new TypeError("Product price must be a non-negative number");
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100 percent");
    }

    this.price *= 1 - percent / 100;
    return this.price;
  }

  displayDetails() {
    return `#${this.id} ${this.name} (${this.category}) — $${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(101, "Wireless Headphones", 1299, "Electronics"),
  new Product(102, "Notebook", 120, "Stationery"),
  new Product(103, "Desk Lamp", 1599, "Home"),
  new Product(104, "Water Bottle", 799, "Lifestyle")
];

products[0].applyDiscount(10);

console.log("=== Products priced above $1,000 ===");
for (const product of products.filter((item) => item.price > 1000)) {
  console.log(product.displayDetails());
}
