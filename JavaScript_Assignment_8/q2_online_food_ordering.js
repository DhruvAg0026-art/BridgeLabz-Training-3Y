// Q2. Online Food Ordering (map + Error Handling)

const menu = [
  { name: "Burger", price: 120 },
  { name: "Pizza", price: 250 },
  { name: "Pasta", price: 180 },
  { name: "Coke", price: 50 },
  { name: "Fries", price: 90 },
];

function calculateBill(orderItems) {
  // map() -> har ordered item ka price nikalo
  const priceList = orderItems.map((itemName) => {
    const found = menu.find((m) => m.name.toLowerCase() === itemName.toLowerCase());
    if (!found) {
      throw new Error(`Invalid item ordered: "${itemName}" is not on the menu`);
    }
    return found.price;
  });

  // reduce() -> total bill
  const total = priceList.reduce((sum, price) => sum + price, 0);
  return total;
}

// Valid order
try {
  const bill = calculateBill(["Burger", "Coke", "Fries"]);
  console.log("Order 1 total bill: Rs.", bill);
} catch (error) {
  console.log("Error:", error.message);
}

// Invalid order
try {
  const bill = calculateBill(["Pizza", "Sushi"]);
  console.log("Order 2 total bill: Rs.", bill);
} catch (error) {
  console.log("Error:", error.message);
}
