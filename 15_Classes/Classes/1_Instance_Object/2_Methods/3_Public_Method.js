class Product {
  #price;
  #currency;
  constructor(price, currency) {
    this.#price = price;
    this.#currency = currency;
  }

  // This is a Method, not a Setter
  updatePrice(newPrice, newCurrency) {
    this.#price = newPrice;
    this.#currency = newCurrency;
    console.log(`Price updated to ${this.#price} ${this.#currency}`);
  }
}

const laptop = new Product(0.01, "BTC");
laptop.updatePrice(1200, "USD"); // Price updated to 1200 USD

/*
Purpose: 
    Use Methods for Actions that require multiple arguments 
    or complex internal logic.

Memory: 
    Stored on the Prototype, 
    so all instances share one copy of the code.

Access: 
    Can read and write to Private Fields using this.

Arch Tip: 
    Methods are your "API." 
    The outside world shouldn't care how updatePrice works; 
    they just need to know it exists and what arguments to give it.
*/
