import { expect, it } from "vitest";
import { TodoApp } from "../../application";
import { filterTodoList } from "./filter";

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
};

it.each([
  [
    TodoApp.constants.TODO_FILTER.NOT_READY,
    [todoState.list[0], todoState.list[3], todoState.list[4]],
  ],
  [TodoApp.constants.TODO_FILTER.IN_PROGRESS, [todoState.list[1]]],
  [TodoApp.constants.TODO_FILTER.DONE, [todoState.list[2]]],
  [TodoApp.constants.TODO_FILTER.IMPORTANCE, [todoState.list[3]]],
  [TodoApp.constants.TODO_FILTER.NONE, todoState.list],
])(
  `중요도, 상태에 따라 TodoList를 필터링한다.`,
  async (filterType, expected) => {
    expect(
      await filterTodoList(todoState.list, {
        filterType,
      }),
    ).toStrictEqual(expected);
  },
);
