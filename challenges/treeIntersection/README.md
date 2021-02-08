# Tree Intersection

A function that takes in two binary trees and returns an array of the non-duplicate values.

## Challenge

- Write a function called `tree_intersection` that takes two binary tree parameters.
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach, Efficiency 

This approach involves traversing through each tree and checking to see if its value is already in the hash map, if it is not, it is placed in the map and in an output array. 

- Time: O(n)
- Space: O(n)


## API

![tree-intersection](assets/tree-intersection.PNG)