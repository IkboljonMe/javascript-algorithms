const detectCycle = require("./TortoiseHare");
const LinkedList = require("../../../data-structures/linked-list/LinkedList");

describe("TortoiseHare", () => {
  test("returns the node where the cycle begins", () => {
    // create a linked list with a cycle
    const head = new LinkedList();
    const node1 = head.add(1);
    const node2 = head.add(2);
    const node3 = head.add(3);
    const node4 = head.add(4);
    const node5 = head.add(5);
    node5.next = node3;
    expect(detectCycle(head.head)).toBe(node3);
  });

  test("returns null if there is no cycle", () => {
    const head = new LinkedList(1);
    head.add(2);
    head.add(3);

    expect(detectCycle(head)).toBeNull();
  });
});
