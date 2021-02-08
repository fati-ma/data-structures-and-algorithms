'use strict';
const HashTable = require('./hashtable.js');

//create a new hashtable
//go through each tree
//for each tree node check if hashtable contains the number
//if so continue
//if not set into hashtable and push to output array
//when all nodes visited return output array


function treeIntersection (treeOne, treeTwo) {

    if(!treeOne.root || !treeTwo.root) return null;
  
    let map = new HashTable (100);
    let mapTwo = new HashTable (100);
    let outputArray = [];
  
    function _treeTraverseOne (node) {
      if(!map.contains(node.value.toString())){
        map.set(node.value.toString());
      }
      if(node.leftChild) _treeTraverseOne(node.leftChild);
      if(node.rightChild) _treeTraverseOne(node.rightChild);
  
    }

    function _treeTraverseTwo (node) {
      if(map.contains(node.value.toString()) && !mapTwo.contains(node.value.toString())){
        outputArray.push(node.value);
        mapTwo.set(node.value.toString());
      }
      if(node.leftChild) _treeTraverseTwo(node.leftChild);
      if(node.rightChild) _treeTraverseTwo(node.rightChild);
  
    }
  
    _treeTraverseOne(treeOne.root);
    _treeTraverseTwo(treeTwo.root);
  
    return outputArray;
  }

module.exports = treeIntersection;