const HashTable = require("./HashTable.js");

describe("HashTable", () => {
  let ht;
  beforeEach(() => {
    ht = new HashTable();
  });
  test("set and get method should store and retrieve values correctly", () => {
    ht.set("name", "John");
    ht.set("age", 30);
    ht.set("city", "New York");

    expect(ht.get("name")).toBe("John");
    expect(ht.get("age")).toBe(30);
    expect(ht.get("city")).toBe("New York");
    expect(ht.get("occupation")).toBeNull();
  });

  test("set method should update an existing key-value pair", () => {
    ht.set("name", "John");
    ht.set("name", "Jane");

    expect(ht.get("name")).toBe("Jane");
  });

  test("delete method should remove a key-value pair", () => {
    ht.set("name", "John");
    ht.delete("name");

    expect(ht.get("name")).toBeNull();
  });

  test("has method should return true if a key exists", () => {
    ht.set("name", "John");

    expect(ht.has("name")).toBeTruthy();
    expect(ht.has("age")).toBeFalsy();
  });

  test("getValue method should return an array of all values", () => {
    ht.set("name", "John");
    ht.set("age", 30);
    ht.set("city", "New York");

    expect(ht.getValue()).toEqual(["John", 30, "New York"]);
  });
});
