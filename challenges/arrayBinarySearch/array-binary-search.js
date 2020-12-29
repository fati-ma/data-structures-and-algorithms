'use strict';

function BinarySearch(array, searchKey) {

    if (array.length < 1) {
        return 'Please provide a non empty array';
    }

    //FAIL cases
    // if (searchKey > array[array.length - 1] || searchKey < array[0] || searchKey === null || searchKey === undefined) {
    //     return -1;
    // }

    //Valid cases --> search for the value
    var startIndex = 0;
    var endIndex = array.length;

    while (startIndex < endIndex) {

        let midIndex = Math.floor((endIndex + startIndex) / 2);

        if (array[midIndex] === searchKey) {
            return midIndex;
        }
        else if (array[midIndex] < searchKey) {
            startIndex = midIndex + 1;
        }
        else {
            endIndex = midIndex;
        }
        console.log('Array', array);
        console.log('Search Key', searchKey);
    }
    return -1;
}
console.log('Result of binary search',BinarySearch([4,8,15,16,23,42], 15));

module.exports = BinarySearch;