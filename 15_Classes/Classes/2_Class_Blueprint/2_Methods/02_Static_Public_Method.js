// ============================================================
/*
 * A. The Factory Pattern
 * Instead of using new Product(),
 * you can create a static method that "assembles"
 * an object from different data formats (like JSON).
 */
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // STATIC FACTORY: Generates a product from a string
  static fromJSON(json) {
    const data = JSON.parse(json);
    return new Product(data.title, data.cost);
  }
}

// Usage:
const laptop = Product.fromJSON('{"title": "ThinkPad", "cost": 1200}');

// ============================================================
/*
 * B. The Comparison Utility
 * Static methods are perfect for comparing two different instances.
 *
 * The Scenario: Comparing Product Value
 * Let's build a static method that compares two products
 * and tells us which one has the better
 * "price-per-gram" (unit value).
 *
 */
class Product {
  #name;
  #price;
  #weight;

  constructor(name, price, weight) {
    this.#name = name;
    this.#price = price;
    this.#weight = weight;
  }

  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get weight() {
    return this.#weight;
  }

  // THE COMPARISON UTILITY
  static getBetterValue(prodA, prodB) {
    // Logic: Calculate price per gram for both
    const ratioA = prodA.price / prodA.weight;
    const ratioB = prodB.price / prodB.weight;

    if (ratioA < ratioB) {
      return `${prodA.name} is a better deal at $${ratioA.toFixed(2)}/g`;
    } else if (ratioB < ratioA) {
      return `${prodB.name} is a better deal at $${ratioB.toFixed(2)}/g`;
    } else {
      return "Both products have the same value.";
    }
  }
}

// 1. Create two separate instances
const coffeeAlpha = new Product("Coffee Alpha", 15, 500); // $0.03/g
const coffeeBeta = new Product("Coffee Beta", 25, 1000); // $0.025/g

// 2. Use the Static Utility to compare them
console.log(Product.getBetterValue(coffeeAlpha, coffeeBeta));
// Output: "Coffee Beta is a better deal at $0.03/g"

// ============================================================
/*
 * 3. The "This" Rule (Refresh)
 * Inside a static method,
 * this refers to the Class.
 * You can use it to call other static methods
 * or access static properties.
 */
class Product {
  static #count = 0;

  static logStatus() {
    // 'this' works here because we are in a static context
    console.log(`Total Products created: ${this.#count}`);
  }
}
