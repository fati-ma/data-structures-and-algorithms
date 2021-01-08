'use strict';

const Stack = require('../stack');
const Queue = require('../queue');

describe('Stacks', () => {
  let stack = new Stack();


  it('Can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can pop off the stack', () => {
    let node = stack.pop();
    expect(node).toEqual(3);
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    while (stack.top) {
      stack.pop();
    }
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push(4);
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });

  it('Can successfully instantiate an empty stack', () => {
    expect(stack).toBeInstanceOf(Stack);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    while (stack.top) {
      stack.pop();
    }
    expect(() => { stack.pop(); }).toThrow();
    expect(() => { stack.peek(); }).toThrow();
  });
});

describe('Queues',() => {
  let queue = new Queue();


  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.front.value).toEqual(1);
    expect(queue.rear.value).toEqual(4);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let node = queue.dequeue();
    expect(node).toEqual(1);
    expect(queue.front.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    while (queue.front) {
      queue.dequeue();
    }
    expect(queue.isEmpty()).toBe(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    while (queue.front) {
      queue.dequeue();
    }
    expect(() => { queue.dequeue(); }).toThrow();
    expect(() => { queue.peek(); }).toThrow();
  });
});