'use strict';

/*
Write tests to prove the following functionality:

Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
*/
const HashTable = require("../hashtable");

describe('------------Hash Table(Map)-------------', () => {
  it('Should instantiate a new HashTable', ()=> {
    let newTable = new HashTable(2);
    expect(newTable[0]).toEqual(undefined);
  })

  it('Should return the value given a key ', () => {
    let newTable = new HashTable(20);
    newTable.set('cat', 'balck');
    newTable.set('dog', 'white');
    newTable.set('bird', 'yellow');
    newTable.set('dolphine', 'gray');
    expect(newTable.get('dog')).toEqual('white');
  })

  it('Should return the value given a key in a map with collisions ', () => {
    let newTable = new HashTable(3);
    newTable.set('cat', 'balck');
    newTable.set('dog', 'white');
    newTable.set('bird', 'yellow');
    newTable.set('dolphine', 'gray');
    expect(newTable.get('dog')).toEqual('white');
  })
  it('Should return null for a key that does not exist in the hash table', () => {
    let newTable = new HashTable(20);
    newTable.set('cat', 'balck');
    newTable.set('dog', 'white');
    newTable.set('bird', 'yellow');
    newTable.set('dolphine', 'gray');
    expect(newTable.get('panda')).toEqual(null);
  })

  it('Should return null when given a key not in a table with collisions ', () => {
    let newTable = new HashTable(3);
    newTable.set('cat', 'balck');
    newTable.set('dog', 'white');
    newTable.set('bird', 'yellow');
    newTable.set('dolphine', 'gray');
    expect(newTable.contains('panda')).toEqual(false);
  })

  it('Should hash a key to an in range value', () => {
    let newTable = new HashTable(100);
    expect(newTable.hash('test')).toBeLessThan(100);
  })
})