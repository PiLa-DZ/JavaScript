### 1. How it Works: The Delegation Model
In Prototypal Inheritance, 
objects don't copy properties from a parent; 
they delegate the request.

If you call myLaptop.powerOn(), the engine follows this logic:
1. Does myLaptop have a powerOn property? (No)
2. Look at myLaptop's prototype (let's call it genericComputer).
3. Does genericComputer have powerOn? (Yes)
4. Execute that function using myLaptop's data.

### 2. Three Ways to Implement It
Over the years, the way we set up this inheritance has evolved:

1. The Modern "Class" Way (Syntactic Sugar)
This is what you likely use in your TypeScript files. It looks like classical inheritance, but under the hood, it's still prototypes.
```js
class Device { brand = "Generic"; }
class Laptop extends Device { os = "Arch Linux"; }
```

2. The Object.create() Way (Cleanest)
This creates a new object and allows you to specify exactly which object should be its prototype.
```js
const machine = { power: "on" };
const server = Object.create(machine); // server inherits from machine

console.log(server.power); // "on"
```

3. The Constructor Way (Legacy/Classic)
This was the standard before 2015.
```js
function Admin() {}
Admin.prototype.deleteUser = function() { ... };

const boss = new Admin(); // boss inherits from Admin.prototype
```
