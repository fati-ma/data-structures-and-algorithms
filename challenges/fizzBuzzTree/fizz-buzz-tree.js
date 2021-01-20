'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = []; //we will be having a k-ary tree that the node can have more than 2 childern
    }
}

class kTree {
    constructor() {
        this.root = null;
    }
}

function FizzBuzzTree(kTree) {

    if (!kTree.root) {
        throw 'Tree is empty!';
    }

    let newTree = new kTree();
    newTree.root = new Node(check(kTree.root.value));

    const _traverse = (root, newRoot) => {
        root.children.forEach((child) => {
            newRoot.children.push(new Node(check(child.value)));
            _traverse(child, newRoot.children[newRoot.children.length-1]);
        });
    };

    _traverse(kTree.root, newTree.root);
    return newTree;

    function check(value) {
        
        if (value % 5 == 0 && value % 3 == 0) {
            return 'FizzBuzz'; //If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
        } else if (value % 5 == 0) {
            return 'Buzz';  //If the value is divisible by 5, replace the value with “Buzz”
        } else if (value % 3 == 0) {
            return 'Fizz'; //If the value is divisible by 3, replace the value with “Fizz”
        } else {
            return `${value}`; //If the value is not divisible by 3 or 5, simply turn the number into a String
        }
    }
}

module.exports = { Node, kTree, FizzBuzzTree };