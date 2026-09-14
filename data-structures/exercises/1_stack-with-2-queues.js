class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const node = this.first;
    this.first = node.next;
    this.size--;
    if (!this.size) this.last = null;
    return node.value;
  }
}

class Stack {
  constructor() {
    this.main = new Queue();
    this.temp = new Queue();
  }

  push(val) {
    this.main.enqueue(val);
    return this;
  }

  pop() {
    while (this.main.size > 1) {
      const val = this.main.dequeue();
      this.temp.enqueue(val);
    }
    const val = this.main.dequeue();
    this.main = this.temp;
    this.temp = new Queue();
    return val;
  }
}

const s = new Stack();
s.push(10).push(20).push(30);
console.log(s.pop()); // 30
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null
s.push(30).push(40).push(50);
console.log(s.pop()); // 50
s.push(60);
console.log(s.pop()); // 60
