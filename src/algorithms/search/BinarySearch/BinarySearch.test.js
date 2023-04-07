const binarySearch = require("./BinarySearch");

describe("binarySearch", () => {
  it("should find the index of the seek element in the sorted array", () => {
    const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    const seekElement = 23;
    const expectedIndex = 5;

    expect(binarySearch(sortedArray, seekElement)).toEqual(expectedIndex);
  });

  it("should return -1 if the seek element is not in the sorted array", () => {
    const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    const seekElement = 42;
    const expectedIndex = -1;

    expect(binarySearch(sortedArray, seekElement)).toEqual(expectedIndex);
  });
});
