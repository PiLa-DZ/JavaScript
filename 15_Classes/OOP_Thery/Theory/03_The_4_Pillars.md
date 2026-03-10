### The 4 Pillars of OOP Theory

A. Encapsulation (`Privacy`)
    This is the "Black Box" theory. 
    You can drive a car without knowing how the internal combustion engine works. 
    The engine is "Encapsulated." 
    You only interact with the steering wheel and pedals.

    Why? 
        So you can change the engine later without 
        the driver having to learn a new way to drive.

B. Abstraction (`Simplicity`)
    You don't need to see the thousands of wires behind your dashboard. 
    You just see a "Check Engine" light. 
    Abstraction is about hiding complexity and only showing the essentials.

    Why? To reduce the mental load on the programmer.

C. Inheritance (`Classification`)
    A "Truck" is a type of "Vehicle." 
    A "Motorcycle" is also a type of "Vehicle." 
    Instead of writing the code for "wheels" and "engines" for both, 
    you write a "Vehicle" blueprint once, and the others "Inherit" those features.

    Why? To stop repeating the same code (DRY - Don't Repeat Yourself).

D. Polymorphism (`Flexibility`)
    The word means "Many Shapes." In theory, 
    if you have a start() command, 
    it should work for a Car, a Boat, or a Jet. 
    The user just says start(), 
    and the object knows how to handle it in its own way.

    Why? 
        So you can write one command 
        that works for many different types of objects.
