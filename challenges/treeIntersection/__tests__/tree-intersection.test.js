'use strict';

const treeIntersection = require ('../tree-intersection.js');
const {Node, BinaryTree} = require ('../tree.js');

describe ('Tree Intersection ', () => {
//   it('should return a list of unique tree values when provided two trees', ()=> {
//     let nodeOne = new Node (4);
//     let treeOne = new BinaryTree (nodeOne);
//     treeOne.add(2);
//     treeOne.add(1);
//     treeOne.add(3);
//     treeOne.add(6);
//     treeOne.add(5);
//     treeOne.add(7);
//     // console.log({treeOne});
//     let nodeTwo = new Node (5);
//     let treeTwo = new BinaryTree (nodeTwo);
//     treeTwo.add(7);
//     treeTwo.add(18);
//     treeTwo.add(32);
//     treeTwo.add(6);
//     treeTwo.add(54);
//     treeTwo.add(17);
//     // console.log({treeTwo});
//     expect(treeIntersection(treeOne, treeTwo)).toEqual([5,7,6]);
//   })
  it('should return null if either tree does not exist', ()=> {
    let treeOne = new BinaryTree();
    let treeTwo = new BinaryTree();
    expect(treeIntersection(treeOne, treeTwo)).toBe(null);
  })
//   it('should return the first tree values if passed two identical trees', () => {
//     let nodeOne = new Node (4);
//     let treeOne = new BinaryTree (nodeOne);
//     treeOne.add(2);
//     treeOne.add(1);
//     treeOne.add(3);
//     treeOne.add(6);
//     treeOne.add(5);
//     treeOne.add(7);
//     // console.log({treeOne});
//     let nodeTwo = new Node (4);
//     let treeTwo = new BinaryTree (nodeTwo);
//     treeTwo.add(2);
//     treeTwo.add(1);
//     treeTwo.add(3);
//     treeTwo.add(6);
//     treeTwo.add(5);
//     treeTwo.add(7);
//     // console.log({treeTwo});
//     expect(treeIntersection(treeOne, treeTwo)).toEqual([4,2,1,3,6,5,7]);
//   })
//   it('should return a list of unique tree values when provided two trees even if negative or duplicate', ()=> {
//     let nodeOne = new Node (4);
//     let treeOne = new BinaryTree (nodeOne);
//     treeOne.add(2);
//     treeOne.add(-1);
//     treeOne.add(3);
//     treeOne.add(6);
//     treeOne.add(-5);
//     treeOne.add(7);
//     // console.log({treeOne});
//     let nodeTwo = new Node (5);
//     let treeTwo = new BinaryTree (nodeTwo);
//     treeTwo.add(7);
//     treeTwo.add(18);
//     treeTwo.add(32);
//     treeTwo.add(6);
//     treeTwo.add(-54);
//     treeTwo.add(7);
//     // console.log({treeTwo});
//     expect(treeIntersection(treeOne, treeTwo)).toEqual([7,6]);
//   })
})