# Data Structures

| Arrays | is a global object used to store a collection of items |
| ------ | ------------------------------------------------------ |
| Length | Dynamic                                                |
| Types  | Heterogeneous (You can store any type)                 |
| Start  | Zero-indexed                                           |

| Typed Arrays | raw binary data to memory buffers        |
| ------------ | ---------------------------------------- |
| Length       | Fixed-length                             |
| Types        | Type-specific (You can't store any type) |
| User for     | Performance-heavy                        |

| Map                | Similar to an Object but               |
| ------------------ | -------------------------------------- |
| Kays               | Any Key Type                           |
| Unique             | Not Reapet Kay                         |
| You can get        | Size Properties (Like Length in Array) |
| Order Preservation | (First In, First Out)                  |

| WeakMap              | Similar to a Map but                     |
| -------------------- | ---------------------------------------- |
| Keys                 | MUST be Objects                          |
| The "Weak" Reference | (Auto Remove if no Reference point to it |
| Not iterable         | Not iterable (You can't loop or forEach) |

| Set                | Similar to an Array   |
| ------------------ | --------------------- |
| access             | No access indexed     |
| Unique             | Not Reapet Value      |
| Order Preservation | (First In, First Out) |

| WeakSet              | Similar to an Set                        |
| -------------------- | ---------------------------------------- |
| Value                | Value MUST be Object                     |
| The "Weak" Reference | (Auto Remove if no Reference point to it |
| Not iterable         | Not iterable (You can't loop or forEach) |

## JSON (JavaScript Object Notation) -->

- Similar to Object but
- Double Quotes Only for Keys and Strings
- No Functions
- No Last Commas `,`
- only supports values
  1. Strings: `"Hello"`
  2. Numbers: `42` or `3.14`
  3. Booleans: `true` or `false`
  4. Null: `null`
  5. Arrays: `[1, 2, 3]`
  6. Objects: `{"key": "value"}`
- Helpers
  - built-in methods: `JSON.stringify(OBJ)`, `JSON.parse(JSON)`
  - Pretty Printing in Terminal: `JSON.stringify(config, null, 2)`
