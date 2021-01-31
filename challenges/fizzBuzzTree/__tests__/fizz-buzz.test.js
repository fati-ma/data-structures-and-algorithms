'use strict';

const { Node, kTree, FizzBuzzTree } = require('../fizz-buzz-tree');

let kTestTree;

describe('FizzBuzzTree', () => {
  it('Throw error if the tree is empty', () => {
    const tree = new kTree();
    expect(() => {
        FizzBuzzTree(tree);
    }).toThrow();
  });
});