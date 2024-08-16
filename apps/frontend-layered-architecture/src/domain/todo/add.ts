import { put, select } from "redux-saga/effects";
import { AppState, TodoApp } from "../../application";

export const addTodo = (
  state: TodoApp.TodoState,
  item: Omit<TodoApp.TodoState["list"][number], "id">,
): TodoApp.TodoState["list"] => {
  return [
    ...state.list,
    {
      id: "random",
      status: item.status ?? "NOT_READY",
      importance: item.importance ?? false,
      ...item,
    },
  ];
};

function* addTodoSaga(action: ReturnType<typeof TodoApp.addTodoAction>) {
  const todo = (yield select(
    (state: AppState) => state.todo,
  )) as TodoApp.TodoState;

  yield put(TodoApp.updatedTodoListAction(addTodo(todo, action.payload)));
}

export default addTodoSaga;
