class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currenthead = this.head;
    this.head = currenthead.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return currenthead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let value = this.head;
    for (let i = 0; i < index; i++) {
      value = value.next;
    }
    return value;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    const prev = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }

  rotate(k) {
    // Handle edge cases for empty list, single node, or no rotation
    if (!this.head || !this.head.next || k === 0) return this;

    // Connect tail to head to form a circular loop
    this.tail.next = this.head;

    // Handle steps > length
    k = k % this.length;

    // Find the new tail position
    const stepsToNewTail = k < 0 ? this.length + k : k;
    let newTail = this.tail;
    for (let i = 0; i < stepsToNewTail; i++) {
      newTail = newTail.next;
    }

    // Set the new head and tail
    this.tail = newTail;
    this.head = this.tail.next;

    // Break the circular link
    this.tail.next = null;

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
      result.join(' -> ') + ' -> null'
    );
  }
}
