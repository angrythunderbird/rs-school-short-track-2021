/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    const items = [];

    this.push = function (elem) {
      return items.push(elem);
    };
    this.pop = function () {
      return items.pop();
    };
    this.peek = function () {
      return items[items.length - 1];
    };
  }
}

module.exports = Stack;
