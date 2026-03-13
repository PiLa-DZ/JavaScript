// You can't read or update the privet property direct
// You have to use (get) and (set) or any another (method)
// Best for update use (set)
class Product {
  #id; // Must declare here
  constructor(id) {
    this.#id = id;
  }
}

const laptop = new Product(1);

// ------------------------------------------------------------
// ⚠️ "logic trap" in JavaScript.
laptop.id = 2;
console.log(laptop.id); // 2
// The Truth: You did not change the ID of the laptop.
// You accidentally created a new, public property
// called id that has nothing to do with
// the private #id inside the class.

// ⚠️ Example you can do like this in JavaScript
laptop.anything = "anything";
console.log(laptop.anything); // anything

// ------------------------------------------------------------
/* !NOTE
    JavaScript stores Private Methods (and Private Fields) 
    in a "Hidden Class" or an internal mapping system. 
    They are "hard-wired" into the instance by the engine, 
    not linked through the public prototype chain.
*/
