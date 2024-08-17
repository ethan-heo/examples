import { createReducer } from "@reduxjs/toolkit";
import { updatedTodoListAction } from "./actions";
import { TodoState } from "./interface";
import { TODO_FILTER, TODO_SORT } from "./constants";

export default createReducer<TodoState>(
  {
    list: [],
    filterType: TODO_FILTER.NONE,
    sortType: TODO_SORT.IMPORTANCE,
  },
  (builder) => {
    builder.addCase(updatedTodoListAction, (state, action) => {
      state.list = action.payload;
    });
  },
);
