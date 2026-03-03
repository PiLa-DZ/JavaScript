### 1. What is a Prototype?
Every object in JavaScript has a secret internal property 
(historically called [[Prototype]]) 
that points to another object.

When you try to access a property or method on an object, 
JavaScript follows a specific search order:

1. Check the object itself. (Does user have a name?)
2. Check its Prototype. (Does user.__proto__ have a name?)
3. Check the Prototype's Prototype. (And so on...)
4. End of the line. If it reaches null without finding it, it returns undefined.

This search process is called the ***Prototype Chain***

### 2. Why do we use them? (Memory Efficiency)
```js
const userActions = {
  save() { console.log("Saving to disk..."); }
};

const user1 = { name: "Alice" };
Object.setPrototypeOf(user1, userActions);

user1.save(); // It works, even though 'save' isn't inside user1!
```

### 3. The __proto__ vs. prototype Confusion
This is the single most confusing part of JavaScript. Here is the breakdown for your Neovim/TS workflow:
__proto__ (or [[Prototype]]): Every instance has this. It points to where the object inherits from.
.prototype: Only Constructor Functions (and Classes) have this. It is the "bucket" of methods that will be given to new objects created with the new keyword.

### 4. Prototypes in the Modern Era (ES6 Classes)
Even though you use the class keyword in your TypeScript code, it is just syntactic sugar for prototypes.
```js
class Admin {
  deleteUser() { /* ... */ }
}
```
Under the hood, JavaScript is actually doing this:

1. Creating a function called Admin.
1. Attaching deleteUser to Admin.prototype.
