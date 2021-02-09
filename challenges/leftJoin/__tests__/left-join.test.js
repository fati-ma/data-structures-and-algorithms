'use strict';
const HashMap = require('../hashtable.js');
const leftJoin = require('../left-join');

describe('returns a joined matrix', () => {
  
//     it ('accepts two hashmaps as arguments', () => {
//     let hashtable1 = new HashMap(16);
//     let hashtable2 = new HashMap(16);
//     hashtable1.set('fond', 'enamour');
//     hashtable1.set('wrath', 'anger');
//     hashtable1.set('diligent', 'employed');
//     hashtable1.set('outfit', 'garb');
//     hashtable1.set('guide', 'usher');
//     hashtable2.set('fond', 'averse');
//     hashtable2.set('wrath', 'delight');
//     hashtable2.set('diligent', 'idle');
//     hashtable2.set('guide', 'follow');
//     hashtable2.set('flow', 'jam');
//     let results = leftJoin(hashtable1, hashtable2);
//     expect(results).toEqual([['diligent', 'employed', 'idle'],['fond', 'enamour', 'averse'], ['guide', 'usher', 'follow'], ['wrath', 'anger', 'delight'], ['outfit', 'garb', null] ]);
//   });

  it ('returns null if either the first or right hashmaps is empty', () => {
    let hashtable1 = new HashMap(16);
    let hashtable2 = new HashMap(16);
    let result = leftJoin(hashtable1, hashtable2);
    console.log('Result:', result);
    expect(result).toBe(null);
  });

//   it ('returns an array in which the second index is null in each sub-array when no keys match between the two tables', () => {
//     let hashtable1 = new HashMap(16);
//     let hashtable2 = new HashMap(16);
//     hashtable1.set('fond', 'spice');
//     hashtable1.set('wrath', 'anger');
//     hashtable1.set('diligent', 'employed');
//     hashtable1.set('outfit', 'garb');
//     hashtable1.set('guide', 'usher');
//     hashtable2.set('sugar', 'averse');
//     hashtable2.set('salt', 'delight');
//     hashtable2.set('pepper', 'idle');
//     hashtable2.set('florence', 'follow');
//     hashtable2.set('waterfall', 'jam');
//     let results = leftJoin(hashtable1, hashtable2);
//     expect(results).toEqual([
//       [ 'diligent', 'employed', null ],
//       [ 'fond', 'spice', null ],
//       [ 'guide', 'usher', null ],
//       [ 'wrath', 'anger', null ],
//       [ 'outfit', 'garb', null ]]
//     );
//   });
})