import { expect, it } from "vitest";
import Mock from ".";

it(`Mock.number`, () => {
  expect(Mock.number().set({ min: 1, max: 1 }).valueOf()).toBe(1);

  const value = Mock.number().set({ min: 10, max: 15 }).valueOf();

  expect(value >= 10 && value <= 15).toBe(true);

  const minusValue = Mock.number().set({ min: -10, max: -5 }).valueOf();

  expect(minusValue >= -10 && minusValue <= -5).toBe(true);
});

it(`Mock.lorem`, () => {
  expect(Mock.lorem().set({ type: "Paragraph" }).valueOf()).toBeTypeOf(
    "string",
  );
  expect(Mock.lorem().set({ type: "Sentence" }).valueOf()).toBeTypeOf("string");
  expect(Mock.lorem().set({ type: "Word" }).valueOf()).toBeTypeOf("string");
});
