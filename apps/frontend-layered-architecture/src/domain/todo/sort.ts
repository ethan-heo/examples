import { put } from "redux-saga/effects";
import { TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.sortTodoListAction>;

export const sortTodo = (
  todoList: TodoApp.TodoItem[],
  payload: Action["payload"],
) => {
  switch (payload.sortType) {
    case TodoApp.constants.TODO_SORT.IMPORTANCE:
      return todoList.sort((todoA) => (todoA.importance ? -1 : 1));
    default:
      return todoList;
  }
};

function* sortTodoSaga(action: Action) {
  const todoList: TodoApp.TodoItem[] = [];

  yield put(TodoApp.updatedTodoListAction(sortTodo(todoList, action.payload)));
}

export default sortTodoSaga;
