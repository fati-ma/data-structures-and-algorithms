'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {

        if (!value) {
            return "No Value!";
        }
        let current = new Node(value);
        current.next = this.head;
        this.head = current;
        return this.head;
        //   while (current.next) {
        //     current = current.next;
        //   }

    }

    includes(value) {

        let current = this.head;

        if (current.value === value) {
            return true;
        }

        while (current.next) {
            current = current.next;
            if (current.value === value) return true;
        }

        return false;
    }

    toString() {

        if (!this.head) return 'NULL';

        let currentNode = this.head;
        let string = ``;
        while (currentNode) {
            string += `{${currentNode.value}} -> `;
            currentNode = currentNode.next;
        }
        string += 'NULL';
        return string;
    }

    append(value) {
        if (!value) return 'No value provided to append to linked list';
        if (!this.head) return this.insert(value);
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        var newNode = new Node(value);
        currentNode.next = newNode;
        return newNode;
    }

    insertBefore(valueToSearchFor, newVal) {

        if (!valueToSearchFor || !newVal) return 'No Value';
        if (!this.head) return 'No head';

        //create previous node and current node 
        var currentNode = this.head;
        var previousNode = null;
        while (currentNode) {
            if (currentNode.value === valueToSearchFor) {
                //there is a value, insert before it (at previous node)
                let newNode = new Node(newVal);
                //if the value we're searching for is at the head
                if (!previousNode) {
                    //set head to the new node
                    this.head = newNode;
                }
                else {
                    //set previous node to point to the new node
                    previousNode.next = newNode;
                }
                newNode.next = currentNode;
                return newNode;
            } else {
                //keep traversing
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return 'Could not find the value provided in the linked list';
    }

    insertAfter(valueToSearchFor, newVal) {

        if (!valueToSearchFor || !newVal) return 'Value provided is blank';
        if (!this.head) return 'The linked list is empty, cannot insert before value';

        var currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === valueToSearchFor) {
                var newNode = new Node(newVal);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return newNode;
            }
            currentNode = currentNode.next;
        }
        return 'Could not find the value provided in the linked list';
    }
}

module.exports = LinkedList;
