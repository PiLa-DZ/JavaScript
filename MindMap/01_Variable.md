*** Varaible ***

var
    Declaration Before Initialization
    Re-assignment  --> Yes
    Re-declaration --> Yes
    Scope          --> Function-Scoped
    Hoisting       --> Top of the script
let 
    Declaration Before Initialization
    Re-assignment  --> Yes
    Re-declaration --> No
    Scope          --> Block-Scoped
    Hoisting       --> Temporal Dead Zone (TDZ)
const 
    must be declared and initialized at the same time
    Re-declaration --> No
    Re-assignment  --> No
    Scope          --> Block-Scoped
    Hoisting       --> Temporal Dead Zone (TDZ)
Naming-Rules
    (a-z, A-Z, 0-9, _, $)
    Cannot start with a number
    Case Sensitivity
    No Reserved Words
    No Spaces
Naming Conventions
    Lower Camel Case (Standard)      `isAdmin`
    PascalCase       (Classes/Types) `UserProfile`
    UPPER_SNAKE_CASE (Never change)  `API_URL`
Special Characters The Underscore (_):
        Private/Internal variable `_internalId`
        Unused Varaible (_, args)
Scope (Global-Scope, Function-Scope, Block-Scope, Scope-Chain)
Error (ReferenceError, SyntaxError)
Hoisting
Declaration 
Initialization
Re-assignment
Re-declaration
