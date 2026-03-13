### It uses two main keywords:
1. module.exports: The "Export" gate (sending code out).
2. require(): The "Import" gate (pulling code in).
```js
// ============================================================
// iphone.js
class IPhone {
  constructor(model) {
    this.model = model;
  }
}

const factoryLocation = "Cupertino, CA";

// CJS Export: You assign what you want to share to module.exports
module.exports = { IPhone, factoryLocation };
```

```js
// ============================================================
// main.js
const { IPhone, factoryLocation } = require('./iphone.js');

const myPhone = new IPhone("15 Pro");
console.log(`Made in ${factoryLocation}`);
```
