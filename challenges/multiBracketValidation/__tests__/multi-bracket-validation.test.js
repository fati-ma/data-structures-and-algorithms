'use strict';

const multiValidate = require('../multi-bracket-validation.js');

let balancedString = '(one[two{three}two]one)';
let unbalancedString = '(one[two{threetwo]one)';
let unbalancedString2 = '(one[two{threetwoone';
let noBrackets = 'onetwothreetwoone';
let emptyStr = '';
let balanced = '()(){}[]()';
let unbalanced = ')(}{][';

describe ('Multi-bracket Validator', () => {

  it ('1. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(balancedString)).toBe(true);
  })

  it ('2. Should return false when a string with unbalanced brackets is provided.', ()=>{
    expect(multiValidate(unbalancedString)).toBe(false);
  })

  it ('3. Should return false when a string with unbalanced brackets is provided.', ()=>{
    expect(multiValidate(unbalancedString2)).toBe(false);
  })

  it ('4. Should return false when a string with no brackets is provided.', ()=>{
    expect(multiValidate(noBrackets)).toBe(false);
  })

  it ('5. Should return false when a string empty.', ()=>{
    expect(multiValidate(emptyStr)).toBe(false);
  })

  it ('6. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(balanced)).toBe(true);
  })

  it ('7. Should return false when a string with unbalanced brackets is provided.', ()=>{
    expect(multiValidate(unbalanced)).toBe(false);
  })
})