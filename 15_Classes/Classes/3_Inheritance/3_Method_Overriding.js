// ============================================================
// Basic Overriding Example
// Imagine a generic Product and a specialized Software.
class Product {
  display() {
    console.log("This is a generic product.");
  }
}

class Software extends Product {
  // OVERRIDE: Same name, different logic
  display() {
    console.log("This is a digital software license.");
  }
}

const item = new Software();
item.display(); // "This is a digital software license."

// ============================================================
// The Power of super: "Extending" instead of "Replacing"
// Usually,
// you don't want to throw away the Parent's logic
// entirely—you just want to add to it.
// This is where super shines.
// It allows you to run the Parent's method inside your overridden method.
class Product {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getInfo() {
    return `Item: ${this.#name}`;
  }
}

class Book extends Product {
  #author;
  constructor(name, author) {
    super(name);
    this.#author = author;
  }

  // OVERRIDE + EXTEND
  getInfo() {
    // 1. Get the generic info from the Parent using super
    const baseInfo = super.getInfo();
    // 2. Add the specific info for the Child
    return `${baseInfo}, Written by: ${this.#author}`;
  }
}

// ============================================================
/*
 * Summary
 * Override:
 * Define a method in the Child with the same name as the Parent.
 *
 * Refinement:
 * Use super.methodName() to keep the original logic
 * and build on top of it.
 *
 * The "Why": This allows for Polymorphism.
 * You can have a list of different products
 * (Books, Laptops, Software), call .getInfo()
 * on all of them, and each one will respond with
 * its own specific details.
 *
 */
