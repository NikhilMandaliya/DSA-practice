class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (!this.size) this.last = null;
    return currentFirst.val;
  }
}

// Fair implemeation of the stack.
// Array manages indexes that's the only small bit of extra and unused work.
// const stack = [];
// stack.push();
// stack.pop();
