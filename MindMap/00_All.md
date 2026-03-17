# JavaScript Mind Map

| Basics                 |                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| _Variables_            | Declaration, Initialization, Re-assignment, Re-declaration, Scope, Hoisting                     |
| _Data Types_           | Primitive, Built-in Objects, Prototype, `typeof`                                                |
| _Type Casting_         | Type Conversion, Type Coercion, Falsy Rule                                                      |
| _Equality Comparisons_ | Loose Equality, Strict Equality, Object.is, Relational Comparisons (>, >=)                      |
| _Data Structure_       | Array, Typed Array, Map, WeakMap, Set, WeakSet, JSON                                            |
| _DOM_                  | Selection, Content, Classes, Events, Structure                                                  |
| _Strict Mode_          | `"use strict";`, (Silent Errors), (Code Clarity), (`this` Rule), (Performance V8)               |
| _`this`_               | in function, in arrow function, in method, in event handlers, Alone, `.call() .apply() .bind()` |
| _`fetch`_ API          | `fetch(url, {method:, headers:, body: JSON.stringify(obj)})`, `.json()`, `.text()`, `.ok`       |
| _Generator_            | `function*`, `yield`, `.next()`, Feature(Memory, Infinite Lists, Control)                       |
| _Module Systems_       | ESModule (ESM) `export default, import from`, CommonJS (CSJ) `module.exports, require()`        |

| Control Flow         |                                                       |
| -------------------- | ----------------------------------------------------- |
| _Loops_              | For, For of, For in, break, continue, While, Do While |
| _Conditions_         | if else, Ternary `()?():()`, switch case              |
| _Exception Handling_ | `throw Error`, try catch, Utilizing Error Objects     |

| Expressions and Operators |                                                                      |
| ------------------------- | -------------------------------------------------------------------- |
| _Conditional Operators_   | Ternary `()?():()`, Optional `(?.)`, Nullish `(??)`                  |
| _The Comma Operator_      | (expression1, expression2, expression3) // Return expression3        |
| _Unary Operators_         | `delete obj.property;`, `typeof`, `void (0)`, `+""`, `i++`, `!` `!!` |
| _Assignment Operators_    | `=`, `+=` `-=` `*=` `/=`, `&&=` `\|\|=` `??=`, `{n, i} = user`       |
| _Comparison Operators_    | Relational `< > <= >=`, Loose `==`, Strict `===`                     |
| _Arithmetic Operators_    | Standard `+ - * /`, Modulo `%`, Power `**`,                          |

| Functions         |                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------- |
| _Parameters_      | Missing arguments, Default Params, Rest Params must be the last parameter              |
| _Aroow Fun_       | Syntax `()=>{};`, Implicit Return `()=>;`, No arguments object, No prototype, No super |
| _IIFE_            | (Immediately Invoked Function Expression) `( function(){} )(arg1, arg2)`               |
| _Argument Object_ | NOTE: The arguments object is Array-like, but it is NOT an actual Array                |
| _Scops_           | Global, Module, Function, Block                                                        |
| _Lexical Scoping_ | NOTE: Rules of Scope: It creates the boundaries before the code even runs.             |
| _Scope Chain_     | NOTE: the Running Process: it follows the "Chain" created by Lexical rules             |
| _Recursion_       | NOTE: Function Calling Itself, Base Case, Recursive Step                               |
| _Call Stack_      | (LIFO: Last In, First Out): Function Call, Function Return, Execution                  |
| _Closures_        | NOTE: A closure refers to a function along with its lexical environment.               |
| _Built-in funs_   | like `parseInt()`, `setTimeout()`, `and Math.random()`                                 |

| Asynchronous  |                                                              |
| ------------- | ------------------------------------------------------------ |
| _Timers_      | `setTimeout(callback, ms);`, `setInterval(callback, ms)`     |
| _CallBack_    | Async CallBack, Sync CallBack                                |
| _Promise_     | then.catch.finally, all , race , allSettled , any            |
| _Async/Await_ | Error handling try.catch.finally, `throw Error`, 2>/dev/null |
| _Event-Loop_  | VIP Lane TIMERS, POLL, CHECK, CLOSE                          |

| _`class`_     |                                      |
| ------------- | ------------------------------------ |
| Encapsulation | (`Private/Public`)                   |
| Abstraction   | (`Getters/Setters/Static Utilities`) |
| Inheritance   | (`Extends/Super`)                    |
| Polymorphism  | (`Treating Children like Parents`)   |
