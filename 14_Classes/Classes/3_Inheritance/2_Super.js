/*
 * The super Keyword (The Connection)
 * If the Child class has its own constructor,
 * you must call super()
 * before you can use the this keyword.
 * super() tells JavaScript:
 * * "Hey, go run the Parent's constructor first
 * * so we have the base data ready!"
 */
class DigitalProduct extends Product {
  constructor(name, price, fileSize) {
    super(name, price); // Passes name and price up to the Product constructor
    this.fileSize = fileSize; // Unique to DigitalProduct
  }

  // Method Overriding: Changing how a parent method works
  display() {
    super.display(); // Run the parent version
    console.log(`Download size: ${this.fileSize}MB`);
  }
}
