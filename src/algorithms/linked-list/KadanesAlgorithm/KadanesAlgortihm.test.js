const kadanesAlgorithm = require("./KadanesAlgorithm");
describe("kadanesAlgorithm", () => {
  it("returns the maximum subarray sum for a given array", () => {
    const arr1 = [1, 2, -3, 4, 5, -6, 7, 8];
    const arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];
    const arr3 = [1, 2, 3, -2, 5];

    expect(kadanesAlgorithm(arr1)).toEqual(18);
    expect(kadanesAlgorithm(arr2)).toEqual(7);
    expect(kadanesAlgorithm(arr3)).toEqual(9);
  });

  it("returns the only element in the array if there is only one", () => {
    const arr = [5];

    expect(kadanesAlgorithm(arr)).toEqual(5);
  });

  it("returns 0 if all elements in the array are negative", () => {
    const arr = [-1, -2, -3, -4];

    expect(kadanesAlgorithm(arr)).toEqual(-1);
  });
});
