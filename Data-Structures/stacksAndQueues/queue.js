'use strict';
const Node = require('./node');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue(){
    if (!this.front) throw new Error('Queue is empty! cant dequeue.');
    let temp = this.front;
    this.front = this.front.next;
    return temp.value;
  }

  peek(){
    if (!this.front) throw new Error('Queue is empty! cant peek');
    return this.front.value;
  }

  isEmpty(){
    if (this.front) return false;
    return true;
  }

}

module.exports = Queue;