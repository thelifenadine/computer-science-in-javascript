import { expect } from 'chai';
import Queue from '../data-structures/queue.es6';

describe('queue stuff', () => {
  let queue;

  before(() => {
    queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  });

  it('print the queue correctly', () => {
    expect(queue.print()).to.eql('1 2 3');
  });

  it('length is 3', () => {
    expect(queue.length()).to.eql(3);
  });

  it('peek is 1', () => {
    expect(queue.peek()).to.eql(1);
  });

  it('dequeue is 1', () => {
    expect(queue.dequeue()).to.eql(1);
  });

  it('print the queue correctly', () => {
    expect(queue.print()).to.eql('2 3');
  });

  it('length is 2', () => {
    expect(queue.length()).to.eql(2);
  });

  it('dequeue is 2', () => {
    expect(queue.dequeue()).to.eql(2);
  });

  it('length is 1', () => {
    expect(queue.length()).to.eql(1);
  });
  // it('peek is undefined', () => {
  //   expect(queue.peek()).to.eql(undefined);
  // });
})

// queue.print(); // => 1 2 3
// console.log('length is 3:', queue.length()); // => 3
// console.log('peek is 1:', queue.peek()); // => 3
// console.log('dequeue is 1:', queue.dequeue()); // => 1
// queue.print(); // => 2 3
// console.log('dequeue is 2:', queue.dequeue());  // => 2
// console.log('length is 1:', queue.length()); // => 1
// console.log('dequeue is 3:', queue.dequeue()); // => 3
// queue.print(); // => ''
// console.log('peek is undefined:', queue.peek()); // => undefined
// console.log('dequeue is undefined:', queue.dequeue()); // => undefined
