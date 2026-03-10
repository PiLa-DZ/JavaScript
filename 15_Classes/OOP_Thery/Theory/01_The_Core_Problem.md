### 1. The Core Problem: "Spaghetti vs. Legos"

#### In a Procedural (C) world, 
your code is like a long recipe. 
You have your data over here and your functions over there.

#### The Risk: 
Any function can touch any piece of data. 
If you change a variable name at the top of your program, 
100 functions might break at the bottom. 
This is called High Coupling.


#### In an OOP world, 
we stop thinking about "steps" 
and start thinking about "Objects." 

* The Solution: 
    We bundle the data and the logic together into a "Lego brick." 
    One brick doesn't need to know how the other brick works inside; 
    they just click together.


