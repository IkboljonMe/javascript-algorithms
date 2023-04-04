const Stack = require("./Stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("push should add item to the stack", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test("pop should remove and return top item from the stack", () => {
    stack.push(1);
    stack.push(2);
    const item = stack.pop();
    expect(item).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test("pop should return null if stack is empty", () => {
    expect(stack.pop()).toBeNull();
  });

  test("peek should return top item from the stack without removing it", () => {
    stack.push(1);
    stack.push(2);
    const item = stack.peek();
    expect(item).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  test("peek should return null if stack is empty", () => {
    expect(stack.peek()).toBeNull();
  });

  test("size should return the number of items in the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test("isEmpty should return true if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("isEmpty should return false if stack is not empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("toArray should return an array representation of the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.toArray()).toEqual([1, 2, 3]);
  });
});
