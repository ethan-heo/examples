import { takeLatest } from "redux-saga/effects";
import { TodoApp } from "../../application";
import addTodoSaga from "./add";
import deleteTodoSaga from "./delete";
import updateTodoSaga from "./update";
import updateStatusSaga from "./updateStatus";
import updateImportanceSaga from "./updateImportance";

function* todoSaga() {
  yield takeLatest(TodoApp.ADD_TODO_ACTION_TYPE, addTodoSaga);
  yield takeLatest(TodoApp.DELETE_TODO_ACTION_TYPE, deleteTodoSaga);
  yield takeLatest(TodoApp.UPDATE_TODO_ACTION_TYPE, updateTodoSaga);
  yield takeLatest(TodoApp.UPDATE_TODO_STATUS_ACTION_TYPE, updateStatusSaga);
  yield takeLatest(
    TodoApp.UPDATE_TODO_IMPORTANCE_ACTION_TYPE,
    updateImportanceSaga,
  );
}

export default todoSaga;
