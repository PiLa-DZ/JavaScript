class Product {
  constructor(name, price, discount = 0) {
    this.name = name;

    // ⚠️ this is the wrong way
    if (discount > price) discount = 0;
    this.price = price - discount;
  }
}

const laptop1 = new Product("ThinkPad", 1200, 2000);
// { name: 'ThinkPad', price: 1200 }

/*
The Logic Leak (Encapsulation Violation)
You are calculating the price logic inside the constructor: this.price = price - discount.

The Problem: This is "Static" logic. If the discount changes tomorrow, or if you want to see what the original price was, you can't. You've destroyed the original data.

The Fix: Store the price and discount separately and use a Getter to calculate the final price on the fly. This keeps your data "Pure."
*/
