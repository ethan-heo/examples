import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";
import { updatedTodoListAction } from "../../application/todo";

type Action = ReturnType<typeof TodoApp.updateTodoStatusAction>;

export const updateStatus = (
  state: TodoApp.TodoState,
  item: Action["payload"],
) => {
  return state.list.map((todoItem) =>
    todoItem.id === item.id ? { ...todoItem, status: item.status } : todoItem,
  );
};

function* updateStatusSaga(action: Action) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(updatedTodoListAction(updateStatus(todo, action.payload)));
}

export default updateStatusSaga;
