# Expressions and Operators

## Conditional Operators

- Ternary (? :) --> `(condition) ? trueValue : falseValue;`
- Optional (?.) --> `user.profile?.name` // undefined (doesn't crash!)
- Nullish (??) ---> `v1 ?? v2` // (Return v1 if NOT null or undefined)

## The Comma Operator (,)

- (expression1, expression2, expression3) // Return expression3
- (Code.., Code..., Code..., Return)

  ```js
  const logAndAdd = (a, b) => (console.log("Adding numbers..."), a + b);
  ```

## Unary Operators (Single Operand)

1. Delete Operator (delete) ---------> `delete obj.property;`
2. Typeof Operator (typeof) ---------> `typeof value`
3. Void Operator (void) -------------> `void (0);` // returns undefined (The "Dev/Null" Use Cases)
4. Unary Plus and Negation (+, -) ---> convert operands into numbers
5. Increment and Decrement (++, --) -> (i++ return value before) (++i return value after)
6. Logical NOT (!) ------------------> flips the truthiness of a value.
7. double NOT (!!) ------------------> convert value into its actual Boolean equivalent.

## Assignment Operators

1. Assignment -----> `=`
2. Compound -------> `+= -= *= /=`
3. Logical --------> `&&= ||= ??=`
4. Destructuring --> `{ name, id } = user`

## Comparison Operators

1. Relational --> `<, >, <=, >=` (Works like C++/Bash).
2. Loose `==` ----> NOTE: Avoid this in backend code.
3. Strict `===` --> Compared obj by reference (memory address)

## Arithmetic Operators

1. Standard -----> `+, -, *, /`
2. Modulo `%` -----> even/odd
3. Exponent `**` --> powers `2** 3` Result --> 8
4. BUG ----------> Trap: + will concatenate strings
5. NaN ----------> Result of invalid math `"hello" \* 2` Result --> `NaN`
