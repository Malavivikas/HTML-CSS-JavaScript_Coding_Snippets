/* class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} */

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    //picks topmost value
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("yahoo");
myStack.push("bing");
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
