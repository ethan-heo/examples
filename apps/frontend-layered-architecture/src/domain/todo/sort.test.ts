import { expect, it } from "vitest";
import { TodoApp } from "../../application";
import { sortTodo } from "./sort";

const todoState: TodoApp.TodoState = {
  list: [
    {
      id: "1",
      content: "hello1",
      status: TodoApp.constants.TODO_STATUS.NOT_READY,
      importance: false,
    },
    {
      id: "2",
      content: "hello2",
      status: TodoApp.constants.TODO_STATUS.IN_PROGRESS,
      importance: false,
    },
    {
      id: "3",
      content: "hello3",
      status: TodoApp.constants.TODO_STATUS.DONE,
      importance: false,
    },
    {
      id: "4",
      content: "hello4",
      status: TodoApp.constants.TODO_STATUS.NOT_READY,
      importance: true,
    },
    {
      id: "5",
      content: "hello5",
      status: TodoApp.constants.TODO_STATUS.NOT_READY,
      importance: false,
    },
  ],
  filterType: TodoApp.constants.TODO_FILTER.NONE,
  sortType: TodoApp.constants.TODO_SORT.NONE,
};

it(`중요도를 기준으로 내림차순 정렬한다.`, () => {
  const expected = [
    todoState.list[3],
    todoState.list[0],
    todoState.list[1],
    todoState.list[2],
    todoState.list[4],
  ];
  expect(
    sortTodo(todoState.list, {
      sortType: TodoApp.constants.TODO_SORT.IMPORTANCE,
    }),
  ).toStrictEqual(expected);
});
