'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    if (value===null || value ===undefined) throw new Error('Cant push an empty object to the stack');
    let node = new Node(value);
    let temp = this.top;
    this.top = node;
    node.next = temp;
  }

  pop(){
    if (!this.top) throw new Error('Stack is empty! cant pop');
    let temp = this.top;
    this.top = this.top.next;
    return temp.value;
  }

  peek(){
    if (this.top) return this.top.value;
    throw new Error('Stack is empty! cant peek');
  }

  isEmpty() {
    return (!this.top);
  }

}

module.exports = Stack;