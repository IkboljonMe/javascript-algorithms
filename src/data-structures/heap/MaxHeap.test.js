const MaxHeap = require("./MaxHeap");

describe("MaxHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MaxHeap();
  });

  test("should add elements to the max heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.size()).toBe(4);
  });

  test("should remove and return the largest element from the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.size()).toBe(4);
    expect(heap.peek()).toBe(4);
  });

  test("should return the largest element from the heap without removing it", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.peek()).toBe(4);
    expect(heap.size()).toBe(4);
  });

  test("should return true when checking if an empty heap is empty", () => {
    expect(heap.isEmpty()).toBe(true);
  });
});
