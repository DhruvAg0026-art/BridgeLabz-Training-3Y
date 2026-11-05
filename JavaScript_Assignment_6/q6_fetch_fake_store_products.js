"use strict";

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("");
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
  }
}

fetchProducts();
