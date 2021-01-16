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

  it('Can successfully instantiate an empty tree', () => {
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    expect(tree.add(5).root.value).toEqual(5);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(9);
    console.log(tree);
    expect(tree.root.left.value).toBe(3);
    expect(tree.root.right.value).toBe(9);
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
});
describe('Binary Search Tree', () => {
  let binarySearchTree = new BinarySearchTree();

  it('contains()', () => {
    binarySearchTree.add(3);
    const contains = binarySearchTree.contains(3);
    const notContains = binarySearchTree.contains(12);
    expect(contains).toBe(true);
    expect(notContains).toBe(false);
  });
});