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
        //input is value to insert a node before, and value to insert
        //output is added node with that value
        //fail first if the list is empty or the values we've received are empty
        if (!valueToSearchFor || !newVal) return 'Value provided is blank';
        if (!this.head) return 'The linked list is empty, cannot insert before value';

        //create previous node and current node variables.
        var currentNode = this.head;
        var previousNode = null;
        while (currentNode) {
            if (currentNode.value === valueToSearchFor) {
                //we found the value, insert before it (so at previous node)
                let newNode = new Node(newVal);
                //if the value we're searching for is at the head, then we need to:
                if (!previousNode) {
                    //set head to the new node
                    this.head = newNode;
                }
                else {
                    //set previous node to point to the new node
                    previousNode.next = newNode;
                }
                //set the new node to point to the "current node" which is the one that has the value
                newNode.next = currentNode;
                return newNode;
            } else {
                //move along in the linked list, we haven't found the value yet
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return 'Could not find the value provided in the linked list';
    }

    insertAfter(valueToSearchFor, newVal) {
        //fail first
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
