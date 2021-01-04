'use strict';

let LL = require('../linked-list.js');

describe('Linked List Module', () => {

    let linkedList = new LL();

    it('can successfully instantiate an empty linked list', () => {
        expect(linkedList.head).toBeNull();
    });

    it('Can properly insert into the linked list', () => {
        expect(linkedList.insert('insertedValue').value).toStrictEqual('insertedValue');
    });

    it('The head property will properly point to the first node in the linked list', () => {
        expect(linkedList.head.value).toEqual('insertedValue');
    });

    it('can properly insert multiple nodes into the linked list', () => {
        linkedList.insert('newNode-1');
        expect(linkedList.head.value).toEqual('newNode-1');
        linkedList.insert('newNode-2');
        expect(linkedList.head.value).toEqual('newNode-2');
    });

    it('Will return true when finding a value within the linked list that exists', () => {
        expect(linkedList.includes('insertedValue')).toBe(true);
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        expect(linkedList.includes('FalseInsertedValue')).toBe(false);
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        expect(linkedList.toString()).toEqual('{newNode-2} -> {newNode-1} -> {insertedValue} -> NULL');
    });
})