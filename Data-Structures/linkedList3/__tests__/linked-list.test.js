'use strict';

let LL = require('../linked-list.js');

describe('Linked List Module', () => {

    let linkedList = new LL();

    it('can successfully instantiate an empty linked list', () => {
        expect(linkedList.head).toBeNull();
    });

    it('Can properly insert into the linked list', () => {
        expect(linkedList.insert('insertedValue').value).toEqual('insertedValue');
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
    //Can successfully add a node to the end of the linked list

    it('append()', () => {
        expect(linkedList.append('appendedValue').value).toEqual('appendedValue');
    });

    it('Can successfully add a node to the end of the linked list', () => {
        expect(linkedList.toString()).toEqual('{newNode-2} -> {newNode-1} -> {insertedValue} -> {appendedValue} -> NULL');
    });

    it('Can successfully add multiple nodes to the end of a linked list', () => {
        linkedList.append('x');
        linkedList.append('y');
        linkedList.append('z');
        expect(linkedList.toString()).toEqual('{newNode-2} -> {newNode-1} -> {insertedValue} -> {appendedValue} -> {x} -> {y} -> {z} -> NULL')
    })

    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        linkedList.insertBefore('insertedValue', 'before insertedValue');
        expect(linkedList.toString()).toEqual('{newNode-2} -> {newNode-1} -> {before insertedValue} -> {insertedValue} -> {appendedValue} -> {x} -> {y} -> {z} -> NULL')
    })

    it('Can successfully insert a node before the first node of a linked list', () => {
        linkedList.insertBefore('newNode-2', 'before newNode-2');
        expect(linkedList.toString()).toEqual('{before newNode-2} -> {newNode-2} -> {newNode-1} -> {before insertedValue} -> {insertedValue} -> {appendedValue} -> {x} -> {y} -> {z} -> NULL')
    })

    it('Can successfully insert after a node in the middle of the linked list', () => {
        linkedList.insertAfter('newNode-1', 'after newNode-1');
        expect(linkedList.toString()).toEqual('{before newNode-2} -> {newNode-2} -> {newNode-1} -> {after newNode-1} -> {before insertedValue} -> {insertedValue} -> {appendedValue} -> {x} -> {y} -> {z} -> NULL')
    })

    it('Can successfully insert a node after the last node of the linked list', () => {
        linkedList.insertAfter('appendedValue', 'after appendedValue');
        expect(linkedList.toString()).toEqual('{before newNode-2} -> {newNode-2} -> {newNode-1} -> {after newNode-1} -> {before insertedValue} -> {insertedValue} -> {appendedValue} -> {after appendedValue} -> {x} -> {y} -> {z} -> NULL')
    })

    it('can return an element from the middle of the linked list using kthFromEnd', async () => {
        expect(linkedList.kthFromEnd(3)).toEqual('after appendedValue');
      })
  
      it('can find the first element in the list using kthFromEnd - where k and the length of the list are the same', async () => {
        expect(linkedList.kthFromEnd(10)).toEqual('before newNode-2');
      })
  
      it('can throw an error if k is greather than the length of the list', async () => {
        expect(() => { linkedList.kthFromEnd(25) }).toThrow();
      })
  
      it('can throw an error if k is a negative number', async () => {
        expect(() => { linkedList.kthFromEnd(-1) }).toThrow();
      })
  
      it('can throw an error if k is is not a positive integer', async () => {
        expect(() => { linkedList.kthFromEnd(1.5) }).toThrow();
      })
  
      it('can return the item if linked list size is 1', async () => {
        var newList = new LL();
        newList.insert('size1');
        expect(newList.kthFromEnd(0)).toEqual('size1');
      });
})