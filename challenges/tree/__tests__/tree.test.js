'use strict';

const Node = require('../tree').Node;
const BinaryTree = require('../tree').BinaryTree;
const BinarySearchTree = require('../tree').BinarySearchTree;

describe('Binary Tree', () => {
  let tree = null;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    tree = new BinaryTree(one);
  });
  it('preorder()', () => {
    const expected = [1, 2, 4, 5, 3];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('inOrder()', () => {
    const expected = [4, 2, 5, 1, 3];
    const preOrder = tree.inOrder();
    expect(preOrder).toEqual(expected);
  });
  it('postOrder()', () => {
    const expected = [4, 5, 2, 3, 1];
    const preOrder = tree.postOrder();
    expect(preOrder).toEqual(expected);
  });

  it('findMaximumValue()', () => {
    // let node = new Node(7)
    // tree = new BinaryTree(node);
    tree.root.left.left.left = new Node(10);
    tree.root.left.left.right = new Node(100);
    tree.root.left.right.left = new Node(500);
    tree.root.left.right.right = new Node(600);
    expect(tree.findMaximumValue()).toEqual(600);

  });

  it('breadthFirst()', () => {
    tree.root.right.left = new Node(20);
    tree.root.right.right = new Node(755);
    console.log(tree);
    expect(tree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 20, 755, 10, 100, 500, 600]);
  });

});
describe('Binary search Tree', () => {
  let binarySearchTree = new BinarySearchTree();

  it('Can successfully instantiate an empty tree', () => {
    binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    binarySearchTree.root = new Node(60);
    expect(binarySearchTree.root.value).toEqual(60);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    binarySearchTree.root.left = new Node(50);
    binarySearchTree.root.right = new Node(70);
    binarySearchTree.root.left.left = new Node(40);
    binarySearchTree.root.left.right = new Node(55);
    expect(binarySearchTree.root).not.toBe(null);
    expect(binarySearchTree.root.left).not.toBe(null);
    expect(binarySearchTree.root.right).not.toBe(null);
    // binarySearchTree = new BinarySearchTree();
    // binarySearchTree.add(50);
    // binarySearchTree.add(70);
    // binarySearchTree.add(40);
    // console.log(binarySearchTree);
    // expect(binarySearchTree.root.left.value).toBe(70);
    // expect(binarySearchTree.root.right.value).toBe(40);
  });
  it('contains()', () => {
    binarySearchTree.add(3);
    const contains = binarySearchTree.contains(3);
    const notContains = binarySearchTree.contains(12);
    expect(contains).toBe(true);
    expect(notContains).toBe(false);
  });
  // it('findMaximumValue()', () => {
  //   binarySearchTree = new BinarySearchTree();
  //   binarySearchTree.add(5);
  //   binarySearchTree.add(3);
  //   binarySearchTree.add(9);
  //   expect(binarySearchTree.findMaximumValue()).toBe(9);
  //   binarySearchTree.add(15);
  //   expect(binarySearchTree.findMaximumValue()).toBe(15);
  // });
});