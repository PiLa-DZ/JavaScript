/* "Internal" vs. "External" Methods

Private Methods. 
    You can use them here to clean up your public methods. 
    This is the Abstraction pillar in action.

*/

class Product {
  #price;
  #currency;
  constructor(price, currency) {
    this.#price = price;
    this.#currency = currency;
  }

  // PRIVATE METHOD: Internal logic hidden from the user
  #isValid(val) {
    return val > 0 && typeof val === "number";
  }

  updatePrice(newPrice, newCurrency) {
    if (this.#isValid(newPrice)) {
      // Calling a private helper
      this.#price = newPrice;
      this.#currency = newCurrency;
      console.log(`Price updated to ${this.#price} ${this.#currency}`);
    } else {
      console.log("Error");
    }
  }
}

const laptop = new Product(0.01, "BTC");
laptop.updatePrice(1200, "USD"); // Price updated to 1200 USD
laptop.updatePrice(-1200, "USD"); // Error
laptop.updatePrice("text", "USD"); // Error
// laptop.isValid(33); // TypeError:

// ------------------------------------------------------------
/* !NOTE
    JavaScript stores Private Methods (and Private Fields) 
    in a "Hidden Class" or an internal mapping system. 
    They are "hard-wired" into the instance by the engine, 
    not linked through the public prototype chain.
*/
