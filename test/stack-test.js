import { expect } from 'chai';
import Stack from '../data-structures/stack.es6';

// console.log('length is 3:', stack.length()); // => 3
// console.log('peek is 3:', stack.peek()); // => 3
// console.log('pop is 3:', stack.pop()); // => 3
// stack.print(); // => 1 2
// console.log('pop is 2:', stack.pop());  // => 2
// console.log('length is 1:', stack.length()); // => 1
// console.log('pop is 1:', stack.pop()); // => 1
// stack.print(); // => ''
// console.log('peek is undefined:', stack.peek()); // => undefined
// console.log('pop is undefined:', stack.pop()); // => undefined

describe('stack stuff', () => {
  let stack;

  before(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  it('print the stack correctly', () => {
    expect(stack.print()).to.eql('1 2 3');
  });

  it('length is 3', () => {
    expect(stack.length()).to.eql(3);
  });

  it('peek is 3', () => {
    expect(stack.peek()).to.eql(3);
  });

  it('pop is 3', () => {
    expect(stack.pop()).to.eql(3);
  });

  it('print the stack correctly', () => {
    expect(stack.print()).to.eql('1 2');
  });

  it('length is 3', () => {
    expect(stack.length()).to.eql(2);
  });

  it('peek is 3', () => {
    expect(stack.peek()).to.eql(2);
  });

  it('pop is 3', () => {
    expect(stack.pop()).to.eql(2);
  });

})