'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = []; //we will be having a k-ary tree that the node can have more than 2 childern
    }
}

class kTree {
    constructor(root = null) {
        this.root = root;
    }
}

function FizzBuzzTree(kTree) {

    if (!kTree.root) {
        throw 'Tree is empty!';
    }

    kTree.root.value = check(kTree.root.value);

    const _traverse = (node) => {
        node.children.forEach((child) => {
            child.value = check(child.value);
            _traverse(child);
        });
    };

    _traverse(kTree.root);

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
    return kTree; //Return a new tree.
}

module.exports = { Node, kTree, FizzBuzzTree };