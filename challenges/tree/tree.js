'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    //Root -> Left -> Right
    preOrder() {
        const results = [];
        const _traverse = (node) => {
            results.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }

        _traverse(this.root);
        return results;
    }

    //Left -> Root -> Right
    inOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            results.push(node.value);
            if (node.right) _traverse(node.right);
        };

        _traverse(this.root);
        return results;
    }

    //Left -> Right -> Root
    postOrder() {
        const results = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            results.push(node.value);
        };

        _traverse(this.root);
        return results;
    }

    findMaximumValue(){

        if(!this.root) return 'Tree is empty!';

        let maxVal = this.root.value; //let max = root. NOT 0 or make sure that the nodes are all positive
        const _traverse = (node) => { //create recursive function to traverse tree
          if(maxVal < node.value){ //check if node is greater than previous node
            maxVal = node.value; //if true then assign current node.value to maxVal
          }
          if(node.left) {
            _traverse(node.left); //re-call the function for the left child
          }
          if(node.right){
            _traverse(node.right); //re-call the function for the right child
          }
        }
        _traverse(this.root); //invoke the recursive function to start
        return maxVal; //return the max value
      }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        let node = new Node(value);
        if (!value && value !== 0) throw new Error('No value provided to add to the binary search tree');
        if (!this.root) {
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                node.left = currentNode.left;
                currentNode.left = node;
                return;
            }
            else if (currentNode.value >= value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = node;
                    return;
                }
            } else if (currentNode.value <= value) {
                if (currentNode.right) { currentNode = currentNode.right; }
                else {
                    currentNode.right = node;
                    return;
                }
            }
        }

    }
    //for BST

    // findMaximumValue() {
    //     let currentNode = this.root;
    //     while (currentNode.right) {
    //         currentNode = currentNode.right;
    //     }
    //     return currentNode.value;
    // }

    contains(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}


module.exports = { BinaryTree, BinarySearchTree, Node };