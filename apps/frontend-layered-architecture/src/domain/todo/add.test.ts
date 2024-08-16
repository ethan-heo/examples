import { expect, it } from "vitest";
import { addTodo } from "./add";
import { TodoApp } from "../../application";

it(`상태, 중요도를 추가하지 않으면 기본값이 설정된다.`, () => {
  const todoState: TodoApp.TodoState = { list: [] };
  const todoItem: Omit<TodoApp.TodoItem, "id"> = {
    content: "hello world",
  };
  const expected: TodoApp.TodoItem[] = [
    {
      id: "random",
      content: todoItem.content,
      status: TodoApp.constants.TODO_STATUS.NOT_READY,
      importance: false,
    },
  ];

  expect(addTodo(todoState, todoItem)).toStrictEqual(expected);
});
