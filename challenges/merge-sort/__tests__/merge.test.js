'use strict';

const Mergesort = require('../merge-sort.js');

describe ('Merge Sort', () => {
  it('The merge sort function should sort an array lowest to highest', ()=> {
    let array = [5,8,99,3,2,89,45,17];
    expect(Mergesort(array)).toEqual([2,3,5,8,17,45,89,99]);
  })

  it('The merge sort function should not change an array that is already in order from lowest to highest', ()=> {
    let array = [2,5,8,17,45,89];
    expect(Mergesort(array)).toEqual([2,5,8,17,45,89]);
  })

  it('The merge sort function should finish sorting an array lowest to highest that is already partially sorted', ()=> {
    let array = [2,5,8,45,17,89];
    expect(Mergesort(array)).toEqual([2,5,8,17,45,89]);
  })

  it('The merge sort function should sort an array lowest to highest that contains duplicate values', ()=> {
    let array = [5,8,45,2,89,45,17];
    expect(Mergesort(array)).toEqual([2,5,8,17,45,45,89]);
  })
})