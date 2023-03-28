class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    //TIME-COMPLEXITY: O(1);
    //MEMORY: 0(1);
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  insert(value, index) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: 0(1);
    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.length++;
    return true;
  }

  remove(value) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: 0(1);
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        if (!current.next) {
          this.tail = previous;
        }

        this.length--;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }

  removeAt(index) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: 0(1);
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }

    if (!current.next) {
      this.tail = previous;
    }

    this.length--;

    return current.value;
  }

  get(index) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: 0(1);
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.value;
  }

  toArray() {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: 0(n);
    const arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

module.exports = LinkedList;
