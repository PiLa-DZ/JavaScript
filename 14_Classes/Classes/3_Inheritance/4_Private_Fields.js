// ============================================================
// 1. The Logic: "Strict Encapsulation"
// When you mark something with #,
// you are telling the JavaScript engine:
// "This variable belongs ONLY to the code written inside these specific curly braces { }."
// Even though a Laptop is a Product,
// the Laptop code was written in a different block of curly braces. Therefore,
// it does not have the "key" to the Parent's vault.

// ============================================================
// 2. The Code Failure (What happens if you try)
class Product {
  #secretKey = "12345"; // Private to Product
  publicName = "Generic Item";

  getSecret() {
    return this.#secretKey; // The Parent can read its own secret
  }
}

class Laptop extends Product {
  showDetails() {
    console.log(this.publicName); // Works! (Inherited)
    console.log(this.#secretKey); // SYNTAX ERROR: Private field '#secretKey' must be declared in an enclosing class
  }
}

// ============================================================
// 3. How to "Work Around" it (The API Way)
// If the Child class needs that data,
// the Parent must provide a Public or Protected method (a Getter)
// to hand it over.
// This is safer because the Parent stays in control of how the data is shared.
class Product {
  #price = 100;

  // The "Gateway"
  getPrice() {
    return this.#price;
  }
}

class Laptop extends Product {
  constructor() {
    super();
    // I can't touch #price, but I can ask the Parent for it
    console.log(`The price is: ${this.getPrice()}`);
  }
}

// ============================================================
/*
 * 4. Why did they design it this way?
 *
 * If Child classes could touch #private variables,
 * you would run into a problem called Fragile Base Class:
 *
 * You build 100 Child classes that all use Parent.#internalCounter.
 *
 * One day,
 * you decide to rename #internalCounter to #totalCount
 * inside the Parent to make it cleaner.
 *
 * BOOM. All 100 Child classes break instantly
 * because they were reaching inside the Parent's guts.
 *
 * By blocking inheritance for private fields,
 * JavaScript forces you to create a stable "Internal API"
 * (like getters/setters) that won't break
 * your children when you update your parent.
 *
 */

// ============================================================
/*
 * Summary
 *
 * Private Scope:
 * # is hard-coded to the specific class definition where it was born.
 *
 * Inheritance:
 * Only Public (and the non-official "protected" convention _)
 * properties move down the chain.
 *
 * Access:
 * To use Parent private data in a Child,
 * the Parent must "expose" it via a Public method or Getter.
 *
 */
