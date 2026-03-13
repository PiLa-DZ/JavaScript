### JSON (JavaScript Object Notation) is a lightweight data-interchange format.

### 1. The Rules of JSON
1. Double Quotes Only: Keys and string values must use ", not '.
2. No Functions: You cannot store functions or logic in JSON.
3. No Trailing Commas: The last item in a list or object cannot have a comma after it.
4. Key Names: Keys must be wrapped in double quotes.

### 2. The Two Essential Methods
In JavaScript, you move between "Live Objects" and "JSON Strings" using two built-in methods.

A. JSON.stringify()
Converts a JavaScript object/array into a JSON String. 
(Useful for sending data to a server or writing to a file on your disk).
```js
const user = {
  name: "Nabil",
  editor: "Neovim",
  isLinuxUser: true
};

const jsonString = JSON.stringify(user);

console.log(jsonString); 
```
```JSON
{"name":"Nabil","editor":"Neovim","isLinuxUser":true}
```

B. JSON.parse()
Converts a JSON String back into a JavaScript object. 
(Useful when you read a config file or get data from an API).
```js
const rawData = '{"distro": "Arch", "kernel": "6.x"}';

const data = JSON.parse(rawData);

console.log(data);
// { distro: 'Arch', kernel: '6.x' }
```

### 3. Supported Data Types
JSON only supports a specific set of data types:

Strings: "Hello"
Numbers: 42 or 3.14
Booleans: true or false
Null: null
Arrays: [1, 2, 3]
Objects: {"key": "value"}

### 4. Pretty Printing for your Terminal
When you use JSON.stringify(), 
the output is usually one long, ugly line. 
you probably want your logs to be readable. 
You can pass two extra arguments to "pretty print" the JSON:
```js
const config = { theme: "Dark", font: "JetBrains Mono" };

// The 'null' is for an optional filter function
// The '2' is the number of spaces for indentation
console.log(JSON.stringify(config, null, 2));
```
```JSON
{
    "theme": "Dark",
    "font": "JetBrains Mono"
}
```
