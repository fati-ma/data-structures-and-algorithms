'use strict';

function Mergesort (array) {
    if (array.length <= 1){
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
  
    return merge (Mergesort(left), Mergesort(right));
  }
  
  function merge(left, right) {
    let outputArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while(leftIndex < left.length && rightIndex < right.length){
      if (left[leftIndex] < right[rightIndex]){
        outputArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        outputArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return outputArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  module.exports = Mergesort;