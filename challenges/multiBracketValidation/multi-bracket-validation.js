'use strict';

function multiFunctionValidate (inputString) {


  if(!inputString) return false;

  let testArr = [];
  let bracketCheck = false;

  for (let i = 0; i < inputString.length; i++) {
    if(inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '['){
        testArr.push(inputString[i]);
      bracketCheck = true;
      continue;
      }
    if(inputString[i] === ')' || inputString[i] === '}' || inputString[i] === ']'){
      bracketCheck = true;
      if((inputString[i] === ')') && (testArr[testArr.length - 1] !== '(')) {
        return false;
      } else if (inputString[i] === '}' && testArr[testArr.length - 1] !== '{') {
      return false;
      } else if (inputString[i] === ']' && testArr[testArr.length - 1] !== '[') {
        return false;
      } else {
        testArr.pop();
      };
    }
  }
  if(testArr.length === 0 && bracketCheck === true) {
    return true;
  } else {
    return false;
  }

}

module.exports = multiFunctionValidate;