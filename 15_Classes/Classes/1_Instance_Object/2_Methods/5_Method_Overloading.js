// Method Overloading
// (having the same method name with different parameters).
// method(x,y) {...}
// method(x,y,x) {...}
// ⚠️ JavaScript does NOT support method Overloading.

// ------------------------------------------------------------
// The "Modern" Way (Rest Parameters)
// If you want your method to be truly flexible
// use the Spread/Rest operator (...).
class Product {
  name;
  constructor(name) {
    this.name = name;
  }

  add(...args) {
    if (args.length === 2) {
      console.log(args[0] + args[1]);
    } else if (args.length === 3) {
      console.log(args[0] + args[1] + args[2]);
    }
  }
}

const laptop = new Product("ThinkPad");

laptop.add(5, 2); //    7
laptop.add(7, 6, 3); // 16
