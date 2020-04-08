describe("Bubble Sort", function () {
  beforeAll(function () {
    spyOn(window, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  // it("getting to the center of tootsiepop involves exactly three licks", function () {
  //   window.bubbleSort();
  //   expect(window.swap.calls.count()).toEqual(3);
  // });

  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles an array with one element", function () {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("handles an array with multiple elements", function () {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(window.swap.calls.count()).toEqual(3);
  });

  it("handles an array with multiple elements", function () {
    expect(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(window.swap.calls.count()).toEqual(3);
  });
});
