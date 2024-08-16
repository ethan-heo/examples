import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.updateTodoAction>;

export const updateTodo = (
  state: TodoApp.TodoState,
  updatedTodoItem: Action["payload"],
) => {
  return state.list.map((todoItem) =>
    todoItem.id === updatedTodoItem.id ? updatedTodoItem : todoItem,
  );
};

function* updateTodoSaga(action: Action) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(updateTodo(todo, action.payload)));
}

export default updateTodoSaga;
