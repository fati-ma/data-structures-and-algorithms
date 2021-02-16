# Depth-First Traversal of a Graph

## Challenge
Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency

This solution uses recursion to visit each vertex and a set to keep track of each unique vertex that is in the graph.


Time: O(n^2)

Space: O(n)