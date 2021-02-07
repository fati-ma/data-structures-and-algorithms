'use strict';

const repeatedWord = require("../repeated-word");

describe ('Repeated word ', () => {
  it('should return the first repeated word in a string.', () => {
    let string = 'Once upon a time, there was a brave princess who';
    expect(repeatedWord(string)).toEqual('a');
  })
  it('should return the first repeated word in a string.', () => {
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';
    expect(repeatedWord(string)).toEqual('it');
  })
  // it('should return the first repeated word in a string.', () => {
  //   let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';
  //   expect(repeatedWord(string)).toEqual('summer');
  // })
  it('should return null if there are no repeated words. ', () => {
    let string = 'This string has no duplicates';
    expect(repeatedWord(string)).toBe(null);
  })
  it('should return the first word if the entire string is duplicates. ', () => {
    let string = 'dog dog dog dog dog dog';
    expect(repeatedWord(string)).toEqual('dog');
  })
})