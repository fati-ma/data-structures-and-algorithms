'use strict';
const Queue = require('./queue.js');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'Cat') {
      this.cats.enqueue(animal);
    }
    else if (animal.type === 'Dog') {
      this.dogs.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'Dog') {
      return this.dogs.dequeue();
    } else if (pref === 'Cat') {
      return this.cats.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;