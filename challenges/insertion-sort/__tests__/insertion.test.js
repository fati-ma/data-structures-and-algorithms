'use strict';

const InsertionSort = require('../insertion-sort');

describe('Insertion Sort', ()=>{

    it('The insertionSort() works correct by sorting the array elements from lowest to highest', ()=>{
        let arr = [2,14,9,30,5,78];
        expect(InsertionSort(arr)).toEqual([2,5,9,14,30,78]);
    })

    it('The insertionSort() should sort an array that contains duplicate values', ()=>{
        let arr = [2,14,9,30,14,5,78];
        expect(InsertionSort(arr)).toEqual([2,5,9,14,14,30,78]);
    })

    it('The insertionSort() should continue sorting partially sorted array [l-h]', ()=>{
        let arr = [2,5,9,78,14,30];
        expect(InsertionSort(arr)).toEqual([2,5,9,14,30,78]);
    })

    it('The insertionSort() should not change on an array that is already sorted [l-h]', ()=>{
        let arr = [2,5,9,14,30,78];
        expect(InsertionSort(arr)).toEqual([2,5,9,14,30,78]);
    })
})