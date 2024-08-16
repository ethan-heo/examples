import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

export const deleteTodo = (state: TodoApp.TodoState, id: string) => {
  return state.list.filter((todoItem) => todoItem.id !== id);
};

function* deleteTodoSaga(action: ReturnType<typeof TodoApp.deleteTodoAction>) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(deleteTodo(todo, action.payload)));
}

export default deleteTodoSaga;
