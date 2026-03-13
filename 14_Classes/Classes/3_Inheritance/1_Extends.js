/*
 * The Basic Syntax: extends
 * When a class extends another,
 * it automatically gets
 * all the Public and Protected logic from the parent.
 */

// The Parent (Base Class)
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

// The Child (Sub-class)
class DigitalProduct extends Product {
  // For now, it's empty,
  // but it already "owns" everything from Product!
}

const ebook = new DigitalProduct("Arch Wiki PDF", 0);
ebook.display(); // "Arch Wiki PDF costs $0"
