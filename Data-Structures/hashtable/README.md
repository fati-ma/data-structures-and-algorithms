# Hashtables
Define a hash map class with the following methods: hash, set, get and contains.

## Challenge

Implement a Hashtable with the following methods:

1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. `get`: takes in the key and returns the value from the table.
3. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach, Efficiency and API

- hash() --> Performs a calculation on a given key that turns it into a single repeatable integer and operates with an efficiency of O(1).
- set() --> Adds a key/value pair to the hash table and does so with an efficiency of O(n).
- get() --> Returns a value for a given key and does so with an efficiency of O(n).
- contains() --> Returns a boolean given a key. Returns true if the key currently exists in the hash map and false if not. This method has an efficiency of O(n).

