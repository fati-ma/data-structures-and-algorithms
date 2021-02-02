'use strict';

const quickSort = require('../quick-sort.js');

describe ('Quick Sort', () => {
  it('The quick sort function should sort an array lowest to highest', ()=> {
    let array = [8,4,23,42,16,15];
    expect(quickSort(array)).toEqual([4,8,15,16,23,42]);
  })

  it('The quick sort function should not change an array that is already in order from lowest to highest', ()=> {
    let array = [4,8,15,16,23,42];
    expect(quickSort(array)).toEqual([4,8,15,16,23,42]);
  })

  it('The quick sort function should finish sorting an array lowest to highest that is already partially sorted', ()=> {
    let array = [4,8,16,15,23,42];
    expect(quickSort(array)).toEqual([4,8,15,16,23,42]);
  })

  it('The quick sort function should sort an array lowest to highest that contains duplicate values', ()=> {
    let array = [8,4,15,23,42,16,15];
    expect(quickSort(array)).toEqual([4,8,15,15,16,23,42]);
  })
})