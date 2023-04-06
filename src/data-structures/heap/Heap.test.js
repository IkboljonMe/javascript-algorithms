const Heap = require("./Heap");
describe("Heap", () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  function toArray(heap) {
    const arr = [];
    for (let i = 0; i < heap.size(); i++) {
      arr.push(heap.heap[i]);
    }
    return arr;
  }

  test("should add elements to the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(toArray(heap)).toEqual([4, 2, 3, 1]);
  });

  test("should remove and return the largest element from the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.remove()).toBe(4);
    expect(toArray(heap)).toEqual([3, 2, 1]);
    expect(heap.remove()).toBe(3);
    expect(toArray(heap)).toEqual([2, 1]);
    expect(heap.remove()).toBe(2);
    expect(toArray(heap)).toEqual([1]);
    expect(heap.remove()).toBe(1);
    expect(toArray(heap)).toEqual([]);
  });

  test("should return a sorted array of the removed elements from the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.sort()).toEqual([4, 3, 2, 1]);
  });

  test("should return true if the heap is empty, false otherwise", () => {
    expect(heap.isEmpty()).toBe(true);
    heap.add(3);
    expect(heap.isEmpty()).toBe(false);
    heap.remove();
    expect(heap.isEmpty()).toBe(true);
  });

  test("should find the index of the first element that satisfies the predicate in the heap", () => {
    heap.add(3);
    heap.add(1);
    heap.add(4);
    heap.add(2);
    expect(heap.find((x) => x === 3)).toBe(2);
    expect(heap.find((x) => x === 5)).toBe(-1);
  });

  test("should get the index of the parent of the element at the given index in the heap", () => {
    expect(heap.getParentIndex(0)).toBe(-1);
    expect(heap.getParentIndex(1)).toBe(0);
    expect(heap.getParentIndex(2)).toBe(0);
    expect(heap.getParentIndex(3)).toBe(1);
  });
});
