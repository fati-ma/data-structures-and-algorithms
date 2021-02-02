# Quick Sort


### Author: Fatima Atieh


## Challenge Summary

Create a function that sorts an array in place from lowest to hightest value using the quick sort algorithm.



## Challenge Description

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Quick Sort based on the pseudocode provided.

![pseudocode](assets/quick-sort.png)

## Approach & Efficiency

### Approach

This algorithm splits the original array in to equal or near equal parts and creates a pointer at either end of the array. The left pointer is compared to the pivot (middle value) if it is less than the pivot it stays where it is and the pointer moves one to the right. If the left pointer points to a value greater than the pivot, the right pointer value is compared to the pivot. If the right pointer value is greater than the pivot the right pointer moves one index to the left and compares again. If the left pointer indicates a value greater than the pivot and the right pointer indicates a value less than the pivot then the two values swap positions. This is repeated until the pointers meet in the middle. At this point the function recurses on the left half and right half of the partially sorted array. This continues until all values are in order.

### Big(O)

- Time = O(nlogn)
- Space = O(1)

## Solution

![code](assets/quick-sort-code.png)