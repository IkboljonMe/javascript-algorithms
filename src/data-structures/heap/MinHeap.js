class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    if (this.isEmpty()) {
      return -1;
    }
    const smallest = this.heap[0];
    const last = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return smallest;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallestIndex = index;
    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftIndex;
    }
    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.bubbleDown(smallestIndex);
    }
  }

  find(predicate) {
    for (let i = 0; i < this.heap.length; i++) {
      if (predicate(this.heap[i])) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = MinHeap;
