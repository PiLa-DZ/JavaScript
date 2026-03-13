// ------------------------------------------------------------
// 1. The Parent: The iPhone Blueprint
class IPhone {
  static #totalManufactured = 0; // Private Static: Hidden counter
  #serialNumber; // Private Instance: Each phone's ID

  constructor(model, storage) {
    this.model = model;
    this.storage = storage;
    this.#serialNumber = IPhone.#generateSerial();
  }

  // Static Private Method: Hidden factory logic
  static #generateSerial() {
    this.#totalManufactured++;
    return `SN-${Date.now()}-${this.#totalManufactured}`;
  }

  // Static Public Method: Check factory status
  static getFactoryReport() {
    return `Total iPhones produced: ${this.#totalManufactured}`;
  }

  // Instance Method: Every iPhone can do this
  bootUp() {
    console.log(
      `${this.model} is starting iOS... (Serial: ${this.#serialNumber})`,
    );
  }

  // To be overridden by specific models
  getSpecs() {
    return `${this.model} - ${this.storage}GB`;
  }
}

// ------------------------------------------------------------
// 2. The Children: iPhone 14 and iPhone 15
class IPhone14 extends IPhone {
  constructor(storage) {
    super("iPhone 14", storage); // Send data to the Parent
    this.port = "Lightning";
  }

  // Overriding the spec method
  getSpecs() {
    return `${super.getSpecs()} | Port: ${this.port} | Chip: A15 Bionic`;
  }
}

class IPhone15 extends IPhone {
  constructor(storage) {
    super("iPhone 15", storage);
    this.port = "USB-C"; // The big change!
  }

  // Overriding the spec method
  getSpecs() {
    return `${super.getSpecs()} | Port: ${this.port} | Chip: A16 Bionic`;
  }
}

// ------------------------------------------------------------
// 3. Execution: Polymorphism in the "Apple Store"
// 1. Manufacturing (Instances)
const myOldPhone = new IPhone14(128);
const myNewPhone = new IPhone15(256);

// 2. Polymorphism: Treating different models as just "iPhones"
const displayTable = [myOldPhone, myNewPhone];

console.log("--- Apple Store Display ---");
displayTable.forEach((phone) => {
  phone.bootUp(); // All use the Parent's boot logic
  console.log(phone.getSpecs()); // Each uses its OWN overridden specs
});

// 3. Static Factory Check
console.log("--- Factory System Log ---");
console.log(IPhone.getFactoryReport());

// ============================================================
/*
 * 4. Why this is "Arch Linux" Grade Architecture:
 *
 * Encapsulation:
 * You can't manually change the totalManufactured
 * count (it's #private static).
 *
 * Abstraction:
 * The user only sees getSpecs().
 * They don't need to know if the chip is an A15 or A16;
 * the object handles its own details.
 *
 * Inheritance:
 * We didn't have to rewrite the bootUp logic or
 * the serialNumber logic for
 * the iPhone 15. It "stole" it from the Parent.
 *
 * Polymorphism:
 * Our forEach loop doesn't care if
 * the phone is a 14 or 15. It just calls
 * the methods it knows an IPhone should have.
 *
 */
