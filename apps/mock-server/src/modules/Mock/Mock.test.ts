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

  console.log(arr);

  expect(arr.length).toBe(10);
});

it(`Mock.object`, () => {
  const obj = Mock.object({
    id: Mock.number().set({ max: 999 }),
    name: Mock.lorem().set({ type: "Word" }),
    tags: Mock.array(Mock.lorem().set({ type: "Word" })).set({ length: 10 }),
  }).valueOf();

  console.log(obj);

  expect(obj).toBeTypeOf("object");
});
