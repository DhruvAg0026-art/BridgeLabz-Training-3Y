// Start with a product title containing extra whitespace and inconsistent casing.
const productName = " wireless headphones PRO ";
const normalizedTitle = productName
  .trim()
  .toLowerCase()
  .replace("pro", "pro edition");

// Capitalize the first character of each word for display.
const cleanedTitle = normalizedTitle
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
