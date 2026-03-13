/*
 * Why make a Static Method Private?
 * You use a Static Private Method when you have logic that:
 * Belongs to the Class (Blueprint), not the instance.
 * Should never be called from outside the class (the API shouldn't show it).
 * Is used by multiple other static methods (to avoid repeating code).
 */

/*
 * Practical Example: The ID Sanitizer
 * Imagine your class generates a unique ID for every product,
 * but the ID needs to follow a very specific, secret format.
 * You don't want the user to be able to access the "formatter" logic directly.
 *
 */
class Product {
  static #count = 0;

  constructor(name) {
    this.name = name;
    // We use a static private method to generate a unique ID
    this.id = Product.#generateID();
  }

  // STATIC PRIVATE METHOD: The "Secret Formatter"
  static #generateID() {
    this.#count++;
    const timestamp = Date.now();
    // Complex internal logic hidden from the user
    return `PROD-${timestamp}-${this.#count}`;
  }

  static get totalCreated() {
    return this.#count;
  }
}

const laptop = new Product("ThinkPad");

console.log(laptop.id); // "PROD-1709...-1"
// Product.#generateID();       // ERROR: Private field '#generateID' must be declared...

/*
 * The Power of "Internal Helpers"
 * Static private methods are great for Validation
 * that multiple static setters or methods need to use.
 *
 */
class Product {
  static #taxRate = 0.15;

  // PRIVATE STATIC HELPER
  static #isWithinRange(n) {
    return n >= 0 && n <= 1;
  }

  static set taxRate(val) {
    if (this.#isWithinRange(val)) {
      // Using the private helper
      this.#taxRate = val;
    }
  }
}

/*
* Syntax: static #methodName() { ... }

* Encapsulation: 
    * It hides "how" the class works internally, 
    * only showing "what" the class can do.

* Refactoring: 
    * If you have a long static method, 
    * you can break it into smaller Static Private methods 
    * to keep the code clean and "Arch-like" (Modular).

* The Rule: 
    * If a utility function is only used 
    * inside the class blueprint and doesn't need 
    * to be seen by the outside world, make it Static Private.
*/
