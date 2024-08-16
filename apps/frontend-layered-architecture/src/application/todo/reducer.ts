import { createReducer } from "@reduxjs/toolkit";
import { updatedTodoListAction } from "./actions";
import { TodoState } from "./interface";
import { TODO_FILTER } from "./constants";

export default createReducer<TodoState>(
  {
    list: [],
    filterType: TODO_FILTER.NONE,
  },
  (builder) => {
    builder.addCase(updatedTodoListAction, (state, action) => {
      state.list = action.payload;
    });
  },
);
