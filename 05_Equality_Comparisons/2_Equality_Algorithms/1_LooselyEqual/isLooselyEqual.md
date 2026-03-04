- ============================================================
- Equality Algorithms: isLooselyEqual
- ============================================================
## isLooselyEqual: runs when you use the == operator.
### The Algorithm's Mission
    turn everything into a Number

### ========================================================
0
    - (NaN == NaN)      --> false
    - (NaN == Anything) --> false
### --------------------------------------------------------
1 (The "Exclusive Club" Rule)
    - (null      == undefined) --> true
    - (null      == Anything ) --> false
    - (undefined == null     ) --> true
    - (undefined == Anything ) --> false
### --------------------------------------------------------
2 
    - (Symbol  == Anything) --> false
    - (Boolean == Anything) Number(Boolean)
    - (String  == Anything) Number(String)
### --------------------------------------------------------

3   Object vs. Primitive (String/Number/Symbol)
    the Object is converted to a primitive using the internal ToPrimitive operation (which calls .toString() or .valueOf()).
    isLooselyEqual([10], 10) --> isLooselyEqual("10", 10) --> true.
### --------------------------------------------------------

!=
When the JavaScript engine sees != (Loose Inequality), 
it essentially runs the == 
(Loose Equality) algorithm and then flips the result.
