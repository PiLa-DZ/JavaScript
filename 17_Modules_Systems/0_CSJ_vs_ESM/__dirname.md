### ============================================================
1. The "Old Way" (CommonJS)
```js
// ------------------------------------------------------------
console.log(__dirname); // Output: /home/nabil/Desktop
console.log(__filename); // Output: /home/nabil/Desktop/app.js
```

### ============================================================
2. The "Modern Way" (ESM)
```js
import { fileURLToPath } from "url";
import { dirname } from "path";

// 1. Get the full path of the current file
const __filename = fileURLToPath(import.meta.url);

// 2. Get the directory name from that file path
const __dirname = dirname(__filename);

// Now it works just like the old days!
console.log(__dirname); // /home/nabil/Desktop
console.log(__filename); // /home/nabil/Desktop/app.js
```

### ============================================================
Why the change? (The Logic)

CommonJS was built specifically for local files on a server. 
ES Modules were built to work everywhere—including web browsers.

Browsers don't have "directories" in the same way a Linux server does; 
they have URLs. 
By using import.meta.url, 
JavaScript uses a standard 
that works whether your code is running on your Arch SSD 
or being downloaded from a website in Chrome.
