import { add, subtract, multiply, divide } from "./index.js";

describe("add function", () => {
  test("returns 5 if called add(2,3)", () => {
    expect(add(2, 3)).toEqual(5);
  });

  //   test("returns a negative value if the greater argument is negative", () => {
  //     if ((Math.sign(a) === -1 && a > b) || (Math.sign(b) === -1 && b > a))
  //       expect(result).toBeLessThan(0);
  //   });

  test("returns a negative value if the greater argument is negative", () => {
    expect(add(-10, 2)).toBeLessThan(0);
  });

  test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("subtract tests", () => {
  test("returns 10 if called with subtract(15, 5)", () => {
    expect(subtract(15, 5)).toEqual(10);
  });

  test("returns a negative value if the second argument is greater than the first one", () => {
    expect(subtract(2, 5)).toBeLessThan(0);
  });
});

describe("multiply tests", () => {
  test("returns 8 if called with multiply(2, 4)", () => {
    expect(multiply(2, 4)).toEqual(8);
  });

  test("returns a negative value if only the first argument is negative", () => {
    expect(multiply(-1, 5)).toBeLessThan(0);
  });

  test("returns a negative value if only the first argument is negative", () => {
    expect(multiply(5, -5)).toBeLessThan(0);
  });
});

describe("divide tests", () => {
  test("returns 3 if called with divide(9, 3)", () => {
    expect(divide(9, 3)).toEqual(3);
  });

  test('returns "You should not do this!" if called with 0 as second argument', () => {
    expect(divide(1, 0)).toBe("You should not do this!");
  });
});
