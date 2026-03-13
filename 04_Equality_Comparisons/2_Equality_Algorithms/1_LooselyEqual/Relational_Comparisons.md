### Relational Comparisons (>, <, >=, <=)

1. ToPrimitive

2. If both Strings: it compares them alphabetically (Lexicographically) based on Unicode values.

3. The "Number First" Rule: converts both sides to Numbers.

```js
null      >  0 // false (Number(null)      is 0   --> 0   >  0 is false       )
null      >= 0 // true  (Number(null)      is 0   --> 0   >= 0 is true        )
undefined >  0 // false (Number(undefined) is NaN --> NaN >  0 is always false)
true  > 0      // true  (1 > 0)
false < 1      // true  (0 < 1)

```
