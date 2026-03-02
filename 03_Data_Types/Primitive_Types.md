```js
/*
  Type      | Example            | TypeScript Usage
 ======================================================================
  string    | "Arch"             | name: string
  number    | 42 or 3.14         | count: number
  boolean   | true               | isAdmin: boolean
            |                    |
 -----------+--------------------+-------------------------------------
  undefined | undefined          | Often used in optional types ?
  null      | null               | "Used for ""no data"" from APIs"
            |                    |
 -----------+--------------------+-------------------------------------
  bigint    | 9007199254740991n  | Scientific/Financial math
  symbol    | Symbol('id')       | Advanced library/meta programming
            |                    |
*/
```

1. The Big Three (Most Common)
string: Used for text. Can be defined with single quotes ', double quotes ", or backticks ` for template literals.
number: All numbers in JS are double-precision 64-bit floats. There is no separate "integer" type at the primitive level.
boolean: Only two possible values: true or false. (This is what your person is admin predicate returns!).

2. The "Absence" Types
null: Represents the intentional absence of any object value. You set something to null to say "this is empty."
undefined: Represents a variable that has been declared but has not yet been assigned a value. It’s the default state of things in JS.

3. The Specialized Types
bigint: Used for integers larger than $2^{53} - 1$. Created by appending n to a number (e.g., 100n).
symbol: A unique and anonymous identifier. Mostly used as keys for object properties to avoid name collisions.




