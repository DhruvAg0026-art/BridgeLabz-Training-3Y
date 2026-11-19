// Q3. Product Discount System (Constructor function + Prototype)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method: returns new price after discount
Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 25000);
const headphones = new Product("Headphones", 3000);

console.log(`${laptop.name}: Rs.${laptop.price} -> Rs.${laptop.applyDiscount(10)} (10% off)`);
console.log(`${phone.name}: Rs.${phone.price} -> Rs.${phone.applyDiscount(15)} (15% off)`);
console.log(`${headphones.name}: Rs.${headphones.price} -> Rs.${headphones.applyDiscount(30)} (30% off)`);

/*
  Abstraction:
  Bahar se sirf product.applyDiscount(percent) call karna padta hai.
  Discount ka formula (price * percent / 100) kaise calculate hota hai,
  ye detail hide rehti hai. Formula badalna ho to sirf ek jagah (prototype) badlo,
  har product me apne aap update ho jayega.
*/
