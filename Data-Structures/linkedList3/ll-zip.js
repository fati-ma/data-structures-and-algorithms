'use strict';

const LinkedList = require("./linked-list");

function zipLists(linkedList1, linkedList2) {
    // if one of the two lists is empty, return the other one 
    // if both are empty, will return null 
    if (!linkedList1.head) return linkedList2;
    if (!linkedList2.head) return linkedList1;
    
    let currentNode1 = linkedList1.head;
    let currentNode2 = linkedList2.head;
    
    while (currentNode1.next) {
        if (currentNode2) {
            let temp = currentNode1.next;
            let nextNode2 = currentNode2.next;
            currentNode1.next = currentNode2;
            currentNode2.next = temp;

            currentNode1 = temp;
            currentNode2 = nextNode2;
        }
        else {
            break;
        }
    }
    if (currentNode2) {
        currentNode1.next = currentNode2;
    }
    return linkedList1;

}


module.exports = zipLists;