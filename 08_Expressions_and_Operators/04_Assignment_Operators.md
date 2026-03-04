```js
// ============================================================
// Assignment Operators
// ============================================================
// 1. Basic: =
// 2. Compound: +=, -=, *=, /= (Math + Save)
// 3. Logical: ||= (Default if Falsy), ??= (Default if Nullish)
// 4. Destructuring: { key } = object (Extracting data)
// ============================================================
```
### ============================================================
1. The Basic Assignment (=)
```js
let shell = "zsh"; // "zsh" is assigned to the variable shell
```

### ============================================================
2. Arithmetic Compound Assignments
These are shortcuts for performing an operation on a variable 
and then saving the result back into that same variable.
```js
/*
==========================================================================
Operator | Full Form  | Shortcut | Use Case
---------+------------+----------+----------------------------------------
+=       | x = x + y  | x += y   | Appending strings or incrementing.
-=       | x = x - y  | x -= y   | Decrementing a value.
---------+------------+----------+----------------------------------------
*=       | x = x * y  | x *= y   | Scaling a value.
/=       | x = x / y  | x /= y   | Dividing a value.
---------+------------+----------+----------------------------------------
%=       | x = x % y  | x %= y   | Keeping a value within a range (Modulo).
**=      | x = x ** y | x **= y  | Raising to a power (Exponentiation).
==========================================================================
*/
```

### ============================================================
3. Logical Assignment Operators (Modern JS)
Introduced recently (ES2021), 
these are incredibly useful for Node.js backend development, 
especially when setting default configuration values.

### ------------------------------------------------------------
Logical AND Assignment (&&=)
Assigns only if the variable is currently Truthy.
```js
let isAuthenticated = true;
// if (isAuthenticated) {isAuthenticated = checkToken()}
isAuthenticated &&= checkToken(); // Only runs checkToken if already authenticated
```

### ------------------------------------------------------------
Logical OR Assignment (||=)
Assigns only if the variable is currently Falsy. (Great for defaults!)
```js
let config = "";
// if (!config) {config = "default.conf"}
config ||= "default.conf"; 
console.log(config); // "default.conf"
```

### ------------------------------------------------------------
Nullish Coalescing Assignment (??=)
Assigns only if the variable is null or undefined. This is safer than ||= because it won't overwrite 0 or "".
```js
let port = 0;
// if (port === null || port === undefined) {port = 3000}
port ??= 3000;
console.log(port); // 0 (stays 0 because it wasn't null/undefined)
```

### ============================================================
4. Destructuring Assignment
As a Node.js dev, 
you will use this constantly to extract data from objects (like req.body in Express).
```js
const user = { name: "ArchUser", id: 1 };
const { name, id } = user; // 'name' now holds "ArchUser"
console.log(name, id) // Result: ArchUser 1
```

### ============================================================
