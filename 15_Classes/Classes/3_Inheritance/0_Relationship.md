1. The Logic: "Is-A" Relationship

Inheritance represents an "Is-A" connection:

A Laptop is a Product.

A Book is a Product.

The Product (Parent) contains the generic logic (name, price), 
while the Laptop (Child) contains specific logic (RAM, CPU).

2. ⚠️ What is NOT inherited? (The Privacy Wall)

security rule: Private Fields (#) are NOT inherited.

The Child class cannot see the Parent's #price.

Only the Parent's own methods can touch its private data.

Why? It prevents "Hard Coupling." 
If you change the private internal logic of the Parent, 
you don't want to accidentally break 50 different Child classes.
