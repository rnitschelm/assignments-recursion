const { sum, flatSum, triple, upper } = require("./index");

describe("sum", () => {
  it("sums all the numbers in the array", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  describe("when the array contains a zero", () => {
    xit("sums all the numbers in the array", () => {
      expect(sum([1, 2, 3, 0, 4, 5])).toBe(15);
    });
  });

  describe("when given an empty array", () => {
    xit("returns 0", () => {
      expect(sum([])).toBe(0);
    });
  });
});

describe("flatSum", () => {
  xit("sums all the numbers in the array", () => {
    expect(sum([1, [], [[2]], [3, [4, 5]]])).toBe(15);
  });

  describe("when the array contains a zero", () => {
    xit("sums all the numbers in the array", () => {
      expect(sum([1, [], [[0, 2]], [3, [4, 5]]])).toBe(15);
    });
  });

  describe("when given an empty array", () => {
    xit("returns 0", () => {
      expect(sum([])).toBe(0);
    });
  });
});

describe("upper", () => {
  xit("returns a version of the given object with the values set to uppercase", () => {
    expect(
      upper({
        a: {
          b: {
            c: "sponge bob",
            d: "HOI",
            e: {
              f: "hallo"
            }
          }
        }
      })
    ).toEqual({
      a: {
        b: {
          c: "SPONGE BOB",
          d: "HOI",
          e: {
            f: "HALLO"
          }
        }
      }
    });
  });
});
