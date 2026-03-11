// This is more "Old School" JavaScript.
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

/*
When to use Public vs. Private
Use Public if...
The property is Read/Write safe. If a developer changes it, the program won't crash or lose its integrity.

Example: product.name = "New Laptop Name".

Why: Changing a name doesn't break the math of the price or the database logic. It’s just a label.

Use Private (#) if...
The property is Sensitive or Structural. If someone changes it directly, the "State" of the object becomes a lie.

Example: product.#price.

Why: If the price is public, someone could set it to -100. By making it private and providing a Setter, you force them to go through your "Security Gate."
*/
