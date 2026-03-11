// Accessors
// The best way to read private properity
class Product {
  #id;
  constructor(id) {
    this.#id = id;
  }
  get id() {
    return `Product ID: ${this.#id}`;
  }
}

const laptop = new Product(1);

console.log(laptop.id); // Product ID: 1

// ⚠️ You can't do like this
// this is just another properity
laptop.id = 33;
console.log(laptop.id); // Product ID: 1

/*
Why use get instead of a normal method?
You could have written laptop.getId(). So why do we use get id()?

Clean Syntax (Abstraction): The person using your class doesn't want to call functions for everything. They want to access data naturally.

The "Formatting" Power: You can change the data as it leaves the class without changing the original value.
    */
