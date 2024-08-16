import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

export const updateTodo = (
  state: TodoApp.TodoState,
  updatedTodoItem: TodoApp.TodoState["list"][number],
) => {
  return state.list.map((todoItem) =>
    todoItem.id === updatedTodoItem.id ? updatedTodoItem : todoItem,
  );
};

function* updateTodoSaga(action: ReturnType<typeof TodoApp.updateTodoAction>) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(updateTodo(todo, action.payload)));
}

export default updateTodoSaga;
