const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  let list;
  //We create same list so, I used beforeEach hook to implement this logic;
  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
  });

  it("should add a node to the end of the list", () => {
    list.add(4);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  it("should insert a node at the specified index", () => {
    list.insert(4, 1);
    expect(list.toArray()).toEqual([1, 4, 2, 3]);
  });

  it("should remove the first node with the specified value", () => {
    list.remove(2);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it("should remove the node at the specified index", () => {
    list.removeAt(1);
    expect(list.toArray()).toEqual([1, 3]);
  });
});
