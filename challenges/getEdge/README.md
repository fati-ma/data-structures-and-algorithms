# Graphs - Get the Edge

## Challenge

Write a function `getEgde` which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency

I used the predefined metod I built before `getNeighbors` to get the adjacent vertices of each vertix and then I checked if they are connected or not 

`getEgde()` return True if they are direct neighbors and sums their edge weights. Returns False and Zero if not.

- Big (O):

**Time** = O(n^2)

**Space** = O(n)

