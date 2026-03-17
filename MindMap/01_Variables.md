# Variables

## Var Const Let

| `var`                                      |                   |
| ------------------------------------------ | ----------------- |
| _Can Be Declaration Before Initialization_ | Rule              |
| _Re-assignment_                            | Yes               |
| _Re-declaration_                           | Yes               |
| _Scope_                                    | Function-Scoped   |
| _Hoisting_                                 | Top of the script |

| `let`                                      |                          |
| ------------------------------------------ | ------------------------ |
| _Can Be Declaration Before Initialization_ | Rule                     |
| _Re-assignment_                            | Yes                      |
| _Re-declaration_                           | No                       |
| _Scope_                                    | Block-Scoped             |
| _Hoisting_                                 | Temporal Dead Zone (TDZ) |

| `const`                                             |                          |
| --------------------------------------------------- | ------------------------ |
| _must be declared and initialized at the same time_ | Rule                     |
| _Re-assignment_                                     | No                       |
| _Re-declaration_                                    | No                       |
| _Scope_                                             | Block-Scoped             |
| _Hoisting_                                          | Temporal Dead Zone (TDZ) |

## Naming-Rules

1. `a-z, A-Z, 0-9, _, $`
1. Cannot start with a number
1. Case Sensitivity
1. No Reserved Words
1. No Spaces

## Naming Conventions

1. Lower Camel Case (Standard) `isAdmin`
1. PascalCase (Classes/Types) `UserProfile`
1. UPPER_SNAKE_CASE (Never change) `API_URL`

## Special Characters The Underscore (`_`)

1. Private/Internal variable `_internalId`
1. Unused Varaible (`_`, args)

## You have to learn about

1. Scope (Global-Scope, Function-Scope, Block-Scope, Scope-Chain)
1. Error (ReferenceError, SyntaxError)
1. Hoisting
1. Declaration
1. Initialization
1. Re-assignment
1. Re-declaration
