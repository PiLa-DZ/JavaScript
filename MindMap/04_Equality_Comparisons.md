# Equality Comparisons

## Loose Equality `==`

- Type Coercion: Automatically Converts Types
- Algorithms: isLooselyEqual
- TODO: ALWAYS use (Strict Equality `===`)

## Strict Equality `===`

- Algorithms: isStrictlyEqual
- NaN Value: `NaN Not Equal NaN`
- Same-Value-Zero: (0 Equal -0)

## Object.is

- Algorithms: isStrictlyEqual
- NaN Value: `NaN Equal NaN`
- Same-Value: `0 Not Equal -0`

## Relational Comparisons

- `>, <, >=, <=`
- If both Strings: compares alphabetically
- else: Convert To Number
