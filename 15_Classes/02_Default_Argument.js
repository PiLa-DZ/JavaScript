class Product {
  constructor(name, price = 500) {
    this.name = name;
    this.price = price;
  }
}

const laptop1 = new Product("ThinkPad", 1200);
const laptop2 = new Product("Dell");

console.log(laptop2.price); // 500
