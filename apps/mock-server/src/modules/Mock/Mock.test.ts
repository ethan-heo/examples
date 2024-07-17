import { expect, it } from "vitest";
import Mock from ".";

it(`Mock.lorem`, () => {
  expect(Mock.lorem().set({ type: "Paragraph" }).valueOf()).toBeTypeOf(
    "string",
  );
  expect(Mock.lorem().set({ type: "Sentence" }).valueOf()).toBeTypeOf("string");
  expect(Mock.lorem().set({ type: "Word" }).valueOf()).toBeTypeOf("string");
});

it(`Mock.array`, () => {
  const arr = Mock.array(
    Mock.number().set({ min: 0, max: 10 }),
    Mock.float().set({ min: 0, max: 10 }),
    Mock.lorem().set({ type: "Word" }),
  )
    .set({
      length: 10,
    })
    .valueOf();

  expect(arr.length).toBe(10);
});
