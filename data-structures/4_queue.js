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
