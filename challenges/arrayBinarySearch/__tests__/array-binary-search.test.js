const binarySearch = require('../array-binary-search.js');

describe('test binary search array', () => {

    it("Invalid case when searchKey > array[array.length - 1] || searchKey < array[0] || searchKey === null || searchKey === undefined", () => {
        // let binarySearch = new BinarySearch();
        return expect(binarySearch([4, 8, 15, 23, 42], 16)).toEqual(-1);
    }),
        it("valid case should return empty array provided if empty array provided", () => {
            // let binarySearch = new BinarySearch();
             return expect(binarySearch([], 16)).toEqual("Please provide a non empty array");
        }),
        it("valid case should return 3  if 4, 8, 15, 23, 42, and 23 was the input", () => {
            // let binarySearch = new BinarySearch();
             return expect(binarySearch([4, 8, 15, 23, 42], 23)).toEqual(3);
        })

})