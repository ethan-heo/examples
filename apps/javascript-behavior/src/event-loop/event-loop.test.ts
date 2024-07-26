import { it, expect } from "vitest";
import ExecutionContext from "../ExecutionContext";
import FrameStack from "../FrameStack";
import Heap from "../Heap";

it(`1. Runtime event loop`, () => {
  const heap = new Heap();
  const executionContext1 = new ExecutionContext(heap);
  const executionContext2 = new ExecutionContext(heap);
  const executionContext3 = new ExecutionContext(heap);
  const frameStack = new FrameStack();

  // 1. add frame stack to execution context
  frameStack.push(executionContext1);
  frameStack.push(executionContext2);
  frameStack.push(executionContext3);

  expect(frameStack.length()).toBe(3);

  // 2. run excution context and pop frame stack
  executionContext3.start().end();
  executionContext2.start().end();
  executionContext1.start().end();

  expect(heap.isEmpty()).toBeTruthy();
  expect(frameStack.isEmpty()).toBeTruthy();
});

it(`2. ExecutionContext and VariableObject`, () => {
  const heap = new Heap();
  const frameStack = new FrameStack();
  const executionContext = new ExecutionContext(heap, {
    todo: [{ content: "hello world" }],
    todoCount: 1,
  });

  frameStack.push(executionContext);

  expect(heap.size()).toBe(2);

  executionContext.end();

  expect(heap.isEmpty()).toBeTruthy();
});

it(`3. Scope Chaining`, () => {
  const heap = new Heap();
  const executionContext1 = new ExecutionContext(heap);
  const executionContext2 = new ExecutionContext(heap);
  const frameStack = new FrameStack();
  const executionContext2Variables = {
    todos: [{ contents: "hello" }, { contents: "event-loop" }],
    todoCount: 2,
  };
});
