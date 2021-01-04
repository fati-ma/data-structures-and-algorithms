# Singly Linked Lists

Defining three methods `insert()` `includes()` `toString()` on linked list. It was done using JavaScript.


# Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
   - Define a method called `insert` which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
   - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
   - Define a method called `toString` (or `__str__` in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
      - "{ a } -> { b } -> { c } -> NULL"


# Approach & Efficiency

**insert**:

- Time – O(1)
- Space – O(1)

**includes**:

- Time - O(n)
- Space - O(1)

**toString**:

- Time - O(n)
- Space - O(n)


# API

![linked-lists-cc05](linkedList/assets/linkedList-cc05.png)

