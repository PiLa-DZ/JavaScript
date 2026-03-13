Array --> is a global object used to store a collection of items.
1. Dynamic      
2. Heterogeneous
3. Zero-indexed 

Typed Arrays --> raw binary data to memory buffers. 
1. Fixed-length     
2. Type-specific    
3. Performance-heavy

Map --> Similar to an Object but
    Any Key Type
    Not Reapet Kay
    Size Property
    Order Preservation (First In, First Out)

WeakMap --> Similar to a Map but
    Keys MUST be Objects 
    The "Weak" Reference
    Not iterable

Set --> Similar to an Array
    No access indexed
    Not Reapet Value
    Order Preservation (First In, First Out)

WeakSet --> Similar to an Set
    Value MUST be Object
    The "Weak" Reference
    Not iterable

JSON (JavaScript Object Notation) --> Similar to Object
    Double Quotes Only for Keys and Strings
    No Functions
    No Last Commas,
    built-in methods
        `JSON.stringify(OBJ)`
        `JSON.parse(JSON)`
    only supports values
        Strings: "Hello"
        Numbers: 42 or 3.14
        Booleans: true or false
        Null: null
        Arrays: [1, 2, 3]
        Objects: {"key": "value"}
    Pretty Printing in Terminal
        `JSON.stringify(config, null, 2)`
