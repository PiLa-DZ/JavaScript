2. Fetch API (The Modern Standard)

Fetch --> "Modern/Promise" way.

Fetch was introduced to provide a more powerful 
and flexible feature set. 
It is built natively on Promises, 
making it the perfect partner for your async/await skills.

Syntax: Clean and chainable.

Streams: 
    Unlike XHR, 
    Fetch allows you to handle data as a "Stream," 
    which is great for large files.

The "Double Await": 
    With Fetch, 
    you usually await twice—once 
    for the network response 
    and once to parse the body (e.g., .json()).

```js
// The "Modern" way
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    
    if (!response.ok) throw new Error("Network response was not ok");
    
    const data = await response.json(); // Unwrapping the JSON stream
    console.log(data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}
```


### ============================================================
2. The "Evolution" of Fetch in Node.js

This is a key point for your Backend Major:

Before Node.js v17.5: 
    Node didn't have fetch. 
    Backend developers had to install a package called 
    node-fetch or use axios.

Node.js v18 and newer: 
    fetch is now native. 
    You can use it in your scripts without importing anything. 
    It’s part of the global environment.
