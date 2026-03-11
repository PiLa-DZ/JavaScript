// Accessors
// Always update the Private Field (#price) inside the setter.
class Product {
  name;
  #price;
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  get price() {
    return `Product price: ${this.#price}`;
  }

  set price(value) {
    if (value < 0) throw new Error("Price cannot be negative!");
    this.#price = value;
  }

  // set price(x, y) {...} // ⚠️ You can't do like this
  // ⚠️ You can't do many arguments in set(a, b, c)
}

const laptop = new Product("ThinkPad", 1200);

// laptop.price(1000); // ⚠️ Throws TypeError because price is a property, not a function

laptop.price = 1000; // This triggers the 'set price(value)' logic

console.log(laptop.price); // Product price: 1200

/*
    * a setter is restricted to exactly one argument.

⚠️ You can't do many arguments in set(a, b, c)
In JavaScript (and most OOP languages), 
a Setter is strictly designed to intercept the assignment operator (=). 
Because you can only assign one thing at a time 
to a variable (e.g., x = y), 
a setter is restricted to exactly one argument.

*/
