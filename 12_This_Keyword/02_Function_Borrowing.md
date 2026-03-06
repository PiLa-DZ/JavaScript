```js
// ============================================================
// Function Borrowing
// ============================================================
// 1. Definition: Using a method from one object on a 
//    different object.
// 2. Methods: call() and apply() execute the borrowed function 
//    immediately.
// 3. bind(): Returns a copy of the function with 'this' 
//    permanently set to the target object.
// 4. Use Case: Using Array methods on "Array-like" objects 
//    (like arguments or DOM NodeLists).
// ============================================================
```

### ============================================================
1. How it works with call()
Imagine you have a "User" object that knows how to introduce itself, 
and a "Guest" object that is just a simple data structure.
```js
// ============================================================
const user = {
  name: "Archie",
  greet: function(role) {
    console.log(`Hello, I am ${this.name}. My role is: ${role}`);
  }
};

const guest = { name: "Gentoo" };

// guest does not have a greet() method. Let's borrow it!
user.greet.call(guest, "Maintainer"); 
// Output: Hello, I am Gentoo. My role is: Maintainer
// ============================================================
```

In this example, 
we called user.greet but told JavaScript: 
    "Run this code, but pretend 'this' is the guest object."

### ============================================================
2. The Classic Use Case: Borrowing from Prototypes
This is the most "pro" way to use borrowing. 
You often want to use Array methods 
on things that look like arrays 
but aren't actually arrays 
(like the arguments object or a NodeList from the DOM).

```js
function listPackages() {
  // 'arguments' is an "Array-like" object, but it doesn't have .join()
  // So we borrow it from the Array Prototype!
  const list = Array.prototype.join.call(arguments, ", ");
  
  console.log("Packages to install: " + list);
}

listPackages("neovim", "git", "tmux"); 
// Output: Packages to install: neovim, git, tmux
```

### ============================================================
3. The difference between call, apply, and bind
When borrowing, you have three tools in your belt:

```js
/*
 ============================================================================
  Tool     | Usage               | How it handles arguments
 ----------+---------------------+-------------------------------------------
  .call()  | Execute immediately | "Commas: func.call(this, arg1, arg2)"
  .apply() | Execute immediately | "Array: func.apply(this, [arg1, arg2])"
  .bind()  | Save for later      | Returns a new function with this locked in.
 ============================================================================
*/
```

### --------------------------------------------------------
The bind() Borrowing (Permanent Lease)
If you find yourself borrowing the same function over and over, 
you can use .bind() to create a permanent copy.

```js
const user = {
  name: "Archie",
  greet: function(role) {
    console.log(`Hello, I am ${this.name}. My role is: ${role}`);
  }
};

const guest = { name: "Gentoo" };

const guestGreet = user.greet.bind(guest);

// Now you can call it whenever you want!
guestGreet("Visitor");
```

### ============================================================
4. Why this matters for Node.js & TypeScript
Memory Efficiency: 
    You don't create new functions for every single object.
TypeScript Logic: 
    In TypeScript, 
    you'll see this used to satisfy interface requirements 
    or when handling legacy JavaScript libraries 
    that use a lot of this manipulation.
