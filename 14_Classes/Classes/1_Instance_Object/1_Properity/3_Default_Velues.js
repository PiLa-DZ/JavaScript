// ============================================================
// 1. Default Arguments (In the Constructor)
class Product {
  constructor(name, price = 500) {
    this.name = name;
    this.price = price;
  }
}

// ============================================================
// 2. Default Public/Private Properties (Class Fields)
class Product {
  status = "active"; // Default Public Property
  #internalCode = 999; // Default Private Property
}
