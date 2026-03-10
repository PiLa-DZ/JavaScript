class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const laptop1 = new Product("ThinkPad", 1200);
const laptop2 = new Product("Dell", 800);

console.log(laptop1.name); //  ThinkPad
console.log(laptop1.price); // 1200
console.log(laptop2.name); //  Dell
console.log(laptop2.price); // 800

laptop1.name = "ThinkPad 2";
laptop1.price = 3300;

console.log(laptop1.name); //  ThinkPad 2
console.log(laptop1.price); // 3300
