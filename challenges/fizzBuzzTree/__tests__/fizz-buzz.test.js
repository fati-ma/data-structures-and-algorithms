'use strict';

const { Node, kTree, FizzBuzzTree } = require('../fizz-buzz-tree');

let kTestTree;

describe('FizzBuzzTree', () => {
  beforeEach(() => {
    const one = new Node(1);
    const two = new Node(15);
    const three = new Node(3);
    const four = new Node(5);
    const five = new Node(2);
    const six = new Node(8);

    one.children.push(two, three, four, five);
    four.children.push(six);

    kTestTree = new kTree(one);
  });
  it('FizzBuzzTree returns a tree', () => {
    FizzBuzzTree(kTestTree);
    expect(kTestTree.root.value).toEqual('1');
    expect(kTestTree.root.children[0].value).toEqual('FizzBuzz');
  });
  it('Throw error if the tree is empty', () => {
    const tree = new kTree();
    expect(() => {
        FizzBuzzTree(tree);
    }).toThrow();
  });
});