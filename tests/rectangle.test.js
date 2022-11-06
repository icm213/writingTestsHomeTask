import {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
} from "../js/rectangle";

//.......... UNIT TESTS

test("should properly output rectangle perimeter", () => {
  const perimeterOutput = getRectanglePerimeter(3, 3);
  expect(perimeterOutput).toBe(12);
});

test("should properly output rectangle perimeter", () => {
  const perimeterOutput = getRectanglePerimeter(4, 3);
  expect(perimeterOutput).toBe(14);
});

test("should properly output rectangle area", () => {
  const areaOutput = getRectangleArea(3, 3);
  expect(areaOutput).toBe(9);
});

test("should properly output rectangle area", () => {
  const areaOutput = getRectangleArea(6, 3);
  expect(areaOutput).toBe(18);
});

//.............. INTEGRATION TESTS

jest.spyOn(console, "log");

test("should properly output rectangle info", () => {
  const info = getRectangleInfo(2, 3);
  expect(console.log.mock.calls[0][0]).toBe(
    "The perimeter of a rectangle is 10 and the area is 6"
  );
});

test("should properly output rectangle info", () => {
  const info = getRectangleInfo(10, 10);
  expect(console.log.mock.calls[1][0]).toBe(
    "The perimeter of a rectangle is 40 and the area is 100"
  );
});
