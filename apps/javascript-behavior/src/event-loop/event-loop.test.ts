import { it, expect } from "vitest";
import ExecutionContext from "../ExecutionContext";
import FrameStack from "../FrameStack";
import Heap from "../Heap";
import VariableObject from "../VariableObject";

it(`1. FrameStack`, () => {
  /**
    function A() {
        function B() {
            function C() {}
        }
    }
    */
  const heap = new Heap();
  const executionContext1 = new ExecutionContext();
  const executionContext2 = new ExecutionContext();
  const executionContext3 = new ExecutionContext();
  const frameStack = new FrameStack();

  // 1. 함수 실행
  // A()
  executionContext1.create(frameStack, new VariableObject(heap));
  executionContext1.run();
  // B()
  executionContext2.create(frameStack, new VariableObject(heap));
  executionContext2.run();
  // C()
  executionContext3.create(frameStack, new VariableObject(heap));
  executionContext3.run();

  expect(frameStack.length()).toBe(3);

  // 2. 함수 종료
  // end C()
  executionContext3.remove();
  expect(frameStack.length()).toBe(2);
  // end B()
  executionContext2.remove();
  expect(frameStack.length()).toBe(1);
  // end A()
  executionContext1.remove();
  expect(frameStack.isEmpty()).toBeTruthy();
});

it(`2. ExecutionContext and VariableObject`, () => {
  /**
     function A() {
        const todo = [{ contents: "hello variables" }]
        const todoCount = 1
     }
     */
  const heap = new Heap();
  const frameStack = new FrameStack();
  const executionContext = new ExecutionContext();

  /**
   * 1. 컨텍스트 생성
   *    - 컨텍스트가 생성되면 VariableObject를 초기화한다.
   */
  executionContext.create(
    frameStack,
    new VariableObject(heap, {
      todo: undefined,
      todoCount: undefined,
    }),
  );
  /**
   * 2. 코드 실행
   *    - 한줄씩 실행 되면서 실제 값으로 초기화된다.
   */
  executionContext.run({
    todos: [{ contents: "hello variables" }],
  });
  executionContext.run({
    todoCount: 1,
  });

  /**
   * 3. 객체는 힙 영역에 추가된다.
   */
  expect(heap.size()).toBe(2);

  /**
   * 4. 함수가 종료되면 컨텍스트가 제거된다.
   */
  executionContext.remove();

  /**
   * 5. 참조 카운트가 0인 객체는 GC에 의해 힙 영역에서 제거된다.
   */
  expect(heap.isEmpty()).toBeTruthy();
});

it(`3. Scope Chaining`, () => {
  const heap = new Heap();
  const runtimeExecutionContext1Variables = {
    todos: [{ contents: "hello" }, { contents: "event-loop" }],
    todoCount: 2,
  };
  const createExecutionContext1Variables = {
    todos: undefined,
    todoCount: undefined,
  };
  const executionContext1 = new ExecutionContext();
  const executionContext2 = new ExecutionContext();
  const frameStack = new FrameStack();

  executionContext1.create(
    frameStack,
    new VariableObject(heap, createExecutionContext1Variables),
  );
  executionContext1.run(runtimeExecutionContext1Variables);

  executionContext2.create(frameStack, new VariableObject(heap));
  executionContext2.run();
  executionContext1.chaning(runtimeExecutionContext1Variables.todoCount);
  executionContext1.chaning(runtimeExecutionContext1Variables.todos[0]);
  executionContext2.remove();
});
