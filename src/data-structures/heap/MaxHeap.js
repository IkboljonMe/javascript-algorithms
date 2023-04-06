class MaxHeap {
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

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const lastValue = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastValue;
      this.bubbleDown(0);
    }

    return root;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let maxChildIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[maxChildIndex]
    ) {
      maxChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[maxChildIndex]
    ) {
      maxChildIndex = rightChildIndex;
    }

    if (maxChildIndex !== index) {
      [this.heap[index], this.heap[maxChildIndex]] = [
        this.heap[maxChildIndex],
        this.heap[index],
      ];
      this.bubbleDown(maxChildIndex);
    }
  }
}

module.exports = MaxHeap;
