class Product {
  // 1. Fields (Default Properties)
  // These exist on every instance by default without needing the constructor
  status = "in-stock";
  #createdAt = new Date(); // Private: Timestamp for when it was added

  // 2. Instance Private Properties
  #price;
  #discount = 0;

  // 3. Constructor (The Assembly Line)
  constructor(name, price, category = "General") {
    this.name = name; // Public Property
    this.category = category; // Public Property
    this.#price = price; // Private Property
  }

  // 4. Prototype: Get/Set (Calculated Properties)
  // Logic: Users can "get" the price, but we decide how it's shown
  get price() {
    const finalPrice = this.#price - this.#discount;
    return `$${finalPrice.toFixed(2)}`;
  }

  // Logic: Validation Gate for the price
  set price(value) {
    if (value < 0) throw new Error("Price cannot be negative!");
    this.#price = value;
  }

  // 5. Prototype: Public Methods (Actions)
  applyDiscount(amount) {
    if (amount > this.#price) return "Discount too high!";
    this.#discount = amount;
    return `New price set for ${this.name}`;
  }

  getDetails() {
    return `${this.name} (${this.category}) - ${this.price} [${this.status}]`;
  }
}

const laptop = new Product("ThinkPad", 1200, "Laptops");

console.log(laptop.getDetails()); // ThinkPad (Laptops) - $1200.00 [in-stock]

laptop.applyDiscount(200);
console.log(laptop.price); // "$1000.00"

// Try to cheat:
// laptop.#price = 0;               // ERROR: Private field!
