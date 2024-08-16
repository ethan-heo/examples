import { takeLatest } from "redux-saga/effects";
import {
  ADD_TODO_ACTION_TYPE,
  DELETE_TODO_ACTION_TYPE,
  UPDATE_TODO_ACTION_TYPE,
} from "../../application/todo";
import addTodoSaga from "./add";
import deleteTodoSaga from "./delete";
import updateTodoSaga from "./update";

function* todoSaga() {
  yield takeLatest(ADD_TODO_ACTION_TYPE, addTodoSaga);
  yield takeLatest(DELETE_TODO_ACTION_TYPE, deleteTodoSaga);
  yield takeLatest(UPDATE_TODO_ACTION_TYPE, updateTodoSaga);
}

export default todoSaga;
