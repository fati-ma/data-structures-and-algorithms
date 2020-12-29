# Binary search in a sorted 1D array
Finding an element using a function called BinarySearch, without using built-n methods.
It was done using JavaScript.

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
I Create a function BinarySearch(array,searchKey)
then check for error cases that can let us fail fast
after that I defined variables startIndex = 0 and endIndex = array.length – 1
Then loop while startIndex <= endIndex
I declared midIndex = array.length/2
If array of midIndex = searchKey, then the element is found, return midIndex (end of loop)
If array of midIndex < searchKey, then set startIndex to midIndex
If array of midIndex > searchKey, then set endIndex to midIndex
We didn’t find the element, so return -1.

Time complexity: O(log n).
Space complexity: O(1).

## Solution

![array-bianry-search](/arrayBinarySearch/assets/array-bianry-search.png)
