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
    inOrder(){
        const results = [];
        const _traverse = (node)=>{
            if(node.left) _traverse(node.left);
            results.push(node.value);
            if(node.right) _traverse(node.right);
        };

        _traverse(this.root);
        return results;
    }

    //Left -> Right -> Root
    postOrder(){
        const results = [];
        const _traverse = (node) =>{
            if(node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            results.push(node.value);
        };

        _traverse(this.root);
        return results;
    }
}

class BinarySearchTree extends BinaryTree{
    constructor(root=null){
        // this.root=root
        super(root)
    }

    add(value){
        let node = new Node(value);
        if(!value && value !== 0 ) throw new Error('There\'s no value provided!');

        if(!this.root){
            this.root = node;
            return;
        }

        let currentNode = this.root;
        
        while(currentNode){
            if(currentNode.value === value){
                node.left = currentNode.left;
                currentNode.left = node
                return;
            }
            else if (currentNode.value >= value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }
                else{
                    currentNode.left= node;
                    return;
                }
    
            }
            else if (currentNode.value <= value){
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else{
                    currentNode.right = node;
                    return;
                }
            }
        }
    }

    contains(value){
        if (!value && value !== 0) throw new Error('There\'s no value provided!');
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value > value){
                currentNode = currentNode.left;
            }
            else if(currentNode.node < value) currentNode = currentNode.right;
            else if (currentNode.value === value) return true;
        }
        return false;

    }
}

module.exports = { BinaryTree, BinarySearchTree, Node };