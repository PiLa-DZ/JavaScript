```js
class Parent {
    static hello // Static Members
    #password; // Private Fields
    constructor() {
        this
    }
}
class Child extends Parent {
    constructor() {
        super();
    }
}
new
```
### ============================================================
Class `Blueprint`
    Public Properityies
    Private Properityies
    Constructor `Factory` (Argoments `Values`)
        Methods
        Properityies
    Public Methods      
    Private Methods

### --------------------------------------------------------
> [!NOTE]
> Static   --> `It will be use for Blueprint itself`       (class A{})
> Instance --> `It will be use for Instance Object itself` (a new A())
> 

Abstract Classes (Logic only)

Class
    Constructor(Argoments | Default Argoments) --> Instance Object (this)
        Instance Public  Properity 
        Instance Private Properity
        Default Instance Public  Properity
        Default Instance Private Properity
        // Logic
    Prototype
        Instance Public  Method
        Instance Private Method ???
    Static Public  Properity
    Static Private Properity
    Static Public  Method
    Static Private Method
    // Get
    // Set
    // Overload
    // Alternative-Constructors

Instance Class (Extends)
    (Super)
    // Override
    // Overload
    
### ============================================================
Class (The Blueprint)
 ├── Static (Blueprint Level)
 │    ├── Public/Private Properties (Global Class Data)
 │    ├── Public/Private Methods (Tools/Alternative Constructors)
 │    └── Get/Set (For Static properties)
 ├── Instance (Object Level)
 │    ├── Fields (Default Properties)
 │    ├── Constructor (The Assembly Line using Arguments)
 │    │    ├── Instance Public/Private Properties
 │    │    └── super() (If inheriting)
 │    └── Prototype (Shared Instance Methods)
 │         ├── Public Methods (Actions)
 │         └── Get/Set (Calculated Properties like 'fullName')
 └── Inheritance (The Family Tree)
      ├── Extends (Link to Parent)
      ├── Override (Replacing Parent Logic)
      └── Polymorphism (Treating Child like Parent)























### ============================================================

Instance Objects | Instance Members

Override & Overload
Alternative-Constructors

### ============================================================

### ------------------------------------------------------------
Encapsulation Security    (Black Box). 
Get Set
Private

### ------------------------------------------------------------
Abstraction   Simplicity  (Easy to use).
Abstraction-Class
Alternative-Constructors

### ------------------------------------------------------------
Inheritance   Reuse       (DRY).

### ------------------------------------------------------------
Polymorphism  Flexibility (Handling different things with one command).

### ------------------------------------------------------------
### ============================================================
Constructor (The Factory)
Prototype --(The Parent Object)
Instance ---(The Child)

### ============================================================
Class Methods:
	constructor() 	A special method for creating and initializing objects created within a class

Class Keywords:
	extends 	Extends a class (inherit)
	static		Defines a static method for a class
	super		Refers to the parent class
