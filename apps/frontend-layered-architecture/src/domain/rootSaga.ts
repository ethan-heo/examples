import { all } from "redux-saga/effects";
import todoSaga from "./todo/saga";

function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootSaga;
