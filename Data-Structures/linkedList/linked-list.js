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
}
module.exports = LinkedList;