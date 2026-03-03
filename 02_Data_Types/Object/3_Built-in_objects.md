### 1. Categorizing the Built-in Objects
1. Value Properties (The Basics)
    These are global constants that aren't functions.
        Infinity, NaN, undefined, null.

2. Fundamental Objects
    These are used to create other objects or manage basic language behavior.
        Object: The ancestor of almost all JS objects.
        Function: The constructor for all functions.
        Boolean, Symbol: Wrappers for their respective primitive types.

3. Error Objects
    These are what your tsc or Node.js runtime throws when something goes wrong.
        Error, AggregateError, TypeError, SyntaxError, ReferenceError.

4. Numbers and Dates
    Math: A collection of mathematical constants and functions (e.g., Math.PI, Math.floor()). Unlike most built-ins, Math is not a constructor (you can't do new Math()).
    Date: The traditional way to handle time (though you should look into the new Temporal API in 2026!).
    Number, BigInt: For numerical operations and limits.

5. Text Processing
    String: For manipulating text.
    RegExp: For Regular Expressions (pattern matching).
