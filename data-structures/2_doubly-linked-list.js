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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index < this.length / 2) {
      let value = this.head;
      for (let i = 0; i < index; i++) {
        value = value.next;
      }
      return value;
    } else {
      let value = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        value = value.prev;
      }
      return value;
    }
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
    newNode.prev = prev;

    prev.next = newNode;
    newNode.next.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.prev = null;
    node.next = null;

    this.length--;
    return node;
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
