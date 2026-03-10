class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    // ⚠️ this is the wrong way
    this.sayHi = () => {
      console.log("hi");
    };
  }
}

const laptop = new Product("ThinkPad", 1200);
laptop.sayHi();
console.log(laptop);
// hi
// Product {
//   name: 'ThinkPad',
//   price: 1200,
//   sayHi: [Function (anonymous)]
// }

/*
 The Memory Disaster (Prototype Violation)
In your code, this.sayHi is defined inside the constructor.

The Problem: Every time you call new Product(), a brand new function object is created in RAM.

The Scale: If you have 1,000 products in your database, you have 1,000 identical "sayHi" functions eating up memory.

The Fix: Move it to the Prototype (outside the constructor). Then, all 1,000 products point to one single function in memory.
*/
