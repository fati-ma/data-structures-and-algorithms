# Challenge Summary
Adding an input value in the middle of an array without using a built-in function

## Challenge Description
Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
I first created a function called `insertShiftArray` and passed it an array and a value, then I found the middle index in the array, then initialized a new array `shiftArr` to store the elements of the input array `arr` after adding the input value, then I looped over the input array `arr` and used if conditions to decide where to add the input value and to make sure it will be in the middle.  

## Solution
![array-shift-1](arrayShift/assets/array-shift-1.JPG)
![array-shift-2](arrayShift/assets/array-shift-2.JPG)