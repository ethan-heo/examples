import { createReducer } from "@reduxjs/toolkit";
import { updatedTodoListAction } from "./actions";
import { TodoState } from "./interface";

export default createReducer<TodoState>(
  {
    list: [],
  },
  (builder) => {
    builder.addCase(updatedTodoListAction, (state, action) => {
      state.list = action.payload;
    });
  },
);
