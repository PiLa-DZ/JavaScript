### ============================================================
**** Control Flow *****
*** Loops and Iterations ***
*** Conditional Statements ***
*** Exception Handling ***
### ============================================================
*** Loops and Iterations ***

For Loop --> (init; condition; step) { Code... }
While    --> (condition) { Code... }
Do While --> do { Code... } while (condition);
For Of   --> for (const item of iterable) { Code... }
For In   --> for (const key in object) { Code... }
break    --> Exit the loop COMPLETELY.
continue --> Skip to the NEXT iteration immediately.

Iterations --> An object has (.next() method) or ([Symbol.iterator])

### ============================================================
*** Conditional Statements ***
if...else      --> if (condition) { ... } else if (cond) { ... } else { ... }
Ternary        --> (condition) ? trueValue : falseValue;
switch...case  --> switch (expression) { case value1: ... break; default: ... }
    Comparison --> Uses Strict Equality (===).
    break      --> Required to prevent "Fall-through".
    default    --> The optional fallback if no cases match.
    Grouping   --> Multiple cases can share one block of code.

### ============================================================
*** Exception Handling ***
The throw Statement:
    Throw Error --> throw new Error("msg")
    Throw Obj   --> throw {
                      code: 404,
                      message: "Config file .zshrc not found",
                      critical: true
                    };

try...catch...finally:
    try { Code... Throw Error } 
    catch (error) { Catch Error Code... } 
    finally { Do this anyway }

Utilizing Error Objects:
    Properties: 
        .name (Type), 
        .message (Details), 
        .stack (Trace).
    Check Error Type:
        `Error instanceof TypeError`
        `Error instanceof ReferenceError`
    Custom Error:
        `class DatabaseError extends Error {}`
