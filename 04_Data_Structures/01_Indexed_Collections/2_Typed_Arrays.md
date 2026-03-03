### Typed Arrays provide a way to read and write raw binary data to memory buffers. They are:
1. Fixed-length: Once created, you cannot change their size (no .push() or .pop()).
2. Type-specific: Every element must be the same numeric type (e.g., an 8-bit unsigned integer).
3. Performance-heavy: They are much faster for cryptographic operations, image processing, or WebGL.

### The Architecture: Buffer vs. View

1. The ArrayBuffer (The Memory)
    The ArrayBuffer is the actual "chunk" of physical memory. 
    It holds the raw bits. 
    You cannot manipulate an ArrayBuffer directly.
    ```js
    const buffer = new ArrayBuffer(16); // 16 bytes of memory
    ```
2. The TypedArray View (The Lens)
    To read or write to that memory, 
    you need a View. 
    This tells the engine how to interpret those bits 
    (e.g., "treat every 8 bits as a number").
```js
/*
Type          | Bytes per Element | Description             | Range
--------------+-------------------+-------------------------+--------------------
Uint8Array    | 1                 | Unsigned 8-bit integer  | 0 to 255
Int8Array     | 1                 | Signed 8-bit integer    | -128 to 127
Uint16Array   | 2                 | Unsigned 16-bit integer | "0 to 65,535"
Float32Array  | 4                 | 32-bit floating point   | IEEE 754 float
BigInt64Array | 8                 | Signed 64-bit BigInt    | Massive integers
*/
const view = new DataView(buffer);
view.setUint16(0, 255, true); // Set 16-bit int at byte 0, Little-Endian
```
