*** Polymorphism ***

### ============================================================
1. The Logic: "One Interface, Many Behaviors"

Polymorphism allows you to write code that expects a Parent (Product), 
but it works perfectly 
even if you give it a Child (Laptop or Book). 
The code doesn't need to know the specific type; 
it just trusts that the "blueprint" has the method it needs.

### --------------------------------------------------------
```js
/*
         +------> Inheritance -------+
         |        Reusability        |
         |                           |
         |                           |
         |                           |
         |            OOP            v
    Polymorphism                Encapsulation 
    Flexibility                   Security    
         ^                           |
         |                           |
         +---------------------------+
*/
```

### ============================================================
2. Practical Example: The "Shopping Cart"

Imagine you have a function that processes a checkout. 
It doesn't care if the item is a physical Book 
or a digital Software; it just needs to call .getPrice().

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class PhysicalProduct extends Product {
  // Overrides to add shipping cost
  getPrice() {
    return this.price + 5;
  }
}

class DigitalProduct extends Product {
  // Overrides to add a 10% discount
  getPrice() {
    return this.price * 0.9;
  }
}

// POLYMORPHISM IN ACTION
function printReceipt(items) {
  items.forEach((item) => {
    // We treat every item as a 'Product'
    // But the behavior changes based on the 'Form' (Child type)
    console.log(`${item.name}: $${item.getPrice()}`);
  });
}

const cart = [
  new PhysicalProduct("Keyboard", 50),
  new DigitalProduct("Game Key", 20),
];

printReceipt(cart);
// Keyboard: $55 (Added shipping)
// Game Key: $18 (Applied discount)
```

### ============================================================
3. Why is this useful for your Roadmap?

Scalability: 
    You can add a SubscriptionProduct next week. 
    As long as it has a .getPrice() method, 
    your printReceipt function never has to change.

Decoupling: 
    Your "Process" logic (the checkout) 
    is separated from your "Data" logic (the specific product types).

### ============================================================
4. The "Instanceof" Check

Sometimes you treat them all like Parents, 
but you need to know their "True Form." You use instanceof for this.

```js
if (item instanceof DigitalProduct) {
  console.log("Sending download link...");
}
```

### ============================================================
5. Summary

Polymorphism: 
    The ability of different classes to respond to the same method call in their own way.

The Rule: 
    High-level code should depend on Blueprints (Parents), not Specifics (Children).

The Benefit: 
    It makes your system "Plug-and-Play."
