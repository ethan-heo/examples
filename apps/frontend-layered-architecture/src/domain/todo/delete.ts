import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.deleteTodoAction>;

export const deleteTodo = (state: TodoApp.TodoState, id: Action["payload"]) => {
  return state.list.filter((todoItem) => todoItem.id !== id);
};

function* deleteTodoSaga(action: Action) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(deleteTodo(todo, action.payload)));
}

export default deleteTodoSaga;
