*** Equality Comparisons ***

Loose Equality  `==` 
    --> Type Coercion
    --> Algorithms: isLooselyEqual
    --> ALWAYS use (Strict Equality ===)

Strict Equality `===` 
    --> Algorithms: isStrictlyEqual
    --> (NaN Not Equal NaN)
    --> Same-Value-Zero (0 Equal -0)

Object.is  
    --> Algorithms: isStrictlyEqual
    --> (NaN Equal NaN)
    --> Same-Value (0 Not Equal -0)

*** Relational Comparisons *** (>, <, >=, <=)
    If both Strings: compares alphabetically
    else: Convert To Number
