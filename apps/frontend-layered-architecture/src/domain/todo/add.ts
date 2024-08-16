import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.addTodoAction>;

export const addTodo = (state: TodoApp.TodoState, item: Action["payload"]) => {
  return [
    ...state.list,
    {
      ...item,
      id: "random",
      status: item.status ?? "NOT_READY",
      importance: item.importance ?? false,
    },
  ];
};

function* addTodoSaga(action: Action) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(addTodo(todo, action.payload)));
}

export default addTodoSaga;
