/*
    * Static Private (static #): 
    *   A variable that exists once in 
    *   memory and is owned by the Class.

    * Security: 
    *   It prevents "External Interference." 
    *   The only way to change it is through the logic 
    *   you write inside the class 
    *   (like in the constructor or a static method).

    * Use Case: 
    *   Tracking IDs, managing a shared database connection, 
    *   or caching data that all instances need 
    *   but shouldn't modify.
*/

// ============================================================
// The Practical Example: The Object Counter
// This is the "Hello World" of Static Private properties.
// We want to track how many products we've made,
// but we don't want anyone to "fake" the count.
class Product {
  // 1. Static Private Property (The Vault)
  static #count = 0;

  constructor(name) {
    this.name = name;
    // 2. Every time a new object is born, increment the secret counter
    Product.#count++;
  }

  // 3. Static Public Method (The Window)
  // We need this to let the world see the count without touching it
  static getInventoryCount() {
    return Product.#count;
  }
}

const p1 = new Product("Laptop");
const p2 = new Product("Phone");

// Attempting to access it directly
// console.log(Product.#count); // ERROR: Private field '#count' must be declared...
// Product.#count = 100; // ERROR: Same thing.

// The proper way
console.log(Product.getInventoryCount()); // 2

/*
Why not just use a Global Variable?

Encapsulation: 
    By putting #count inside the class, 
    you keep your global scope clean. 
    No other part of your program can accidentally overwrite your counter.

Namespace: 
    It’s logically organized under Product.

*/
