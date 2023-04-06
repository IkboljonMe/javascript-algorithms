const MinHeap = require("./MinHeap");

describe("MinHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  test("should add elements to the min heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.size()).toBe(4);
  });

  test("should remove and return the smallest element from the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.remove()).toBe(1);
    expect(heap.size()).toBe(3);
    expect(heap.peek()).toBe(2);
  });

  test("should return the smallest element from the heap without removing it", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.peek()).toBe(1);
    expect(heap.size()).toBe(4);
  });

  test("should return -1 when trying to remove from an empty heap", () => {
    expect(heap.remove()).toBe(-1);
  });

  test("should return true when checking if an empty heap is empty", () => {
    expect(heap.isEmpty()).toBe(true);
  });
});
