'use straict';

function insertShiftArray(arr, value) {

  let midIdx = Math.ceil((arr.length) / 2);
  console.log('Middle Index:',midIdx);

  let shiftArr = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i < midIdx)
    shiftArr[i] = arr[i];
    else if (i > midIdx)
    shiftArr[i] = arr[i - 1];
    else
    shiftArr[i] = value;

  }
  console.log('input array: ',arr);
  console.log('input value: ',value);
  return shiftArr;
}
let arr = [4,8,15,23,42];
console.log('New shifted array:',insertShiftArray(arr, 16));