"use strict";

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity = 1) {
    if (!Number.isFinite(price) || price < 0) {
      throw new TypeError("Item price must be a non-negative number");
    }
    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new TypeError("Item quantity must be a positive whole number");
    }
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(?:SAVE|DISC)(\d{1,2})$/i.exec(code);
    if (!match) {
      throw new Error("Coupon must match a format such as SAVE20 or DISC10");
    }

    const percent = Number(match[1]);
    if (percent < 1 || percent > 100) {
      throw new Error("Coupon discount must be between 1 and 100 percent");
    }

    this.discountPercent = percent;
    return this.getFinalTotal();
  }

  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 75, 1);
cart.addItem("Mouse", 25, 2);

console.log("=== Shopping Cart ===");
for (const item of cart.items) {
  console.log(`${item.name}: $${item.price.toFixed(2)} x ${item.quantity}`);
}
console.log(`Subtotal: $${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20";
try {
  const finalTotal = cart.applyCoupon(couponCode);
  console.log(`Coupon ${couponCode} applied (${cart.discountPercent}% off).`);
  console.log(`Final total: $${finalTotal.toFixed(2)}`);
} catch (error) {
  console.log(`Coupon error: ${error.message}`);
}
