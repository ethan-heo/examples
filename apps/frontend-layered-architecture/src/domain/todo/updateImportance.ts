import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.updateTodoImportanceAction>;

const updateImportance = (
  state: TodoApp.TodoState,
  payload: Action["payload"],
) => {
  return state.list.map((todoItem) =>
    todoItem.id === payload.id
      ? { ...todoItem, importance: payload.importance }
      : todoItem,
  );
};

function* updateImportanceSaga(action: Action) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(
    TodoApp.updatedTodoListAction(updateImportance(todo, action.payload)),
  );
}

export default updateImportanceSaga;
