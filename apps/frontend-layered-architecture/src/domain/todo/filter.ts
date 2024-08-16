import { put } from "redux-saga/effects";
import { TodoApp } from "../../application";

type Action = ReturnType<typeof TodoApp.filterTodoListAction>;

export const filterTodoList = async (
  todoList: TodoApp.TodoItem[],
  payload: Action["payload"],
) => {
  switch (payload.filterType) {
    case TodoApp.constants.TODO_FILTER.NONE:
      return todoList;
    case TodoApp.constants.TODO_FILTER.IMPORTANCE:
      return todoList.filter((todoItem) => todoItem.importance);
    default:
      return todoList.filter(
        (todoItem) => todoItem.status === payload.filterType,
      );
  }
};

function* filterTodoListSaga(action: Action) {
  /**
   * [TODO]
   * change external storage
   */
  const todoList: TodoApp.TodoItem[] = [];

  yield put(
    TodoApp.updatedTodoListAction(
      yield filterTodoList(todoList, action.payload),
    ),
  );
}

export default filterTodoListSaga;
