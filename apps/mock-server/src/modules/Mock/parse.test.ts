import { expect, it } from "vitest";
import parse from "./parse";

it.each([
  [
    "{number[1,2]}",
    [{ type: "number", match: "{number[1,2]}", properties: ["1", "2"] }],
  ],
  [
    "{string[a,b]}",
    [{ type: "string", match: "{string[a,b]}", properties: ["a", "b"] }],
  ],
])(`parse`, (str, expected) => {
  expect(parse(str)).toStrictEqual(expected);
});

it.each([
  ["{number}", [{ type: "number", match: "{number}", properties: null }]],
  ["{string}", [{ type: "string", match: "{string}", properties: null }]],
])(`parse`, (str, expected) => {
  expect(parse(str)).toStrictEqual(expected);
});
