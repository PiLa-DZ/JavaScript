**_ Iterators and Generators _**

### ============================================================

1. What is an Iterator?

An Iterator is an object that knows how to access items
from a collection one at a time.
It keeps track of its current position.

In JavaScript,
any object that has a next() method returning
an object with value and done properties is an iterator.

The "Manual" Iterator Logic:

```js
const myItems = ["Kernel", "Shell", "User"];
const iterator = myItems[Symbol.iterator]();

console.log(iterator.next()); // { value: 'Kernel', done: false }
console.log(iterator.next()); // { value: 'Shell', done: false }
console.log(iterator.next()); // { value: 'User', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### ============================================================

1. What is a Generator?

A Generator is a special type of function that can be paused and resumed.

it does some work, "yields" a result,
and waits for you to tell it to continue.

The Syntax: function\* and yield

```js
function* softwareInstaller() {
  console.log("Downloading...");
  yield "Download Complete"; // Pause here

  console.log("Extracting...");
  yield "Extraction Complete"; // Pause here

  console.log("Setting Permissions...");
  return "Installation Finished";
}

const installProcess = softwareInstaller();

console.log(installProcess.next().value); // "Download Complete"
// ... you can do other stuff here ...
console.log(installProcess.next().value); // "Extraction Complete"
```

### ============================================================

1. Why Use Them? (The "Arch" Efficiency)

```js
/*
================================================================================
  Feature        | Regular Array/Function  | Iterators/Generators
  ===============|=========================|===============================
  Memory         | Loads all 1,000,000     | Processes 1 item at a time
                 | items into RAM.         | (Lazy Evaluation).
 ----------------+-------------------------+------------------------------
  Infinite Lists | Impossible              | "Possible (e.g., a generator that
                 | (will crash the system) | produces infinite prime numbers)
 ----------------+-------------------------+------------------------------
  Control        | Runs to the end         | You control exactly when
                 | immediately.            | the next step happens.
================================================================================
*/
```

### ============================================================

1. Connecting to your Class Knowledge

You can actually make your Classes "Iterable"
so they work with for...of loops.
Imagine your IPhone factory class has an inventory,
and you want to loop through it.

```js
class Warehouse {
  constructor() {
    this.inventory = ["iPhone 14", "iPhone 15", "iPhone 16"];
  }

  // Making the class iterable
  *[Symbol.iterator]() {
    for (let item of this.inventory) {
      yield item;
    }
  }
}

const myStorage = new Warehouse();

for (let phone of myStorage) {
  console.log(`Shipping: ${phone}`);
}
```

### ============================================================

Summary

Iterator:
The protocol for moving through data (the next() method).

Generator (\*):
A factory for iterators. It uses yield to pause execution.

Lazy Evaluation:
Data is only generated/calculated when you actually ask for it.

The Rule:
Use Generators when you have a sequence of steps
or a large dataset that you don't
want to store in memory all at once.
