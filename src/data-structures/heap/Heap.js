class Heap {
  constructor() {
    this.heap = [];
  }

  // Add an element to the heap
  add(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove the root element of the heap and return a sorted array of the removed elements
  sort() {
    const sorted = [];
    while (!this.isEmpty()) {
      const max = this.remove();
      sorted.push(max);
    }
    return sorted;
  }

  // Remove and return the largest element from the heap
  remove() {
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      const max = this.heap[0];
      this.heap[0] = last;
      this.bubbleDown(0);
      return max;
    } else {
      return last;
    }
  }

  // Return true if the heap is empty, false otherwise
  isEmpty() {
    return this.heap.length === 0;
  }

  // Find the index of the first element in the heap that satisfies the given predicate function
  find(predicate) {
    for (let i = 0; i < this.heap.length; i++) {
      if (predicate(this.heap[i])) {
        return i;
      }
    }
    return -1;
  }

  // Get the index of the parent of the element at the given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Bubble up an element to its correct position
  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      const parent = this.heap[parentIndex];
      if (element <= parent) {
        break;
      }
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Bubble down an element to its correct position
  bubbleDown(index) {
    const element = this.heap[index];
    while (index < this.heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let maxIndex = index;
      let max = element;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > max
      ) {
        maxIndex = leftChildIndex;
        max = this.heap[leftChildIndex];
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > max
      ) {
        maxIndex = rightChildIndex;
        max = this.heap[rightChildIndex];
      }
      if (maxIndex === index) {
        break;
      }
      this.heap[maxIndex] = element;
      this.heap[index] = max;
      index = maxIndex;
    }
  }
  // Get the size of the heap
  size() {
    return this.heap.length;
  }
}
module.exports = Heap;
