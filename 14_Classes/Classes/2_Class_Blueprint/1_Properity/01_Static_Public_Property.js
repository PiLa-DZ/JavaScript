// Storage: Attached directly to the Constructor function (the Class name), not the Prototype.
//
//  * Memory Efficiency:
//      There is only one copy of a static property in memory,
//      no matter if you create 0 or 1,000,000 objects.
//
//  * Access Pattern:
//      ClassName.propertyName.
//
//  * The Rule:
//      Use static for "Global" class info.
//      Use instance for "Unique" object info.
//
class Product {
  static storeName = "TechNova"; // Static Public Property
  static taxRate = 0.15; // Another one

  name;
  constructor(name) {
    this.name = name;
  }
}

const laptop = new Product("ThinkPad");

// 1. Accessing via the Class (The Right Way)
console.log(Product.storeName); // "TechNova"

// 2. Accessing via the Instance (The Error Way)
console.log(laptop.storeName); // undefined!

/*
// ============================================================
* When to use Static Public Properties
    * Use these for Configuration or Constants that are 
    * relevant to the category, 
    * but don't need to be unique for every object.
        * Version numbers: static version = 'v1.0.2'
        * Common Units: static unit = 'kg'
        * Global States: static isOnline = true
// ============================================================








*/
