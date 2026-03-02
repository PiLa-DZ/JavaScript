1. The Hard Rules (Syntax)
Allowed Characters: Letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
No Leading Digits: A name cannot start with a number (e.g., 1user is invalid, but user1 is fine).
Case Sensitivity: myVariable and myvariable are two completely different spots in memory.
No Reserved Words: You cannot name a variable after language keywords (e.g., let const = 10; or let function = "test";).
No Spaces: Use my_variable or myVariable, never my variable.

2. The Professional Standards (Convention)
Lower Camel Case (Standard)
    This is the default for almost all variables and functions in JavaScript.
    Good: isAdmin, currentUser, getSystemUpdate.
    Bad: is_admin (Snake case is usually reserved for Python or Rust).
PascalCase (Classes/Types)
    Used for Classes, Interfaces, and Type aliases.
    Example: class UserProfile {}, type AdminStatus = boolean;.
UPPER_SNAKE_CASE (Constants)
    Reserved for hard-coded values that never change throughout the life of the application.
    Example: const MAX_RETRY_ATTEMPTS = 5;, const API_URL = "https://api.archlinux.org";.

3. Special Characters: _ and $
The Underscore (_):
    Private/Internal: Often used to denote a "private" variable that shouldn't be touched from outside an object (e.g., _internalId).
    Unused: In your TypeScript setup, you might see const [_, setItem] = .... The _ tells the compiler (and other devs) "I'm ignoring this specific value."
The Dollar Sign ($):
    DOM Elements: Often used to identify variables that hold HTML elements (e.g., const $submitBtn = ...).
    Observables: In reactive programming (like RxJS), it identifies an asynchronous stream (e.g., data$).
