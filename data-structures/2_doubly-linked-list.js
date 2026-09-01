class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    popped.prev = null;
    return popped;
  }

  shift() {
    if (!this.length) return undefined;
    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removed;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    removed.next = null;
    return removed;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  log() {
    if (!this.length)
      return console.log('length:', this.length, 'values:', 'null');
    let curr = this.head;
    let result = [];
    while (curr !== null) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(
      'length:',
      this.length,
      'values:',
      result.join(' <-> ') + ' <-> null'
    );
  }
}
