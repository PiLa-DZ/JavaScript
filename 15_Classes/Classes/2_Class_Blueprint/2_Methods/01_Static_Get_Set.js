// Accessors
class Product {
  static #taxRate = 0.15; // Private Static data

  // Static Getter: Allows everyone to see the current rate
  static get taxRate() {
    return `${this.#taxRate * 100}%`;
  }

  // Static Setter: Protects the global state from bad data
  static set taxRate(value) {
    if (value < 0 || value > 1) {
      throw new Error("Tax rate must be between 0 and 1 (e.g., 0.20)");
    }
    this.#taxRate = value;
  }
}

// Usage (Notice we use the Class Name, not an instance)
console.log(Product.taxRate); // "15%"

Product.taxRate = 0.2; // Works!
console.log(Product.taxRate); // "20%"

// Product.taxRate = -5;      // THROWS ERROR: Protection in action!

/*
// ============================================================
Why use Static Get/Set?

Computed Global Data: 
    You can return a value that is calculated 
    from other static properties 
    (e.g., static get totalMargin()).

Late-Binding / Syncing: 
    If you change a static setting, 
    you might want to trigger a "re-sync" 
    with a database or log the change to a file.

Read-Only Globals: 
    By providing a static get but no static set, 
    you create a global constant that 
    everyone can read but nobody can overwrite.

// ============================================================

Static Accessors: 
    Use the keywords static get and static set.

The "This" Rule: 
    Inside these methods, this points to the Class. 
    So this.#taxRate works perfectly.

Integrity: 
    They are the best way to manage "Global Configuration" 
    for a backend system while keeping 
    it safe from invalid inputs.

*/
