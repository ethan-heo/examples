import { expect, it } from "vitest";
import Random from "./random";

it.each([
  [1, 1, true],
  [0, 10, true],
])(`Random.number(%o, %o)`, (min, max, expected) => {
  const num = Random.number(min, max);

  expect(num >= min && num <= max).toBe(expected);
});

it.each([
  [1.5, 1.5, true],
  [0.5, 2, true],
])(`Random.float(%o, %o)`, (min, max, expected) => {
  const num = Random.float(min, max);

  expect(num >= min && num <= max).toBe(expected);
});
